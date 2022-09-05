import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Alice Schwars</b> and <b>2 others</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Friends online</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightInfoKey">City :</span>
            <span className="rightInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightInfoKey">From :</span>
            <span className="rightInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightInfoKey">Relationship :</span>
            <span className="rightInfoValue">
              {user.relationship === 1
                ? "single"
                : user.relationship === 2
                ? "married"
                : "complicated"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">{user.friend}</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/6.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Alice Schwars</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/4.png`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Wang lee</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Maya Schmits</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/7.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Vanessa Muller</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/8.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Angela Polter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/10.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sarah Moon</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapp">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
