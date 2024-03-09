import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import Nasa from "./img/nasa.jpg";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Nasa} alt="" width={300} />
        <Avatar className="sidebar__avatar" />
        <h2>Mrunank Pawar</h2>
        <h4>mrunank@techbrewers.org</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">2,534</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statnumber">2,232</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('development')}
        {recentItem('techbrewers')}
        {recentItem('python')}
        {recentItem('programming ')}
      </div>
    </div>
  );
}

export default Sidebar;
