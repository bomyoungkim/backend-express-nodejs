const {Validator} = require('jsonschema');
const validador = new Validator();

var cardSchema = {
  type: "object",
  properties: {
    id: {type: 'string'},
    name: {type: 'string'},
    country: {type: 'string'},
    sponsor: {type: 'string'},
    position: {type: 'string'},
    cardtype: {type: 'string'},
    age: {type: 'number'},
    height: {type: 'number'},
    weight: {type: 'number'}
  },
  "required": ['name', 'country', 'sponsor', 'position', 'cardtype']
};

const validateCard = (e) => {
  return validador.validate(e, cardSchema)
}

module.exports = {validateCard};