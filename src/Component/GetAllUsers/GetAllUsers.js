import React from "react";
import { GetUsers, DeleteUsers } from "../../services/user";
import { Link } from "react-router-dom";
import {
  UserContainer,
  UserHeader,
  Button,
  UserTable,
  TableContainer,
} from "./GetAllUsers-Styled";
import { useState, useEffect } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
export default function GetAllUsers() {
  // set users
  const [users, setUsers] = useState([]);
  const user = async () => {
    const userData = await GetUsers();
    setUsers(userData.data);
  };

  useEffect(() => {
    user();
  }, []);

  // delete user
  const handleDelete = (id) => {
    let result = window.confirm("Are you sure to Delete the user");
    if (result === true) {
      DeleteUsers(id)
        .then((res) => {
          if (res) {
            alert("User deleted successfully");
            user();
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("User is not deleted");
    }
  };
  return (
    <UserContainer>
      <UserHeader>
        <h5 className='header'>User Details</h5>
        <Link to='/createUser'>
          <Button>Create User</Button>
        </Link>
      </UserHeader>
      <TableContainer>
        <UserTable>
          <tr>
            <th scope='col'>Sr No</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email Address</th>
            <th scope='col'>Mobile Number</th>
            <th scope='col'>Is Active</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
          <tbody>
            {users.map((item, index) => {
              var url = `/editUser/${item._id}`;
              return (
                <>
                  <tr>
                    <td>{++index}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.emailAddress}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.isActive ? "Active" : "Inactive"}</td>
                    <td>
                      <Link to={url}>
                        <button className='icon'>
                          <FaPen />
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                        className='icon'
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </UserTable>
      </TableContainer>
    </UserContainer>
  );
}
