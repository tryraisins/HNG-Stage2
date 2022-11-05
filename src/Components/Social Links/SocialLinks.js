import React from "react";
import slack from "../../assets/slack.png";
import github from "../../assets/github.png";
const SocialLinks = () => {
  return (
    <div>
      <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U047WRMSS6T">
        <img src={slack} alt="slack" className="me-4" />
      </a>
      <a href="https://github.com/tryraisins">
        <img src={github} alt="github" />
      </a>
    </div>
  );
};

export default SocialLinks;
