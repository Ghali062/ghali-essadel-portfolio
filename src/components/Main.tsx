import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
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
              Final-year Applied Mathematics & Computer Science student at Polytech Sorbonne, 
              specializing in Machine Learning and predictive analytics. Proven track record 
              automating data pipelines, building ML models, and delivering 
              actionable insights that drive business decisions. Experienced with Python, 
              scikit-learn, PyTorch, and Cloud deployment.
            </p>
            <p>
              <strong>Currently seeking a 6-month Data Science internship starting February 2026.</strong>
            </p>
          </div>

          <div className="cta-buttons">
            <a href={`${process.env.PUBLIC_URL}/CV_Ghali_Essadel.pdf`} download="Ghali_Essadel_CV.pdf" className="download-cv-btn">
              <DownloadIcon /> Download CV
            </a>
          </div>

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