import React from 'react'
import "./LeftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">

          <li className="leftPaneMenuIcon">
            <MarkUnreadChatAltIcon/>
            <span className="leftPaneMenuText">Messages</span>
          </li>

          <li className="leftPaneMenuIcon">
            <GroupIcon/>
            <span className="leftPaneMenuText">Groups</span>
          </li>

          <li className="leftPaneMenuIcon">
            <RssFeedIcon/>
            <span className="leftPaneMenuText">Feed</span>
          </li>

          <li className="leftPaneMenuIcon">
            <FlagIcon/>
            <span className="leftPaneMenuText">Pages</span>
          </li>

          <li className="leftPaneMenuIcon">
            <CalendarMonthIcon/>
            <span className="leftPaneMenuText">Events</span>
          </li>

          <li className="leftPaneMenuIcon">
            <BuildIcon/>
            <span className="leftPaneMenuText">Settings</span>
          </li>

          <li className="leftPaneMenuIcon">
            <SportsEsportsIcon/>
            <span className="leftPaneMenuText">Games</span>
          </li>

          <li className="leftPaneMenuIcon">
            <NewspaperIcon/>
            <span className="leftPaneMenuText">News</span>
          </li>

          <li className="leftPaneMenuIcon">
            <WorkOutlineIcon/>
            <span className="leftPaneMenuText">Jobs</span>
          </li>

          <li className="leftPaneMenuIcon">
            <AddShoppingCartIcon/>
            <span className="leftPaneMenuText">Market</span>
          </li>
          <hr/>
          <div className="pagesYouLiked">
            <h3>Pages you Liked</h3>
          </div>

          <div className="pageList">
          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>

          <li className="pageListitem">
            <img src="/image/Image1.jpg" alt="" className="pagePic" />
            <span className="pageName">Praneeth Jayesha</span>
          </li>
          </div>

        </div>
      </div>
    </div>
  )
}
