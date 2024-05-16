import { useParams } from "react-router-dom";
import "./UserProfile.css";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { useAuth } from "../../components/auth/AuthProvider";
import {useFetchFollow} from '../../hooks/useFetchFollow'

export const UserProfile = () => {
  const { id } = useParams();
  const auth = useAuth();
  const userInfo = auth.getUserInfo();
  const {followers, followings} = useFetchFollow();
 

  return (
    <NavbarComponent>
      <div className="profile-container">
        <div className="profile-header">
          <img
            className="profile-avatar"
            src="https://i.pinimg.com/736x/8d/ff/c8/8dffc810ac2226282085257e73a60761.jpg"
            alt="User Avatar"
          />
          <h1 className="profile-name">{userInfo.userName}</h1>
        </div>
        <div className="profile-info">
          <div className="profile-stats">
            <div className="profile-stat">
              <span className="stat-label">Followers</span>
              <span className="stat-value">{followers?.length}</span>
            </div>
            <div className="profile-stat">
              <span className="stat-label">Following</span>
              <span className="stat-value">{followings?.length}</span>
            </div>
          </div>
          { id !== userInfo._id && <button className="follow-button">Follow</button> }
        </div>
      </div>
    </NavbarComponent>
  );
};


