import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../Projects/Projects.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const GithubCal = () => {
  const { theme } = React.useContext(ThemeContext);
  
  return (
    <div  style={{background:"rgb(33,33,33)",color:"rgb(84,95,196)",marginTop:"-20px"}}>
    <div>
    <h1 className="projects--header" style={{ color: theme.primary }}>GitHub Stats</h1>
    </div>
      <GitHubCalendar username="sumansauravmay" style={{margin:"auto"}}/>
    </div>
  );
};

export default GithubCal;



