import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pdp from '../assets/images/photodeprofil.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pdp} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ghali062" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ghali-essadel/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ghali Essadel</h1>
          <p>Data Scientist</p>

          <div className="bio">
            <p>
              Final-year Applied Mathematics & Computer Science student at <strong>Polytech Sorbonne</strong>, 
              also pursuing a <strong>Master in Management</strong> at <strong>IAE Paris–Sorbonne</strong>.  
              Skilled in <strong>Python, PyTorch, FastAPI, Power BI</strong>, and predictive modeling.  
              Experienced in building ML solutions for customer value, credit approval, and energy forecasting.
            </p>
            <p>
              <strong>Seeking a 6-month Data Science internship starting February 2026.</strong>
            </p>
          </div>



          {/* Download CV button removed as requested */}

          <div className="mobile_social_icons">
            <a href="https://github.com/Ghali062" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ghali-essadel/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;