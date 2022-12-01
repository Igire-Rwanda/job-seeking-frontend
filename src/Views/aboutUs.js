import React from "react";
import { Button } from "@mui/material";
import "./aboutUs.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IngImage from "../components/Assets/images/ingProfile.jpg";
import fionaImage from "../components/Assets/images/fionaProfile.jpg";
import lydieImage from "../components/Assets/images/lydiaProfile.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="AboutUS">
        <div className="aboutTitle">
          <h1>
            About <span>Us</span>
          </h1>
        </div>
        <div className="aboutContainer" style={{}}>
          <h1 >More Jobs. Less Work.</h1>
          <p>
            We're <span style={{ fontWeight: "bolder" }}>the champion</span> for
            hourly workers and{" "}
            <span style={{ fontWeight: "bolder" }}>the ally</span> to the
            employer who hire then
          </p>
        </div>
      </div>
      <div className="aboutContent">
        <h2>Mission</h2>
        <p>
          To empower the self-employed with the resources needed to achieve
          their vision.{" "}
        </p>
        <br />
        <h2>Vision</h2>
        <p>
          Every day, we clear the path for hourly workers to show them an easier
          way to the right-fit job or shift.
        </p>
        <br />
        <h2>Our Position</h2>
        <p>
          We stand with hourly employers and guide them to the best people,
          faster and easier. <br />
          We champion better work/life integration through comprehensive private
          coaching, group training, and business services that ensure anyone can
          execute an effective strategy consistently.
        </p>
        <div className="btnQ">
          <Button class="btnQ1">Career Advice</Button>
          <nbsp />
          <Button>Coaching Services</Button>
        </div>
      </div>
      <div style={{ padding: "20px 80px" }}>
        <h2>Our team</h2>
        <br />
        <div style={{ display: "flex", gap: "40px" }}>
          <div>
            <img src={IngImage} alt="imageProfile"
              style={{ width: "300px" }}></img>
            <br />
            <h1 style={{
              fontSize: "20px",
              fontWeight: "800", color: "#63c49a"
            }}>Ingabire Immaculate</h1>
            <br />
            <p>
              Immaculate is the Founder of joLinker Jobseeking platform.
              She coaches her clients through their marketing strategies
              to ensure it works long-term for their lifestyle. More than a consultant, Immaculate
              teaches how to overcome challenges through confidence,
              determination, and resilience so that anyone can cultivate habits
              of success even if they seem beyond reach. ​ A firm believer in
              healthy work/life integration, Immaculate is committed to creating
              space for anyone, especially those with demanding lives, to enjoy
              life.
            </p>
            <br />
            <div className="btnQB">
              <Button>Connect</Button>
            </div>
          </div>
          <div>
            <img src={fionaImage} alt="imageProfile"
            ></img>
            <br />
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "800", color: "#63c49a"
              }}>Fiona Delice Nizeyimana</h1>
            <br />
            <p>
              Fiona Delice is the Founder and owner of Browning Business
              Consulting. She collaborates with entrepreneurs and business
              managers who are interested in creating a work environment around
              continuous improvement. Fiona Delice teaches her clients how to
              mitigate operational bottlenecks through education and coaching.
              She has a passion for process improvement & development, project
              management, software system onboarding, and customer relationship
              management.
            </p>
            <br />
            <div className="btnQB">
              <Button>Connect</Button>
            </div>
          </div>
          <div>
            <img src={lydieImage} alt="imageProfile"
              style={{ width: "300px" }}></img>
            <br />
            <h1 style={{
              fontSize: "20px",
              fontWeight: "800", color: "#63c49a"
            }}>Lydie Muhawenimana</h1>
            <br />
            <p>
              Lydia is the Founder of the Writer’s Launchpad and a speaker on
              the arts and techniques of writing. She leads workshops is a
              writing coach. Lydia gives support and guidance through every step
              of the creative process. She writes and she enhances writing. She
              can guide you through the steps to create a powerful dialogue with
              your reader or she can write strong and persuasive copy for your
              business. When you work with Lydia, you will have systems to guide
              you through the process of reaching the goals you set.
            </p>
            <br />
            <div className="btnQB">
              <Button>Connect</Button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="icons">
          <h4>Follow Us On</h4>
          <GitHubIcon />
          <InstagramIcon />
          <GoogleIcon />
          <LinkedInIcon />
        </div>
      </div>
      <br />


    </>
  );
};
export default AboutUs;
