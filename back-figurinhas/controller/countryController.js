let countries = ['Brazil', 'Argentina'];

const getCountries = (req,res)=>{
  res.status(200).json(coutries);
}

const addCountries= (req,res)=>{
  const country = req.body;

  countries.push(country.country);

  res.status(200).json(country);
}

const removeCountries = (req,res)=>{
  const country = req.body.country;

  const index = countries.findIndex((pais) => pais === country);

  if(index === -1)
  {
      return res.status(404).json({message:'Country not found'});
  }

  countries.splice(index, 1);

  res.status(200).json({message:'Country deleted'});
 
}

module.exports={countries, getCountries, addCountries, removeCountries};