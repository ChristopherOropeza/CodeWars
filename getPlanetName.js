// Task:

/* Fix the function below so that it returns the correct values.

function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury';
    case 2:
      name = 'Venus';
    case 3:
      name = 'Earth';
    case 4:
      name = 'Mars';
    case 5:
      name = 'Jupiter';
    case 6:
      name = 'Saturn';
    case 7:
      name = 'Uranus';
    case 8:
      name = 'Neptune';
      break;
  }
  return name;
}

Example of correct output (Input --> Output ):

3 --> "Earth" */

// Solution:

function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
    default:
      name = 'Invalid input';
      break;
  } 
  return name;
}
