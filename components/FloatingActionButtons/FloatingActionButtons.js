import { useState, useEffect } from "react";
import { IconMail, IconDocument } from "../Icons";
import styles from "./FloatingActionButtons.module.scss";

const FloatingActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollThreshold = window.innerHeight * 0.8;
      const shouldShow = window.pageYOffset > scrollThreshold;
      
      if (shouldShow && !isVisible && !isAnimatingOut) {
        setIsVisible(true);
      } else if (!shouldShow && isVisible) {
        // Start exit animation
        setIsAnimatingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          setIsAnimatingOut(false);
        }, 300); // Match the exit animation duration
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isAnimatingOut]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.fabContainer} ${isAnimatingOut ? styles.fabContainerExit : styles.fabContainerEnter}`}>
      <div className={styles.fabGroup}>
        {/* Email Button */}
        <a
          href="mailto:jayantaggarwal021@gmail.com"
          className={`${styles.fabButton} ${styles.emailButton}`}
          aria-label="Send Email"
          title="Let's Talk!"
        >
          <IconMail />
        </a>
        
        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1W_Qy6ONatZXHNb2D9kvdpc6B1sRb7k2u/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.fabButton} ${styles.resumeButton}`}
          aria-label="View Resume"
          title="My Resume"
        >
          <IconDocument />
        </a>
      </div>
    </div>
  );
};

export default FloatingActionButtons;
