import React from "react";
import IMG1 from "../../assets/images/avatars/sumit.png";

const Member = () => {
  return (
    <div class="mt-3 space-y-4">
      <div class="checkbox-container">
        <img alt="" src={IMG1} class="team-avater" />
        <p class="label">Sumit Saha</p>
      </div>
    </div>
  );
};

export default Member;
