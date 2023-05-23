import React, { useRef } from "react";
import axios from 'axios';
import styled from "styled-components";

const Form = () =>{
  /* endereço do servidor */
  const host = '127.0.0.1';
  const port = 3001;

  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const name = e.target.elements.name.value;
      
      const country = e.target.elements.country.value;
      
      const sponsor = e.target.elements.sponsor.value;
      
      const position = e.target.elements.position.value;

      const cardtype = e.target.elements.cardtype.value;
      
      const age = e.target.elements.age.value;
      
      const height = e.target.elements.height.value;
      
      const weight = e.target.elements.weight.value;

      const response = await axios.post(`http://${host}:${port}/cards/add`, {
        name,
        country,
        sponsor,
        position,
        cardtype,
        age:Number(age),
        height:Number(height),
        weight:Number(weight)
      });     

      console.log(response);
    } 
    catch(error) {
      console.error(error);          
    }
  };

  return (
      <FormContainer  onSubmit={handleSubmit} ref = {ref}>
          <InputArea>
              <Label>Name</Label>
              <Input name="name" />
          </InputArea>
          <InputArea>
              <Label>Country</Label>
              <Input name="country" />
          </InputArea>
          <InputArea>
              <Label>Sponsor</Label>
              <Input name="sponsor" />
          </InputArea>
          <InputArea>
              <Label>Player Position</Label>
              <Input name="position" />
          </InputArea>
          <InputArea>
              <Label>Card Type</Label>
              <Input name="cardtype" />
          </InputArea>
          <InputArea>
              <Label>Age</Label>
              <Input name="age" />
          </InputArea>
          <InputArea>
              <Label>Height</Label>
              <Input name="height" />
          </InputArea>
          <InputArea>
              <Label>Weight</Label>
              <Input name="weight" />
          </InputArea>

          <Button type = "submit"> Save </Button>
      </FormContainer>
  );

};

export default Form;

const FormContainer = styled.form`
    width: 100%;
    margin-top: 30px;
    display: flex;
    background-color: white;
    flex-wrap: wrap;
    align-items: flex-end;
    gap:10px;
    padding: 20px;
`;


const InputArea = styled.div`   
    display: flex;
    background-color: white;
    flex-direction: column;    
`;

const Input = styled.input`   
    width: 120px;
    padding: 0 10px;
    border: 1px solid white;
    border-radius:5px;
    height: 40px;
`;

const Label = styled.label` 
`;

const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    height: 40px;
    color: white;
    background-color: blue;   
    padding: 10px;
`;