import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>

          {/* Groupe Maroc Telecom */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June – July 2025"
            iconStyle={{ background: "linear-gradient(135deg, #6a00f4, #00d4ff)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Scientist Intern</h3>
            <h4>Groupe Maroc Telecom — Rabat, Morocco</h4>
            <ul>
              <li>
                Automated the weekly <strong>e-boutique reporting</strong>,
                reducing data preparation time by <strong>90%</strong>.
              </li>
              <li>
                Segmented <strong>100k+ clients</strong> into 4 marketing
                profiles, improving targeting accuracy and campaign performance.
              </li>
              <li>
                Designed and deployed a <strong>predictive CLV model</strong>{" "}
                (85% precision) to estimate long-term customer value.
              </li>
            </ul>
            <p>
              <strong>Tools:</strong> Python (pandas, scikit-learn, PyTorch, Hugging Face), SAS, Power BI, Streamlit, SQL, NLP, Git
            </p>
          </VerticalTimelineElement>

          {/* Université de Valence */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 – Apr 2025"
            iconStyle={{ background: "linear-gradient(135deg, #6a00f4, #00d4ff)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Scientist Intern (Remote)</h3>
            <h4>University of Valencia — Spain</h4>
            <ul>
              <li>
                Applied the <strong>Optimal Fingerprint method</strong> to detect and validate anthropogenic climate signals.
              </li>
              <li>
                Built a <strong>Bayesian hybrid model</strong> combining SVM and Gaussian Processes for improved change detection.
              </li>
              <li>
                Enhanced model robustness through <strong>cross-validation</strong> and probabilistic inference techniques.
              </li>
            </ul>
            <p>
              <strong>Tools:</strong> Python (scikit-learn, PyTorch, GPyTorch, pandas, matplotlib), Bayesian Inference, Google Colab, Git
            </p>
          </VerticalTimelineElement>

          {/* Atos */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June – July 2024"
            iconStyle={{ background: "linear-gradient(135deg, #6a00f4, #00d4ff)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Data Scientist Intern</h3>
            <h4>Atos — Rabat, Morocco</h4>
            <ul>
              <li>
                Trained an object-detection model (<strong>YOLOv3 – PyTorch</strong>) to identify floating-roof oil tanks.
              </li>
              <li>
                Automated volume estimation and improved monitoring of production capacity.
              </li>
              <li>
                Deployed a <strong>Streamlit app</strong> for real-time visualization and inference.
              </li>
            </ul>
            <p>
              <strong>Tools:</strong> Python (PyTorch, OpenCV, scikit-learn), YOLOv3, TFRecord, Streamlit, Git
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
