// Encapsulate Variable p.132

// Mechanics
// > Create encapsulating functions to access and update the variable.
// > Run static checks.
// > Replace each reference to a variable with the encapsulating function. Test!
// > Restrict visibility to the variable. Ensures didn’t miss any references.`
// > Test

// The test case is the client in this scenario and will need to be updated
// as you encapsulate this variable.

// Using the book as a guide for Encapsulate Variable
  // 1. How can use encapsulate the player variable
  // 2. Allow updates to player information
  // 3. Allow updating total points

export const player = { firstName: 'Chris', lastName: 'Middleton', points: 1159};
