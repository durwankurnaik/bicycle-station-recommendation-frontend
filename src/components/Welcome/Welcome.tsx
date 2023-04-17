import "./Welcome.css";
import { AiOutlineDown } from "react-icons/ai";

const Welcome = () => {
  return (
    <div className="separator">
      <div className="welcome">
        <h2>
          Welcome, <span style={{ color: "teal" }}>Admin!</span>
        </h2>
        <p>Divvy Bikes Admin Dashboard panel</p>
      </div>

      <div className="dropdown">
        <select name="cities" id="city">
          <option value="eng">Chicago</option>
          <option value="hin">Boston</option>
          <option value="mar">New York</option>
          <option value="kan">Washington</option>
        </select>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default Welcome;
