import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance / Personal Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <ul className="career-list" style={{ color: "#aaa", paddingLeft: "15px", margin: "10px 0", lineHeight: "1.6", listStyleType: "disc", fontSize: "16px" }}>
              <li>Developed <strong>5+ full-stack applications</strong> using React.js and Node.js.</li>
              <li>Designed and integrated <strong>RESTful APIs</strong> for scalable client-server communication.</li>
              <li>Built <strong>responsive and user-friendly interfaces</strong> using Tailwind CSS.</li>
              <li>Implemented <strong>secure authentication systems (JWT, cookies)</strong>.</li>
              <li>Optimized database queries improving performance and efficiency.</li>
              <li>Used Git & GitHub for version control, collaboration, and project tracking.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
