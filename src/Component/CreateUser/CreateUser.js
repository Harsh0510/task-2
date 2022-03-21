import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostUsers } from "../../services/user";
import {
  FormContainer,
  Form,
  FormInput,
  Input,
  Button,
  Paragraph,
} from "./styled";
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
    <FormContainer>
      <h5 className='header'>Enter User Details</h5>
      <Form>
        <form onSubmit={handleSubmit}>
          <FormInput>
            <Input
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <Paragraph>{formErrors.firstName}</Paragraph>
          </FormInput>
          <FormInput>
            <Input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <Paragraph>{formErrors.lastName}</Paragraph>
          </FormInput>
          <FormInput>
            <Input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Paragraph>{formErrors.password}</Paragraph>
          </FormInput>
          <FormInput>
            <Input
              type='text'
              placeholder='Email address'
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
            />
            <Paragraph>{formErrors.emailAddress}</Paragraph>
          </FormInput>
          <FormInput>
            <Input
              type='text'
              placeholder='Mobile Number'
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            <Paragraph>{formErrors.mobileNumber}</Paragraph>
          </FormInput>
          <Button type='submit'>Create User</Button>
        </form>
      </Form>
    </FormContainer>
  );
}
