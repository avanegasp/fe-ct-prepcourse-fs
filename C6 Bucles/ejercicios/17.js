/*
function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:

// One way to resolve the exercise


  if(color === "blue" || color === "green" || color === "red" || color === "orange"){
    // return `This is ${color}`
    return "This is " + color
  }else{
    return "Color not found"
  }
}
*/

// Other way to resolve the exercise

function colors(color){
  switch (color) {
    case "blue":
      return "This is blue";
      break;
    case "red":
      return "This is red";
      break;
    case "green":
      return "This is green";
      break;
    case "orange":
      return "This is orange";
      break;
    default:
      return "Color not found"
    }
  }
  

colors("blue")

module.exports = colors;
