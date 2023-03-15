import React from "react";

const Skillscards = ({ name, logo }) => {
  return (
    <div className="mySkills">
      <img src={logo} alt={name} width={90} />
    </div>
  );
};

export default Skillscards;
