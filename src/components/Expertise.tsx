import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python", "R", "SQL", "Machine Learning", "Deep Learning",
  "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"
];

const labelsSecond = [
  "Power BI", "Tableau", "Streamlit", "ETL", "Airflow",
  "AWS S3", "Snowflake", "Data Visualization", "Statistical Analysis", "A/B Testing"
];

const labelsThird = [
  "NLP", "Computer Vision", "LLMs", "Transformers",
  "Hugging Face",, "FastAPI", "MLOps", "Docker"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Data Science & Machine Learning */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science & Machine Learning</h3>
            <p>
              Design and deployment of predictive models using advanced statistical and deep learning techniques.
              Skilled in data preprocessing, feature engineering, and model optimization.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Data Engineering & Visualization */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Data Engineering & Visualization</h3>
            <p>
              Building automated data pipelines and interactive dashboards to support data-driven decisions.
              Expertise in ETL workflows, BI tools, and modern cloud architectures.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Artificial Intelligence & NLP */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Artificial Intelligence & NLP</h3>
            <p>
              Development of intelligent applications integrating NLP, computer vision, and large language models (LLMs).
              Experience with model deployment and MLOps practices.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
