import React from "react";

export default function (props) {
  const { team } = props;
  return (
    <div className="TeamContainer">
      <h2>Team Members</h2>
      {team.map((member, index) => (
        <ul className="TeamContent">
          <li key="membername">Member Name:{member.membername}</li>
          <li key="membername">Member Surname:{member.membersurname}</li>
          <li key="membermail">Member Email:{member.membermail}</li>
          <li key="memberposition">Member Position:{member.position}</li>
        </ul>
      ))}
    </div>
  );
}
