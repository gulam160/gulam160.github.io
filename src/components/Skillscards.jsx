import React from "react";

const Skillscards = ({ name, logo }) => {
  return (
    <div className="skills-card mySkills">
      <img className="skills-card-img" src={logo} alt={name} width={90} />
      <p className="skills-card-name">{}</p>
    </div>
  );
};

export default Skillscards;
