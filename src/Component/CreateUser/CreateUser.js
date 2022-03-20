import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostUsers } from "../../services/user";
import { validateFormValues } from "../../utils/validation";

export default function CreateUser() {
  let navigate = useNavigate();

  let [formErrors, setFormErrors] = useState({});
  let [isSubmit, setIsSubmit] = useState(false);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [emailAddress, setEmailAddress] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(
      validateFormValues({
        firstName,
        lastName,
        password,
        emailAddress,
        mobileNumber,
      })
    );
    setIsSubmit(true);
    PostUsers({
      firstName: firstName,
      lastName: lastName,
      password: password,
      emailAddress: emailAddress,
      mobileNumber: mobileNumber,
    })
      .then((res) => {
        if (res) {
          alert("User added successfully");
          navigate("/");
        }
      })
      .catch((err) => console.log(err.response));
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log({
        firstName,
        lastName,
        password,
        emailAddress,
        mobileNumber,
      });
    }
  }, [formErrors]);
  return (
    <>
      <h5>Enter User Details</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <p>{formErrors.firstName}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <p>{formErrors.lastName}</p>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>{formErrors.password}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email address"
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
            />
            <p>{formErrors.emailAddress}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            <p>{formErrors.mobileNumber}</p>
          </div>
          <button type="submit">Create User</button>
        </div>
      </form>
    </>
  );
}
