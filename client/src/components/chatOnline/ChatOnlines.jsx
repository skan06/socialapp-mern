import React from "react";
import "./chatOnline.css";

export default function ChatOnlines() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img src="./assets/person/3.jpg" alt="" className="chatOnlineImg" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Alice</span>
      </div>
    </div>
  );
}
