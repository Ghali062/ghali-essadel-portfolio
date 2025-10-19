import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Groupe Maroc Telecom, Rabat, Morocco</h4>
            <ul>
            <em>Developed predictive analytics and automation tools for the Marketing Department to enhance customer retention and lifetime value strategies.</em>
              <li>
                <strong>CLV Prediction Model:</strong> built a Random Forest model to segment clients (Low → Premium) and support data-driven marketing campaigns.
              </li>
              <li>
                <strong>Churn Analysis:</strong> designed a predictive pipeline to identify at-risk customers and provided actionable insights to reduce attrition rates.
              </li>
              <li>
                <strong>Reporting Automation:</strong> automated Power BI dashboards, reducing ETL time from 4 hours → 10 minute for weekly updates.
              </li>
              <li>
                <strong>Interactive Analytics App:</strong> delivered a Streamlit application integrated with Power BI for real-time marketing analytics and visualization.
              </li>
            </ul>
            <p><strong><em><u>Tools:</u></em></strong> Python, scikit-learn, SQL, Power BI, Streamlit, Pandas, Machine Learning, Data Visualization.</p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2024 - March 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
              <h3 className="vertical-timeline-element-title">Remote Data Scientist Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Université de Valence</h4>
              <ul>
                <em>Advanced climate analytics and machine learning for early detection of anthropogenic signals in large-scale environmental data.</em>
                <li>
                  <strong>Optimal Fingerprint Method:</strong> implemented and improved statistical fingerprinting to detect climate change signals from massive datasets (50 NetCDF, ERA5).
                </li>
                <li>
                  <strong>Dimensionality Reduction:</strong> used PCA to enhance result reliability and computational efficiency.
                </li>
                <li>
                  <strong>Nonlinear ML Approaches:</strong> experimented with SVM, Gaussian Processes, and Bayesian tests for robust, early signal detection.
                </li>
                <li>
                  <strong>Full Python Pipeline:</strong> developed reproducible code (NumPy, Pandas, Xarray, scikit-learn, Matplotlib, Cartopy) on Google Colab, versioned and published on GitHub.
                </li>
              </ul>
              <p><strong><em><u>Tools:</u></em></strong> Python, NumPy, Pandas, Xarray, scikit-learn, Matplotlib, Cartopy, SVM, Gaussian Processes, Bayesian inference, Data Visualization.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June - July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
              <h3 className="vertical-timeline-element-title">Data Scientist Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Atos, Rabat, Morocco</h4>
              <ul>
                <em>Built scalable data pipelines and predictive models to improve data quality and business decision-making for enterprise clients.</em>
                <li>
                  <strong>Data Pipeline & Quality:</strong> cleaned and structured 50k+ multi-source records (CSV, SQL) with Python (Pandas, NumPy), reducing missing values from 18% to 6%.
                </li>
                <li>
                  <strong>Reproducible Scripts:</strong> delivered robust ETL scripts for team-wide use and future automation.
                </li>
                <li>
                  <strong>Predictive Modeling:</strong> implemented and optimized supervised models (Random Forest, Logistic Regression, SVM) on 20k observations, achieving up to 87% accuracy and +10 F1 points over baseline.
                </li>
                <li>
                  <strong>Business Reporting:</strong> presented technical results and actionable recommendations to stakeholders via clear reports and visualizations.
                </li>
              </ul>
              <p><strong><em><u>Tools:</u></em></strong> Python, Pandas, NumPy, SQL, Random Forest, Logistic Regression, SVM, ETL, Data Quality, Data Visualization.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;