import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  // Testimonials,
  // Blog,
  Education,
   Experience,
  Contacts,
  Projects,
  Services,
  // Achievement,
} from "../../components";

import GithubCal from "../../components/GithubCalender/githubCal";
// import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>Suman Saurav-Portfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      {/* <Achievement /> */}
      {/* <Testimonials /> */}
      {/* <Blog/> */}

      <Services />
      
      <GithubCal />
      <Contacts />
      
      <Footer />
    </div>
  );
}

export default Main;
