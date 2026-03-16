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
            <p>
              Developed multiple full stack web applications using React.js and Node.js.
              Built REST APIs, designed responsive UIs with Tailwind CSS, implemented JWT
              authentication, and managed MongoDB & PostgreSQL databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
