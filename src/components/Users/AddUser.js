import React from 'react';

function AddUser() {
  function addUserHandler(event) {
    event.preventDefault();
  }


  return <>
    <form onSubmit={addUserHandler}>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" />
      <label for="age">Age</label>
      <input type="number" name="age" id="age" />
      <button type="submit">Add User</button>
    </form>
  </>
}

export default AddUser;