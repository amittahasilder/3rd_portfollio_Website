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
              Passionate Full Stack Developer skilled in building modern web apps using React, Node.js, and scalable backend systems.
            </p>
          </div>

          <div className="profile-section">
            <h4>Skills</h4>
            <div className="profile-skills">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
          </div>

          <div className="profile-section">
            <h4>Experience</h4>
            <ul>
              <li>Developed full stack applications</li>
              <li>Built REST APIs</li>
              <li>Implemented authentication (JWT)</li>
              <li>Designed responsive UI</li>
            </ul>
          </div>

          <div className="profile-section">
            <h4>Education</h4>
            <ul>
              <li>Northern University Bangladesh (CSE)</li>
              <li>Gopalganj Polytechnic Institute</li>
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
