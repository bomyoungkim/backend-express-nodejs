import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

import Form from "./components/Forms.js";
import Grid from "./components/Grid.js";

import {useEffect} from "react"

import {useState} from "react";

import axios from "axios"

function App() {
  /* endereço do servidor */
  const host = '127.0.0.1';
  const port = 3001;
  
  const [cards, setCards] =  useState([]);
  // const [onEdit,setOnEdit] =  useState(null);

  const getCards = async()=>{
    try {
        const res = await axios.get(`http://${host}:${port}/cards`);
        
        console.log(res.data);
        
        setCards(res.data);

    }
    catch(error) {
      toast.error(error)
    }

  }

  useEffect(()=>{
    getCards();
  }, [setCards]);
  
  return (
    <div >
      <Container>
        <Title> Coleção de Figurinhas da Copa </Title>
        <Form/>        
        <Grid cards={cards}/>
      </Container>

      <ToastContainer autoClose={4000} position={toast.POSITION.TOP_CENTER}/>
    </div>
  );
}

export default App;

const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
    gap:10px;
`;

const Title = styled.h2``;
