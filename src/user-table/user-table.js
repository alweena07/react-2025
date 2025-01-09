import React, { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSave = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    setIsEditing(null);
  };
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAddButton = async () => {
    // setNewUser({
    //   name: `alweena${users.length + 1}`,
    //   username: `alweena@${users.length + 1}`,
    //   email: `alweena${users.length + 1}@gmail.com`,
    //   phone: "+91 8825188227",
    // });
    // setUsers((prevUsers) => [...prevUsers, { ...newUser, id: Date.now() }]);

    /* solution of above asynchronous state update --> newUser is empty when first time clicking on add button 
       bcz state is being update with the previous value, and in the useState, newUser object is empty
    */
    /* First solution is set object directly in your add function
          const newUser = {
           name: `alweena${users.length + 1}`,
           username: `alweena@${users.length + 1}`,
           email: `alweena${users.length + 1}@gmail.com`,
           phone: "+91 8825188227",
         }; 
    */
    /* Second solution is If u need to keep newUser in the state for other reasons, u can use functional state 
       update for both newUsers and users */

    setNewUser(() => {
      const updatedNewUser = {
        name: `alweena${users.length + 1}`,
        username: `alweena@${users.length + 1}`,
        email: `alweena${users.length + 1}@gmail.com`,
        phone: "+91 8825188227",
      };
      setUsers((prevUsers) => [...prevUsers, { ...updatedNewUser, id: Date.now() }]);
      return updatedNewUser;
      
    });
  };

  return (
    <div style={{ padding: "20px", width: "fit-content" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <h4>User Management</h4>
        <button onClick={() => handleAddButton()}>Add button</button>
      </div>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((user) =>
              isEditing === user.id ? (
                <EditableRow key={user.id} user={user} setIsEditing={setIsEditing} handleSave={handleSave} />
              ) : (
                <ReadOnlyRow key={user.id} user={user} setIsEditing={setIsEditing} handleDelete={handleDelete} />
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

const ReadOnlyRow = ({ user, setIsEditing, handleDelete }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <button style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setIsEditing(user.id)}>
          Edit
        </button>
        <button onClick={() => handleDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

const EditableRow = ({ user, setIsEditing, handleSave }) => {
  const [editedUser, setEditedUser] = useState(user);
  return (
    <tr>
      <td>{editedUser.id}</td>
      <td>
        <input
          type="text"
          value={editedUser.name}
          onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
        />
      </td>
      <td>
        <input
          type="text"
          value={editedUser.username}
          onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
        />
      </td>
      <td>
        <input type="text" value={editedUser.email} disabled={true} />
      </td>
      <td>
        <input
          type="text"
          value={editedUser.phone}
          onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
        />
      </td>
      <td>
        <button style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => handleSave(user.id, editedUser)}>
          Save
        </button>
        <button onClick={() => setIsEditing(null)}>Cancel</button>
      </td>
    </tr>
  );
};

export default UserTable;
