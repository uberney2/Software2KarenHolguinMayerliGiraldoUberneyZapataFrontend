import { useParams, useLocation } from "react-router-dom";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { useAuth } from "../../components/auth/AuthProvider";
import { useFetchFollow } from '../../hooks/useFetchFollow';
import "./UserProfile.css";

export const UserProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const auth = useAuth();
  const userInfo = auth.getUserInfo();
  const { followers, followings } = useFetchFollow(id);
  const user = location.state?.user || {};

  return (
    <NavbarComponent>
      <div className="profile-container">
        <div className="profile-header">
          <img
            className="profile-avatar"
            src="https://i.pinimg.com/736x/8d/ff/c8/8dffc810ac2226282085257e73a60761.jpg"
            alt="User Avatar"
          />
          <h1 className="profile-name">
            {id === userInfo._id ? userInfo.userName : user.userName}
          </h1>
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
          {id !== userInfo._id && <button className="follow-button">Follow</button>}
        </div>
      </div>
      <div>
        <label>My Products</label>
      </div>
    </NavbarComponent>
  );
};
