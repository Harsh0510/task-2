import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  .header {
    font-size: 2em;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

const Form = styled.div`
  width: 25%;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  @media screen and (max-width: 1400px) {
    width: 50%;
  }
  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FormInput = styled.div`
  margin-top: 6px;
`;
const Button = styled.button`
  background-color: #202020;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  margin-top: 6px;
`;
const Paragraph = styled.p`
  color: #ff0000;
`;
export { FormContainer, Form, FormInput, Input, Button, Paragraph };
