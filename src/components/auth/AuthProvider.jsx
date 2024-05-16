import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  saveUser: (userInfo) => {},
  getToken: () => {},
  getUserInfo: () => {}
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

  function saveUser(userInfo){
    localStorage.setItem("token", userInfo.token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo.user));
    setIsAuthenticated(true);
  }

  function getToken(){
    const token = localStorage.getItem('token');
    if(token){
        return token; 
    }
    return null
  }

  function getUserInfo(){
    const userInfo = localStorage.getItem('userInfo');
    if(userInfo){
        return JSON.parse(userInfo); 
    }
    return null
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, saveUser, getToken, getUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
