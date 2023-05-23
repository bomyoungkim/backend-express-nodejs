const {v4:uuidv4} = require('uuid');
const {countries} = require ('./countryController');
const {positions} = require ('./positionController');
const {sponsors} = require ('./sponsorController');
const {cardtypes} = require ('./cardtypeController');
const {validateCard} = require('../model/cardModel');

const fs = require('fs');

const CARD_FILE_PATH = '../back-figurinhas/model/cards.json';
const CHAR_ENCODING = 'utf8';


/* Promises */
//GET
function getCardsPromise()
{
    return new Promise((resolve, reject) => {        
        fs.readFile(CARD_FILE_PATH, CHAR_ENCODING, (err, data) => {
          if (err) {
            reject(err);
          } 
          else {            
            let cards = JSON.parse(data);

            resolve(cards);
          }
        });
    });
}

//POST
function addCardsPromise(card) 
{
  return new Promise((resolve, reject) => {      
    fs.readFile(CARD_FILE_PATH, CHAR_ENCODING, (err, data) => {
      if (err) {
        reject(err);
      } 
      else {      
        let cards = JSON.parse(data);
        
        if(cards.some(c => c.name === card.name))
        {
            reject(new Error('Card already exists'));                 
        }

        const id = uuidv4();

        const cardNew = { id, ...card };
        
        cards.push(cardNew)  
        
        fs.writeFile(CARD_FILE_PATH, JSON.stringify(cards), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(cardNew);
          }
        });
      }
    });
  });
}

//PUT/PATCH
function updateCardsPromise(id,card) 
{
  return new Promise((resolve, reject) => {      
    fs.readFile(CARD_FILE_PATH, CHAR_ENCODING, (err, data) => {
      if (err) {
        reject(err);
      } 
      else {
        let cards = JSON.parse(data);
        
        const index = cards.findIndex((c) => c.id === id);

        if (index === -1) {
          reject(new Error('Card not found'));
        } 
        else {
          
          const cardUpdate = { ...cards[index], ...card };
          
          cards[index] = cardUpdate; 
          
          fs.writeFile(CARD_FILE_PATH, JSON.stringify(cards), (err) => {
            if (err) {
              reject(err);
            } 
            else {
              resolve(cardUpdate);
            }
          });
        }
      }
    });
  });
}
  
//DELETE
function removeCardsPromise(id) 
{
  return new Promise((resolve, reject) => {
    fs.readFile(CARD_FILE_PATH, CHAR_ENCODING, (err, data) => {
      if (err) {
        reject(err);
      } 
      else {
          const cards = JSON.parse(data);
          
          const index = cards.findIndex(c => c.id === id);

          if (index === -1) {
            reject(new Error('Card not found'));
          } 
          else {
            cards.splice(index, 1);
            
            fs.writeFile(CARD_FILE_PATH, JSON.stringify(cards), err => {
              if (err) {
                reject(err);
              } 
              else {
                resolve();
              }
            });
          }       
      }
    });
  });
}


/* Métodos */
// GET
const getCards = (req,res)=>{
  getCardsPromise()
  .then(cards => res.status(200).json(cards))
  .catch(err => res.status(500).send(err.message));
}  

// ADD
const addCards = (req,res)=>{
  const card = req.body;
  
  const validResult = validateCard(card);
     
  if(!validResult.valid)
  {
    return res.status(400).json({message:'Invalid card data', errors : validResult.errors});
  }    

  // verifica valor do country do jogador
  if(!countries.includes(card.country)) 
  {
    return res.status(404).json({message:'Invalid country'});
  }

  // verifica valor do position do jogador
  if(!positions.includes(card.position)) 
  {
    return res.status(404).json({message:'Invalid position'});
  }

  // verifica valor do sponsor do jogador
  if(!sponsors.includes(card.sponsor)) 
  {
    return res.status(404).json({message:'Invalid sponsor'});
  }

  // verifica valor do sponsor do jogador
  if(!cardtypes.includes(card.cardtype)) 
  {
    return res.status(404).json({message:'Invalid card type'});
  }

  addCardsPromise(card)
  .then(cardNew => res.status(200).json(cardNew))
  .catch(err => res.status(500).send(err.message));
}  

// UPDATE
const updateCards = (req, res) =>{
  const id = req.params.id;

  const card = req.body;

  updateCardsPromise(id, card) 
  .then(cardUpdate => res.status(200).json(cardUpdate))
  .catch(err => res.status(500).send(err.message));
}

// REMOVE
const removeCards = (req, res)=>{      
    const id = req.params.id;

    removeCardsPromise(id)
    .then(() => res.status(200).json({message:'Card deleted'}))
    .catch(err => res.status(500).send(err.message));
}

module.exports = {getCards, addCards, updateCards, removeCards};