import "./Usage.css";
import "../pages.css";
import Welcome from "../../Welcome/Welcome";
import image1 from "../../../assets/plots/most-used-distribution.png";
import image2 from "../../../assets/plots/least-used-distribution.png";

const Usage = () => {
  return (
    <div className="content page">
      <Welcome />
      <h3>Usage Distribution of Stations</h3>

      {/* <img src="https://sparrxw.pythonanywhere.com/age-distribution" alt="age-distribution" /> */}

      <div className="article">
        <h4>1. Most used stations</h4>
        <img src={image1} alt="usage-distribution" />

        <h4>The above chart implies</h4>
        <li>
          These are the top 10 stations on basis of usage in the town of
          chicago.
        </li>
        <li>The numbers suggests that these stations were extensively used</li>
        <li>
          Stations owners can make use of this insight and increase number of
          bikes in those stations
        </li>
        <li>
          Another measure could be opening another bicycle stations near these
          high usage areas since people that use these bicycles are scattered
          around that region
        </li>
        <li>
          Making good decisions is only possible because of such valueable
          insights obtained from machine learning techniques
        </li>

        <h4>2. Least used stations</h4>
        <img src={image2} alt="usage-distribution" />
        <h4>The above chart implies</h4>
        <li>
          This chart makes its impression clear that these 10 stations needs to
          be decommisioned
        </li>
        <li>
          Bicycles from these stations can be commisioned at top 10 used
          stations and capitalised upon
        </li>
        <li>There is no point in keeping bikes commisioned at these staions</li>
        <li>Doing so will only inflict losses upon station owner</li>
        <li>
          One time offers can also be put into place in order to attract female
          customers to increase their numbers
        </li>
      </div>
    </div>
  );
};

export default Usage;
