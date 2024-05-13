import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  saveUser: (token) => {},
  getToken: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(false);

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth(){
    const token = getToken();
    if(token){
        setIsAuthenticated(true);
    }else{
        setIsAuthenticated(false);
    }

  }

  function saveUser(token){
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  }

  function getToken(){
    const token = localStorage.getItem('token');
    if(token){
        return token; 
    }
    return null

  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, saveUser, getToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
