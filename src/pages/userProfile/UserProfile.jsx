import { useParams, useLocation } from "react-router-dom";
import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { useAuth } from "../../components/auth/AuthProvider";
import { useFetchFollow } from '../../hooks/useFetchFollow';
import "./UserProfile.css";
import { useEffect, useState } from "react";
import { followUser } from "../../services/followUser";

export const UserProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const auth = useAuth();
  const userInfo = auth.getUserInfo();
  const { followers, followings, refetchFollowers, isFollowing } = useFetchFollow(id, auth.getUserInfo()._id);
  const user = location.state?.user || {};

  const handleClick = async (e) =>{
    e.preventDefault();
    const token = auth.getToken()
    const res = await followUser(token, {id})
    refetchFollowers();
  }

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
              <span className="stat-label">followers</span>
              <span className="stat-value">{followers?.length}</span>
            </div>
            <div className="profile-stat">
              <span className="stat-label">Following</span>
              <span className="stat-value">{followings?.length}</span>
            </div>
          </div>
          {id !== userInfo._id && !isFollowing && (
            <button className="follow-button" onClick={handleClick}>Follow</button>
          )}
          {id !== userInfo._id && isFollowing && (
            <button className="followed-button" disabled>Following</button>
          )}
        </div>
      </div>
      <div>
        <label>My Products</label>
      </div>
    </NavbarComponent>
  );
};
