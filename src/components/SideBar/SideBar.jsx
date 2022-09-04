import React from "react";
import { IoFileTrayStacked } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineWarning, AiFillDatabase, AiOutlineInfoCircle, AiOutlineQuestionCircle,AiOutlineUserAdd, AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom"

const SideBar = () => {
  const menuItems = [
    {
      icon: IoFileTrayStacked,
      name: "Dashboard",
      link: "/",
    },
    {
      icon: BiUserPlus,
      name: "WOW Users",
      link: "#",
    },
    {
      icon: BsCameraVideo,
      name: "Video Clips",
      link: "#",
    },
    {
      icon: AiOutlineWarning,
      name: "Reported Content",
      link: "#",
    },
    {
      icon: AiFillDatabase,
      name: "Category",
      link: "#",
    },
    {
      icon: AiOutlineInfoCircle,
      name: "Info Page",
      link: "#",
    },
    {
      icon: AiOutlineQuestionCircle,
      name: "FAQ",
      link: "#",
    },
    {
      icon: AiOutlineBell,
      name: "Push Notification",
      link: "#",
    },
    {
      icon: AiOutlineUserAdd,
      name: "Internal User",
      link: "#",
    },
  ];

  return (
    <div className="sidebar-container p-3">
      <div className="pl-5">
        <h4 className="text-white">WOW</h4>
      </div>
      {menuItems.map((item, id) => {
        return (
          <span key="id" >
            <Link to={item.link} className="text-decoration-none">
              <div className="d-flex w-100 justify-content-evenly sideNavigation px-2 py-2 text-white align-items-center rounded">
                <span className="h4">
                  <item.icon />
                </span>
                <span className="pl-4 font-weight-medium m-0">{item.name}</span>
              </div>
            </Link>
          </span>

        )
      })}

    </div>
  );
};

export default SideBar;
