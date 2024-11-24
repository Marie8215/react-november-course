import { useEffect, useState } from "react";
import "./progress-bar.css";

const countProgressPercent = () => {
  return Math.round(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );
};

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    let progressPercent = countProgressPercent();
    setProgress(progressPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};
