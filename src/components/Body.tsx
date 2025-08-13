import "./Body.scss";
import mainLogo from "../assets/illustration-working.svg";

function Body() {
  return (
    <main>
      <div className="main_div">
        <img src={mainLogo} alt="logo" className="main_logo" />

        <div className="body_info">
          <p className="body_tittle">
            More than just <br />
            shorter links
          </p>
          <p className="body_prgh">
            Build your brand's recognition and get detailed
            <br className="add_space" /> insights on how your links are
            performing.
          </p>
          <button className="get_button">Get Started</button>
        </div>
      </div>
    </main>
  );
}

export default Body;
