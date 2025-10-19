import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "R",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy"
];

const labelsSecond = [
    "Power BI",
    "Tableau",
    "Excel",
    "Data Visualization",
    "Statistical Analysis",
    "A/B Testing",
    "ETL",
    "AWS S3",
    "Snowflake"
];

const labelsThird = [
    "NLP",
    "Computer Vision",
    "LLMs",
    "Llama",
    "GPT",
    "BERT",
    "Transformers",
    "Hugging Face",
    "LangChain",
    "MLOps"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science & Machine Learning</h3>
                    <p>Expertise in data analysis and developing Machine Learning models. Advanced skills in statistical processing, feature engineering, and deploying predictive models.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Analytics & Visualization</h3>
                    <p>Creating interactive dashboards and analytical reports to facilitate decision-making. Mastery of BI tools and complex data visualization techniques.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Artificial Intelligence & NLP</h3>
                    <p>Development of advanced AI solutions including natural language processing, computer vision, and leveraging LLM models for enterprise applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;