import "./Stats.scss";
import recognition from "../assets/icon-brand-recognition.svg";
import detailed from "../assets/icon-detailed-records.svg";
import customizable from "../assets/icon-fully-customizable.svg";

function Stats() {
  return (
    <section className="stats">
      <p className="stats_heading">Advanced Statistics</p>
      <p className="stats_prgh">
        Track how your links are performing across the web tir our advanced
        statistics dashboard.
      </p>

      <div className="stats_container">
        <div className="line"></div>

        <div className="stats_points">
          <div className="circle_logo">
            <img src={recognition} alt="logo" />
          </div>
          <div className="holder">
            <p className="stats_header">Brand Recognition</p>
            <p className="stats_body">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>

        <div className="stats_points">
          <div className="circle_logo">
            <img src={detailed} alt="logo" />
          </div>
          <div className="holder">
            <p className="stats_header">Detailed Records</p>
            <p className="stats_body">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>

        <div className="stats_points last_one">
          <div className="circle_logo">
            <img src={customizable} alt="logo" />
          </div>

          <div className="holder">
            <p className="stats_header">Fully Customizable</p>
            <p className="stats_body">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="boost_section">
        <p>Boost your links today</p>

        <button className="get_button">Get Started</button>
      </div>
    </section>
  );
}

export default Stats;
