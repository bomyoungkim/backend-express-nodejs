let cardtypes = ['normal', 'extra base', 'extra bronze', 'extra silver', 'extra gold'];

const getCardTypes = (req,res)=>{
  res.status(200).json(cardtypes);
}

const addCardTypes= (req,res)=>{
  const cardtype = req.body;

  cardtypes.push(cardtype.cardtype);

  res.status(200).json(cardtype);
}

const removeCardTypes = (req,res)=>{
  const cardtype = req.body.cardtype;

  const index = cardtypes.findIndex((card) => card ===cardtype);

  if(index === -1)
  {
      return res.status(404).json({message:'Card type not found'});
  }

  cardtypes.splice(index, 1);

  res.status(200).json({message:'Card type deleted'});
 
}

module.exports={cardtypes, getCardTypes, addCardTypes,removeCardTypes};