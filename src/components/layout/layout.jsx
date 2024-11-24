import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <ProgressBar />
      {children}
      <footer></footer>
    </>
  );
};
