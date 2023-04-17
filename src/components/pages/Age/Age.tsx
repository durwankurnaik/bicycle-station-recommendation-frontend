import "./Age.css";
import "../pages.css";
import Welcome from "../../Welcome/Welcome";
import image from "../../../assets/plots/age-distribution.png";

const Age = () => {
  return (
    <div className="content page">
      <Welcome />
      <h3>Age Distribution of Userbase</h3>

      {/* <img src="https://sparrxw.pythonanywhere.com/age-distribution" alt="age-distribution" /> */}

      <div className="article">
        <img src={image} alt="age-distribution" />
        <h4>The above chart implies</h4>
        <li>The most old customers are the ones that are born in 1939</li>
        <li>The youngest customers are born in the year 2000</li>
        <li>The majority of the customers are born between 1980-1993</li>
        <li>
          This age group are usually called the <u>millenials</u>
        </li>
        <li>
          With this information, necessary steps could be taken that could help
          businesses
        </li>
      </div>
    </div>
  );
};

export default Age;
