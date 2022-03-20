import { useParams, Link, useNavigate } from "react-router-dom";

import { GetUsers, GetUserById, UpdateUsers } from "../../services/user";
import { useEffect, useState } from "react";
export default function UpdateUser() {
  let { id } = useParams();

  let navigate = useNavigate();

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [emailAddress, setEmailAddress] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  useEffect(() => {
    GetUserById(id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setPassword(res.data.password);
        setEmailAddress(res.data.emailAddress);
        setMobileNumber(res.data.mobileNumber);
      })
      .catch((er) => console.log(er));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    UpdateUsers(id, {
      firstName: firstName,
      lastName: lastName,
      password: password,
      emailAddress: emailAddress,
      mobileNumber: mobileNumber,
    })
      .then((res) => {
        if (res) {
          alert("User updated successfully");
          navigate("/");
        }
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <>
      <h5>Update User Details</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email address"
              required
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              required
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
          </div>
          <button type="submit">Update User</button>
        </div>
      </form>
    </>
  );
}
