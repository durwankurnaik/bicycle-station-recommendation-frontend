import "./CustomerType.css";
import "../pages.css";
import Welcome from "../../Welcome/Welcome";
import image from "../../../assets/plots/customer-type-distribution.png";

const CustomerType = () => {
  return (
    <div className="content page">
      <Welcome />
      <h3>Customer type of our userbase</h3>
      <div className="article">
        <img src={image} alt="customer-type-distribution" width={800} />
        <h4>The above chart implies</h4>
        <li>
          The Customer tab suggests that the users that book rides are one time
          users
        </li>
        <li>
          The Subscriber tab suggests that the users have monthly or yearly
          subscription to the bicycle network
        </li>
        <li>
          In this case, subscription type users are more as compared to one time
          users
        </li>
        <li>
          This makes easy for business to launch better membership benefits and
          insentivise the subscriber's
        </li>
      </div>
    </div>
  );
};

export default CustomerType;
