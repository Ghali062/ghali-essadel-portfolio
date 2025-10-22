import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faDatabase, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python", "R", "SQL", "Machine Learning", "Deep Learning",
  "Scikit-learn", "TensorFlow", "PyTorch", "GPyTorch", "Bayesian Inference"
];

const labelsSecond = [
  "Power BI", "Tableau", "Streamlit", "ETL", "Airflow", "PySpark", "FastAPI", "Data Pipeline"
];

const labelsThird = [
  "NLP", "LLMs", "Transformers", "Computer Vision",
  "Hugging Face", "Autoencoders", "MLOps", "Docker", "AWS"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Data Science & Predictive Modeling */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science & Predictive Modeling</h3>
            <p>
              Conception et optimisation de modèles prédictifs à fort impact pour la segmentation client,
              la prévision de consommation et la détection de signaux climatiques.
              Maîtrise des frameworks de Machine Learning et Deep Learning.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Data Engineering & Business Intelligence */}
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Data Engineering & Business Intelligence</h3>
            <p>
              Développement de pipelines de données automatisés, intégration d’outils BI 
              et exploitation des architectures Cloud pour le reporting et la prise de décision.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Artificial Intelligence, NLP & Computer Vision */}
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Artificial Intelligence, NLP & Computer Vision</h3>
            <p>
              Développement d’applications intelligentes combinant NLP, Vision par ordinateur 
              et modèles de langage (LLMs). Expérience pratique en MLOps et déploiement via Docker & FastAPI.
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
