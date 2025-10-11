import React, { useEffect, useState } from "react";

const LoadingIntro = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 4500); // total 4.5 seconds intro

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes zoomIn {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeOut {
            to {
              opacity: 0;
              visibility: hidden;
            }
          }
        `}
      </style>

      <div style={styles.textBox}>
        <h1 style={styles.nameText}>Hi, I am <span style={styles.highlight}>Sudesh Kavinda</span></h1>
        <h2 style={styles.welcomeText}>Welcome to my portfolio</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    overflow: "hidden",
    flexDirection: "column",
    animation: "fadeOut 0.8s ease-out 3.8s forwards" // fade away near end
  },
  textBox: {
    textAlign: "center"
  },
  nameText: {
    color: "white",
    fontSize: "3rem",
    fontFamily: "'Courier New', monospace",
    letterSpacing: "2px",
    margin: 0,
    animation: "zoomIn 2s ease-out forwards"
  },
  welcomeText: {
    color: "#ff4444",
    fontSize: "2rem",
    fontFamily: "'Courier New', monospace",
    letterSpacing: "2px",
    marginTop: "20px",
    opacity: 0,
    animation: "fadeIn 1.5s ease-out 2s forwards" // appears after name zooms
  },
  highlight: {
    color: "#ff4444"
  }
};

export default LoadingIntro;
