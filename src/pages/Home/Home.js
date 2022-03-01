import Navbar from "../../components/Navbar/Navbar";
import me from "../../assets/me.jpg";
import "./Home.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

function Home() {
  return (
    <div className="home-page">
      <div className="home-nav-bar">
        <Navbar />
      </div>
      <div className="about-content">
        <div className="col-2">
          <img src={me} className="about-photo" alt="me" />
        </div>
        <div className="col-1">
          <div className="about-text-container">
            <h4 className="about-name">Laura Lu</h4>
            <div className="about-text">
              <p className="about-bio">
                Hey! My name is Laura. I am currently pursuing my BS in Computer
                Science with a minor in Statistics at the University of Toronto.
              </p>
              <p className="about-bio">
                I built this website to teach myself React and to showcase my
                works.
              </p>
              <p className="about-bio">
                If there are any fun ideas/opportunities you would like to
                discuss with me, feel free to reach out. Let’s be friends!
              </p>
            </div>
            <div className="about-social-links">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
