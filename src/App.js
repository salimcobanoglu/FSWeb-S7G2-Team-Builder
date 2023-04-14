import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [team, setTeam] = useState([]);
  const [member, setMember] = useState({
    membername: "",
    membersurname: "",
    memberemail: "",
    memberposition: "",
  });

  function handleChange(event) {
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTeam([...team, member]);
  }
  function resetForm() {
    setMember("");
  }
  return (
    <div className="App">
      <h1>Fill the Form! Join the Team!</h1>
      <Form
        member={member}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
      />
      <Team team={team} />
    </div>
  );
}

export default App;
