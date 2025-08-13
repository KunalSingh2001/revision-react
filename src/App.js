import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userData, setUserData] = useState([]);
  function addUserHandler (uName, uAge) {
    setUserData((prev) => {
      return[...prev,{name: uName, age: uAge, id:Math.random.toString()}]
    })
  }
  return (
    <>
      <AddUser onSubmitForm = {addUserHandler}/>
      <UsersList users={userData}/>
    </>
  );
}

export default App;
