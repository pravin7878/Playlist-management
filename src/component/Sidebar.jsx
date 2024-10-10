import { Link } from "react-router-dom";
import "../App.css";

// all icons
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { MdHistory, MdLiveTv, MdOutlineAttachMoney, MdPlaylistPlay } from "react-icons/md";
import { FaRegCalendarAlt, FaVideo } from "react-icons/fa";
import { TbClick } from "react-icons/tb";
import { HiCursorClick } from "react-icons/hi";

export default function Sidebar() {

  // hare is the all link detail
  const [links, setlinks] = useState(
    [
      {
        icon: <MdOutlineAttachMoney size={30} className="fill-linkText hover:fill-white" />,
        title: "Revenue",
        url: "/",
        isOpen: false,
        type: "link"
      },
      {
        icon: <FaVideo size={20} className="fill-linkText hover:fill-white" />,
        title: "Shoppable Video",
        url: "/",
        isOpen: false,
        type: "select"
      },
      {
        icon: <MdHistory size={23} className="fill-linkText hover:fill-white" />,
        title: "Story",
        url: "/",
        isOpen: false,
        type: "select"

      },
      {
        icon: <MdLiveTv size={23} className="fill-linkText hover:fill-white" />,
        title: "Live Commerce",
        url: "/",
        isOpen: false,
        type: "select"
      },
      {
        icon: <MdPlaylistPlay size={23} className="fill-linkText hover:fill-white" />,
        title: "Playlist Manager",
        url: "/playlist",
        isOpen: false,
        type: "select",
        option: { titel: "Product playlist", url: "/product/playlist" }
      },
      {
        icon: <HiCursorClick size={23} className="fill-linkText hover:fill-white text-linkText" />,
        title: "One Click Post",
        url: "/",
        isOpen: false,
        type: "link"
      },
      {
        icon: <FaRegCalendarAlt size={23} className="fill-linkText hover:fill-white" />,
        title: "Calendar",
        url: "/",
        isOpen: false,
        type: "link"

      },
      {
        icon: <IoMdSettings size={23} className="fill-linkText hover:fill-white" />,
        title: "Hire Influencer",
        url: "/",
        isOpen: false,
        type: "link"

      },
    ])

  const hendelClick = (id,e) => {
    e.preventDefault()
    let updateLink = links.map((link, idx) => {
      if (idx == id) {
        return { ...link, isOpen: link.isOpen ? false : true }
      }
      return { ...link, isOpen: false }
    })
    setlinks(updateLink)
  }

  return (
    <div className="flex flex-col flex-wrap gap-1 h-full rounded-2xl">
      {/* hare is logo saction */}
      <div className="flex justify-center items-center border-b-2 border-black h-[10%] text-white">
        <h1>Blaash</h1>
      </div>

      {/* hare is buttons saction */}
      <div className="flex flex-col h-[85%] p-3 gap-2">
        {links?.map((link, ind) => {
          if (link.type === "link") {
            return <Link
              to={link.url}
              key={ind}
              className="flex items-center w-[95%] m-auto gap-3  rounded-md text-sm  text-linkText hover:text-white"
            >
              <span className="text-center w-1/8">
                {link.icon}
              </span>
              {link.title}
            </Link>
          }

          else {
            return (<div key={ind}>
              <Link
              key={ind}
                to={link.url}
                onClick={(e) => hendelClick(ind, e)}
                className="flex items-center w-[95%] m-auto gap-3  rounded-md text-sm  text-linkText hover:text-white"
              >
                <span className="text-center w-1/8">
                  {link.icon}
                </span>
                {link.title}

                {link.isOpen ? <IoMdArrowDropup size={30} className="fill-linkText hover:fill-white" /> : <IoMdArrowDropdown size={30} className="fill-linkText hover:fill-white" />}
              </Link>

              <span style={{ display: link.isOpen ? "flex" : "none" }} className="bg-gray-500 p-1 rounded-md cursor-pointer ">
                <Link to={link?.option?.url}>{link?.option?.titel}</Link>
              </span>
            </div>)
          }
        })}
      </div>
    </div>
  );
}
