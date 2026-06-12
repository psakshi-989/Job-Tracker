import { Typography } from "@ui-elements/components";

export const MainLayout = ({ children }) => (
  <div className="main-layout">
    <header className="app-header">
      <Typography name="heading2" weight={700} color="#ffffff">
        Job Application Tracker
      </Typography>
      <Typography name="textSm" color="rgba(255,255,255,0.65)">
        Track your job applications and interview progress
      </Typography>
    </header>
    <main className="app-main">{children}</main>
    <footer
      className="app-footer"
      style={{ padding: 16, textAlign: "center", color: "#7a766f" }}
    >
      © {new Date().getFullYear()} Job Application Tracker
    </footer>
  </div>
);
