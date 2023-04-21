import "./DateTime.css";
import "../pages.css";
import Welcome from "../../Welcome/Welcome";

const DateTime = () => {
  return (
    <div className="content page">
      <Welcome />
      <h3>Date Time Distribution of booked trips</h3>
      <div className="article">
        <img
          src="https://sparrxw.pythonanywhere.com/date-time-distribution"
          alt="date-time-distribution"
        />
        <h4>These 4 charts has following data: </h4>
        <li>
          The first chart shows distribution of rides booked across the months
          of the year
        </li>
        <li>
          The second chart shows breakdown of rides booked according to day of
          the month
        </li>
        <li>
          The third chart shows rides booked according to the day of the week
        </li>
        <li>
          The fourth chart shows rides booked according to the hour of the day
        </li>
        <li>
          When we see the pattern over here, we can notice day of the month and
          day in a week doesn't really give any valid insight
        </li>
        <li>
          But when we see month wise usage and hour wise usage, we can see clear
          pattern over there
        </li>
        <li>
          These insights can be helpful in taking any business related decisions
          to make maximum profitability
        </li>
      </div>
    </div>
  );
};

export default DateTime;
