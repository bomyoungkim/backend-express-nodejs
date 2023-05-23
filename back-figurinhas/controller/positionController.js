let positions = ['Goalkeeper', 'Right Full-back', 'Left Full-back', 'Center-Back', 'Defensive Midfielder', 'Right Midfielder', 'Center Midfielder', 'Left Midlfielder', 'Center Forward', 'Attacking Midfielder'];

  const getPositions = (req,res)=>{
    res.status(200).json(positions);
  }
  
  const addPositions= (req,res)=>{
    const position = req.body;
  
    positions.push(position.position);
  
    res.status(200).json(position);
  }
  
  const removePositions = (req,res)=>{
    const country = req.body.position;
  
    const index = positions.findIndex((pos) => pos === position);
  
    if(index === -1)
    {
        return res.status(404).json({message:'Position not found'});
    }
  
    positions.splice(index, 1);
  
    res.status(200).json({message:'Position deleted'});
   
  }
  
  module.exports={positions, getPositions, addPositions, removePositions};