import React, { useEffect, useState } from "react";
import "./styles/ProfileModal.css";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaTimes, FaFileAlt, FaPaperPlane } from "react-icons/fa";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");
  const fullTitle = "Full Stack Developer | Software Developer";
  const typingSpeed = 100;
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Wait for exit animation
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // lock scroll
      let i = 0;
      setTypedTitle("");
      const typingInterval = setInterval(() => {
        if (i < fullTitle.length) {
          setTypedTitle(fullTitle.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => {
        clearInterval(typingInterval);
        document.body.style.overflow = "auto";
      };
    } else {
      document.body.style.overflow = "auto";
      setTypedTitle("");
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`profile-modal-overlay ${isClosing ? 'closing' : ''}`}>
      <div className="profile-modal-container">
        <div className="particles-bg"></div>
        <button className="profile-close-btn" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="profile-modal-left">
          <div className="profile-image-wrapper">
            <img 
              src="/images/profile.jpg" 
              alt="Amit Tahasilder" 
              className="profile-modal-image" 
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.src = "/images/placeholder.webp";
              }}
            />
          </div>
        </div>

        <div className="profile-modal-right">
          <h2 className="profile-name">Amit Tahasilder</h2>
          <div className="profile-title">{typedTitle}</div>
          
          <div className="profile-info-row">
            <div className="profile-info-item">
              <FaMapMarkerAlt /> Bangladesh
            </div>
            <div className="profile-info-item">
              <FaEnvelope /> amittahasilder782@gmail.com
            </div>
          </div>

          <div className="profile-section">
            <h4>Professional Summary</h4>
            <p>
              Results-driven <strong>Full Stack Developer</strong> with hands-on experience building scalable web applications using <strong>React.js, Node.js, and modern databases</strong>. Strong in designing responsive UI, developing secure REST APIs, and managing full development lifecycle.<br/><br/>
              Passionate about writing clean, efficient code and building real-world solutions. Continuously learning and adapting to new technologies to deliver high-quality software products.
            </p>
          </div>

          <div className="profile-section">
            <h4>Technical Skills</h4>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#aaa", fontSize: "0.95rem", display: "block", marginBottom: "5px" }}>Languages:</span>
              <div className="profile-skills">
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
              </div>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#aaa", fontSize: "0.95rem", display: "block", marginBottom: "5px" }}>Frontend:</span>
              <div className="profile-skills">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Framer Motion</span>
                <span className="skill-tag">Context API</span>
              </div>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#aaa", fontSize: "0.95rem", display: "block", marginBottom: "5px" }}>Backend:</span>
              <div className="profile-skills">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">JWT</span>
              </div>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#aaa", fontSize: "0.95rem", display: "block", marginBottom: "5px" }}>Databases:</span>
              <div className="profile-skills">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>
            <div>
              <span style={{ color: "#aaa", fontSize: "0.95rem", display: "block", marginBottom: "5px" }}>Tools & Platforms:</span>
              <div className="profile-skills">
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h4>Professional Experience</h4>
            <ul>
              <li>Developed <strong>5+ full-stack applications</strong> using React.js and Node.js</li>
              <li>Designed and integrated <strong>RESTful APIs</strong> for scalable client-server communication</li>
              <li>Built <strong>responsive and user-friendly interfaces</strong> using Tailwind CSS</li>
              <li>Implemented <strong>secure authentication systems</strong> (JWT, cookies)</li>
              <li>Optimized database queries improving performance and efficiency</li>
              <li>Used Git & GitHub for version control, collaboration, and project tracking</li>
            </ul>
          </div>

          <div className="profile-section">
            <h4>🎯 Key Achievements</h4>
            <ul>
              <li>Built and deployed multiple real-world full-stack applications</li>
              <li>Strong understanding of <strong>frontend + backend integration</strong></li>
              <li>Experience with <strong>authentication, APIs, and databases</strong></li>
              <li>Consistent GitHub activity with real project implementations</li>
            </ul>
          </div>

          <div className="profile-section">
            <h4>Education</h4>
            <ul>
              <li>
                <strong>BSc in Computer Science & Engineering (CSE)</strong><br />
                Northern University Bangladesh
              </li>
              <li style={{ marginTop: "10px" }}>
                <strong>Diploma in Engineering (CSE)</strong><br />
                Gopalganj Polytechnic Institute | GPA: 3.70 / 4.00
              </li>
            </ul>
          </div>

          <div className="profile-actions">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amittahasilder782@gmail.com" 
              target="_blank" 
              rel="noreferrer" 
              className="profile-btn btn-primary"
            >
              <FaPaperPlane /> Contact Me
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="profile-btn btn-secondary"
            >
              <FaFileAlt /> View Resume
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/amittahasilder" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/amittahasilder" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
