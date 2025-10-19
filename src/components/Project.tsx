import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>CLV Prediction App</h2>
                <p>Random Forest model predicting customer lifetime value and segmenting clients (Low to Premium) for telecom marketing.</p>
                <p><em>Tech:</em> Python, scikit-learn, Pandas, Streamlit, Power BI.</p>
            </div>
            <div className="project">
                <h2>RFM Segmentation </h2>
                <p>PCA + K-means clustering for behavioral segmentation and targeted marketing optimization.</p>
                <p><em>Tech:</em> Python, Pandas, scikit-learn, PyTorch, Autoencoders, Power BI.</p>
            </div>
            <div className="project">
                <h2>Energy Consumption Forecasting</h2>
                <p>Short-term power consumption forecasting using Prophet and LSTM for predictive analytics.</p>
                <p><em>Tech:</em> Python, scikit-learn, Pandas, Prophet, LSTM, Seaborn.</p>
            </div>
            <div className="project">
                <h2>Climate Change Signal Detection</h2>
                <p>Optimal Fingerprint statistical method detecting anthropogenic signals in temperature datasets.</p>
                <p><em>Tech:</em> Python, NumPy, Xarray, Cartopy, SciPy, PyTorch, Bayesian inference, Gaussian Process, SVM.</p>
            </div>
            <div className="project">
                <h2>Loan Approval Prediction</h2>
                <p>Statistical and machine learning analysis predicting bank loan approvals based on client data. Evaluation using ROC curve, AUC, and confusion matrix metrics.</p>
                <p><em>Tech:</em> R (FactoMineR, ggplot2, dplyr, caret), Statistiques descriptives, Machine Learning, Courbe ROC, AUC, Accuracy, matrice de confusion.</p>
            </div>
            <div className="project">
                <h2>Fantasy Factory Game</h2>
                <p>C++ object-oriented strategy game simulating the management of a magical factory. Features modular design, colorful ASCII interface, and fiscal optimization mini-game.</p>
                <p><em>Tech:</em> C++, STL (vector, map), POO, Makefile, Doctest.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;