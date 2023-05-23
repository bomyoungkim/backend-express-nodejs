let sponsors = ['Nike', 'Adidas', 'Coca-Cola', 'Wanda Group', 'Hyundai-Kia', 'Qatar Airways', 'Visa'];

const getSponsors = (req,res)=>{
  res.status(200).json(positions);
}

const addSponsors= (req,res)=>{
  const sponsor = req.body;

  sponsors.push(sponsor.sponsor);

  res.status(200).json(position);
}

const removeSponsors = (req,res)=>{
  const country = req.body.sponsor;

  const index = sponsors.findIndex((sp) => sp === sponsor);

  if(index === -1)
  {
      return res.status(404).json({message:'Sponsor not found'});
  }

  sponsors.splice(index, 1);

  res.status(200).json({message:'Sponsor deleted'});
 
}

module.exports={sponsors, getSponsors, addSponsors, removeSponsors};