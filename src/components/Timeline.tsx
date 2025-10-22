import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>

          {/* Maroc Telecom */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June – July 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Scientist Intern</h3>
            <h4>Groupe Maroc Telecom — Rabat, Morocco</h4>
            <ul>
              <li>Automated weekly reporting, reducing update time by <strong>90%</strong>.</li>
              <li>Segmented <strong>100k+ clients</strong> into 4 marketing profiles to improve campaign targeting.</li>
              <li>Developed a <strong>predictive CLV model</strong> (85% accuracy) to estimate long-term customer value.</li>
            </ul>
            <p><strong>Tools:</strong> Python, scikit-learn, Power BI, Streamlit, SQL, NLP, Git</p>
          </VerticalTimelineElement>

          {/* Université de Valence */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 – Apr 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Scientist Intern (Remote)</h3>
            <h4>University of Valencia — Spain</h4>
            <ul>
              <li>Applied the <strong>Optimal Fingerprint</strong> method to detect anthropogenic climate signals.</li>
              <li>Designed a <strong>Bayesian hybrid approach</strong> combining SVM and Gaussian Processes.</li>
              <li>Enhanced model robustness through cross-validation and probabilistic inference.</li>
            </ul>
            <p><strong>Tools:</strong> Python, scikit-learn, PyTorch, GPyTorch, Bayesian inference, Colab, Git</p>
          </VerticalTimelineElement>

          {/* Atos */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June – July 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Scientist Intern</h3>
            <h4>Atos — Rabat, Morocco</h4>
            <ul>
              <li>Developed an object detection model (<strong>YOLOv3</strong>) to identify oil storage tanks.</li>
              <li>Automated volume estimation and improved monitoring of storage capacity.</li>
              <li>Deployed an interactive <strong>Streamlit</strong> app for real-time detection and visualization.</li>
            </ul>
            <p><strong>Tools:</strong> Python, PyTorch, OpenCV, Streamlit, Git</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
