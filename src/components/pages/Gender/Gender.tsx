import "./Gender.css";
import "../pages.css";
import Welcome from "../../Welcome/Welcome";
import image from "../../../assets/plots/gender-distribution.png";

const Gender = () => {
  return (
    <div className="content page">
      <Welcome />
      <h3>Gender Distribution of Userbase</h3>

      {/* <img src="https://sparrxw.pythonanywhere.com/age-distribution" alt="age-distribution" /> */}

      <div className="article">
        <img src={image} alt="gender-distribution" width={800} />
        <h4>The above chart implies</h4>
        <li>
          The stats clearly imply that the male users are far more in numbers
          than the female users
        </li>
        <li>
          This analysis could help the station owners in capitalising on male
          bicycles and reducing female bicycles
        </li>
        <li>The graph shows nearly 70-30 distribution of male-female</li>
        <li>
          Membership plans can include more discounts for females to attract
          more female customers
        </li>
        <li>
          One time offers can also be put into place in order to attract female
          customers to increase their numbers
        </li>
      </div>
    </div>
  );
};

export default Gender;
