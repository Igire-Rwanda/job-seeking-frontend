import React from "react";
import { Button } from "@mui/material";
import "./aboutUs.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DiImage from "../components/Assets/images/ladynComp3.jpg"
import IngImage from "../components/Assets/images/ingProfile.jpg";
import fionaImage from "../components/Assets/images/fionaProfile.jpg";
import lydieImage from "../components/Assets/images/lydiaProfile.jpg";
import { Typography } from '@mui/material'
const AboutUs = () => {
  return (
    <>
      <div className="AboutUS">
        <div className="aboutTitle">
          <h2 class="titleN">
            About <span>Us</span>
          </h2>
        </div>
        <div className="aboutContainer" style={{ color: "white" }}>
          <h4 >More Jobs. Less Work.</h4>
          <h4>
            We're <span style={{ fontWeight: "bolder" }}>the champion</span> for
            hourly workers and{" "}
            <span style={{ fontWeight: "bolder" }}>the ally</span> to the
            employer who hire then
          </h4>
        </div>
      </div>
      <div className="aboutContent">
        <h2>Mission</h2>
        <h5>
          To empower the self-employed with the resources needed to achieve
          their vision.{" "}
        </h5>
        <br />
        <h2>Vision</h2>
        <h5>
          Every day, we clear the path for hourly workers to show them an easier
          way to the right-fit job or shift.
        </h5>
        <br />
        <h2>Our Position</h2>
        <h5>
          We stand with hourly employers and guide them to the best people,
          faster and easier. <br />
          We champion better work/life integration through comprehensive private
          coaching, group training, and business services that ensure anyone can
          execute an effective strategy consistently.
        </h5>
        <div className="btnQ">
          <Button class="btnQ1">Career Advice</Button>
          <nbsp />
          <Button>Coaching Services</Button>
        </div>
      </div>
      <div className="meetOurTeam">
        <div>
          <Typography variant="h4" gutterBottom>
            Meet our Team
          </Typography>
          <br />
          <div style={{ display: "flex", gap: "30px" }}>

            <div>
              <img src={fionaImage} alt="imageProfile"
                style={{ width: "240px" }}></img>
              <br />
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "800", color: "#63c49a"
                }}>Fiona Delice Nizeyimana</h2>
              <br />
              <h4>
                Fiona Delice is Cloud Advisory <br />Managing Director
              </h4>
              <br />
              <div className="btnQB">
                <Button>Connect</Button>
              </div>
            </div>
            <div>
              <img src={DiImage} alt="imageProfile"
                style={{ width: "240px" }}></img>
              <br />
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "800", color: "#63c49a"
                }}>Ladouce Uwase</h2>
              <br />
              <h4>
                Ladouce Uwase Cloud Transformation <br />and Migration Executive
              </h4>
              <br />
              <div className="btnQB">
                <Button>Connect</Button>
              </div>
            </div>
            <div>
              <img src={IngImage} alt="imageProfile"
                style={{ width: "240px" }}></img>
              <br />
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "800", color: "#63c49a"
                }}>Ingabire Immaculate</h2>
              <br />
              <h4>
                Ingi Zaki Cloud Advisory Managing <br /> Director
              </h4>
              <br />
              <div className="btnQB">
                <Button>Connect</Button>
              </div>
            </div>
            <div>
              <img src={lydieImage} alt="imageProfile"
                style={{ width: "240px" }}></img>
              <br />
              <h2 style={{
                fontSize: "20px",
                fontWeight: "800", color: "#63c49a"
              }}>Lydie Muhawenimana</h2>
              <br />
              <h4>
                Lydia is Cloud Transformation and <br /> Migration Executive
              </h4>
              <br />
              <div className="btnQB">
                <Button>Connect</Button>
              </div>
            </div>
          </div>
          <br />
          <br />

        </div>
      </div>

      <br />


    </>
  );
};
export default AboutUs;