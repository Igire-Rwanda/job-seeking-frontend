import { Button } from "@mui/material";
import React from "react";
import "./contactUs.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ContactUS = () => {
  return (
    <>
      <div style={{ padding: "80px " }}>
        <h1 className="contactTitle"> Our location!</h1>
        <br />
        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.547968872041!2d30.072494213365733!3d-1.9329837985907257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6af7d100737%3A0x3fb318e05a434b9f!2sKacyiru%20Hospital!5e0!3m2!1sen!2srw!4v1666273719067!5m2!1sen!2srw"
            width="600"
            height="450"
            style={{
              border: 0,
              height: "420px",
              width: "65%",
              boxShadow: "2px 2px 2px 2px gray",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br />
        <br/>
        <div className="paragraphContact">
          <p>
            <span style={{ borderBottom: "24px" }}>Call now</span> or or chat
            live using the chatbox. If you prefer,{" "}
            <span style={{ fontWeight: "600" }}>
              we can come to you for private <br />
              workshops and coaching for Rwanda Country.
            </span>
          </p>{" "}
          <br />
          <br/>
        </div>
        <div
          style={{
            display: "flex",
            gap: "140px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "bold",textAlign:"start",color:"#63c49a" }}>
              Get in Touch
            </h1>
            <br />
            <p style={{textAlign:"start"}}>Name</p>
            <input></input>
            <p style={{textAlign:"start"}}>Email</p>
            <input></input> <br />
            <br />
            <div className="btnQ1 btn7">
              <Button style={{ color: "white" }}>Submit</Button>
            </div>
          </div>

          <div
            style={{
              paddingTop: "80px",
            }}
          >
            <p>
              <span className="spany">Phone: </span> +250786024528
            </p>
            <p>
              <span className="spany">Email:</span> joLinker@gmail.com
            </p>
            <p>
              <span className="spany">Twitter :</span>JoLinker@twitter
            </p>
            <p>
              <span className="spany">Linkedln:</span>JoLinker@linkedln
            </p>
          </div>
        </div>
        <br/> <br/>
        <div class="icons" style={{justifyContent:"center"}}>
            <h4 style={{fontSize:"20px",fontWeight:"600"}} >Follow Us On</h4>
              <GitHubIcon />
              <InstagramIcon />
              <GoogleIcon />
              <LinkedInIcon />
            </div>
      </div>
     
    </>
  );
};
export default ContactUS;
