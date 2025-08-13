import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";


const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  }  
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if (username !== "" && age > 1) {
      props.onSubmitForm(username, age);
      setUserName("");
      setAge("");
    }
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler} value={username} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
