import "./WeatherImpact.css";
import "../pages.css";
import Welcome from "../../Welcome/Welcome";
import image1 from "../../../assets/plots/average-travel-type-of-day.png";
import image2 from "../../../assets/plots/average-travel.png";
import image3 from "../../../assets/plots/travel-by-season.png";

const WeatherImpact = () => {
  return (
    <div className="content page">
      <Welcome />
      <h3>Impact of Weather on bicycle usage</h3>

      {/* <img src="https://sparrxw.pythonanywhere.com/age-distribution" alt="age-distribution" /> */}

      <div className="article">
        <h4>1. Impact of type of day</h4>
        <img src={image1} alt="age-distribution" width={1200} />
        <h4>The above chart implies</h4>
        <li>The usage of bicycles on various types of days</li>
        <li>
          As in the chart, we can see that usage of bikes on weekends and
          holidays is quite flat
        </li>
        <li>Not much of a change occurs throghout the day</li>
        <li>
          But in weekdays we can see that during morning hours like 6-10 AM, the
          usage peaks
        </li>
        <li>It also strikes at the time around 3-7 PM</li>
        <li>
          Stations owners can leverage this data and make necessary arrangements
          for bicycles during this time period
        </li>

        <h4>2. Impact of seasons on average travel</h4>
        <img src={image2} alt="age-distribution" width={1200} />
        <h4>The above chart implies</h4>
        <li>
          The average travel according to various seasons i.e. summer, winter,
          autumn and spring
        </li>
        <li>
          We can clearly notice that in the mornings of winter season, the usage
          is lowest as compared to other seasons
        </li>
        <li>
          The opposite can be said at evenings of summer season, it has the
          highest usage average
        </li>
        <li>
          Now this data can be very beneficial to marketting analysts and they
          can capitalise on such insights
        </li>

        <h4>3. Impact of seasons on overall travel</h4>
        <img src={image3} alt="age-distribution" width={1200} />
        <h4>The above chart implies</h4>
        <li>Thes same pattern as above is emerged over here too</li>
        <li>
          Winter mornings seems to be least favourable for bicycles rides due to
          weather conditions
        </li>
        <li>
          Also summer evenings can be considered the most favourable for riding
          bicycles
        </li>
        <li>
          Thanks machine learning libraries, we can get valuable insights from a
          mere CSV file which contains tabular data
        </li>
        <li>
          This tabular datat does not hold any valuable information to human
          eyes, but for ML, this is like gold mine
        </li>
      </div>
    </div>
  );
};

export default WeatherImpact;
