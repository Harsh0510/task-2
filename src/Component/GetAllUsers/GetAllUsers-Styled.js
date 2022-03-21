import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UserHeader = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;
  .header {
    font-size: 2em;
    font-weight: 500;
  }
  @media screen and (max-width: 387px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #202020;
  color: #f5f5f5;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

const UserTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  overflow-x: scroll;
  width: 80vw;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  td,
  th {
    padding: 8px;
  }
  th {
    padding: 12px;
    background-color: #202020;
    color: white;
  }
  .icon {
    border: none;
    cursor: pointer;
  }
`;

const TableContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  @media screen and (max-width: 700px) {
    justify-content: unset;
  }
`;
export { UserContainer, UserHeader, Button, UserTable, TableContainer };
