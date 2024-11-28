import { useEffect, useState } from "react";
import styles from "./progress-bar.module.css";

const countProgressPercent = () => {
  return Math.round(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );
};

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progressPercent = countProgressPercent();
      setProgress(progressPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
  );
};
