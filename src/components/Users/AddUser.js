import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  }  
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({title:"Invalid Input",message: "Please enter a valid username and age (non-empty values)." })
      return;
    }
    if (+age < 1) {
      setError({title:"Invalid Input", message: "Please enter a valid age (> 0)."})
      return;
    }
    if (username !== "" && age > 1) {
      props.onSubmitForm(username, age);
      setUserName("");
      setAge("");
    }
  }

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <div>
      {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={userNameChangeHandler} value={username} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
