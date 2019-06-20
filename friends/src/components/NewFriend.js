import React from 'react';
import styled from "styled-components";


    const NewFriend = props => {
      console.log(props);
      return (
        <FormWapper>
          <h1>Add New Friend</h1>
          <form action="">
            <div>
              <input type="text"  name = "name" placeholder = 'Enter your name' />
            </div>
            <div>
              <input type="email"  name = "email" placeholder = "Enter your email" />
            </div>
            <div>
              <input type="number"  name = "age" placeholder = "Enter your age" />
            </div>
            <ButtonContainer>
              <button type = "submit">
              Add New Friend
              </button>
          </ButtonContainer>
          </form>
      </FormWapper>
      );
    }


const FormWapper = styled.div`
  border: 1px solid #222;
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  div {
    width: 80%;
    margin: 0 auto;
  }

  input {
    width: 100%;
    padding: 0;
    height: 48px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 1.1rem;
    outline: none;
    margin-bottom: 10px;
  }
`

const ButtonContainer = styled.div `
  display: inline-flex;
  justify-content: center;

  button {
    width: 50%;
    padding: 5px 10px;
    height: 40px;
    background: green;
    color: #fff;
    font-size: 1rem;
  }
`

export default NewFriend;
