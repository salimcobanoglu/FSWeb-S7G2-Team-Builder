import React from "react";

export default function (props) {
  const { member, handleChange, handleSubmit, resetForm } = props;
  return (
    <div className="FormContainer">
      <div className="FormContent">
        <form onSubmit={(event) => handleSubmit(event)}>
          <label>
            Member Name:
            <input
              type="text"
              name="membername"
              value={member.membername}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <br />
          <label>
            Member Surname:
            <input
              type="text"
              name="membersurname"
              value={member.membersurname}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <br />
          <label>
            Member Mail:
            <input
              type="mail"
              name="membermail"
              value={member.membermail}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <br />
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={member.position}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <br />
          <div className="buttonContainer">
            <button type="submit">SUBMIT!</button>
            <button type="change">CHANGE!</button>
            <button type="reset" onClick={resetForm}>
              RESET!
            </button>
          </div>
        </form>
      </div>
      <hr size="3px" color="black" />
    </div>
  );
}
