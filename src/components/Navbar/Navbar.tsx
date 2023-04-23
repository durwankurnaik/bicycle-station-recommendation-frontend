import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png";
import "./Navbar.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        BSRS
      </div>

      <div className="header">
        <div className="left">
          <IoMdNotificationsOutline style={{ cursor: "pointer" }} size={30} />
          <FiSettings style={{ cursor: "pointer" }} size={25} />
          <div className="select">
            <select name="languages" id="lang">
              <option value="eng">English</option>
              <option value="hin">Hindi</option>
              <option value="mar">Marathi</option>
              <option value="kan">Kannada</option>
            </select>
            <AiOutlineDown />
          </div>
        </div>
        <div className="right">
          <div className="search_bar">
            <input type="text" placeholder="Search" />
            <BsSearch />
          </div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
