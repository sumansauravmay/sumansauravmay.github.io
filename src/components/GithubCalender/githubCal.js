import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../Projects/Projects.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const GithubCal = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      style={{
        background: "rgb(33,33,33)",
        color: "rgb(84,95,196)",
        marginTop: "-20px",
      }}
    >
      <div>
        <h1 className="projects--header" style={{ color: theme.primary }}>
          GitHub Calendar
        </h1>
      </div>
      <GitHubCalendar username="sumansauravmay" style={{ margin: "auto" }} />

      <div>
        <h1 className="projects--header" style={{ color: theme.primary }}>
          GitHub Stats
        </h1>
      </div>

      <p align="center">
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=sumansauravmay&show_icons=true&locale=en&layout=compact"
          alt="sumansaurav"
        />
      </p>
      <p align="center">
        &nbsp;
        <img
          align="center"
          style={{ margin: "5px", width: "350px" }}
          src="https://github-readme-stats.vercel.app/api?username=sumansauravmay&show_icons=true&locale=en"
          alt="sumansauravmay"
        />
      </p>

      <p align="center">
        <img
          align="center"
          style={{ margin: "5px", width: "350px" }}
          src="https://github-readme-streak-stats.herokuapp.com/?user=sumansauravmay"
          alt="sumansauravmay"
        />
      </p>
    </div>
  );
};

export default GithubCal;
