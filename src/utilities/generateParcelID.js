function generateParcelID(length) {
  // Define a set of characters including similar letters
  const characters = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

  let parcelID = "SX";

  for (let i = 0; i < length; i++) {
    // Randomly select a character from the set
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters.charAt(randomIndex);

    // Append the character to the parcel ID
    parcelID += randomChar;
  }

  return parcelID;
}

// Example: Generate a parcel ID with a length of 6 characters
// const randomParcelID = generateParcelID(6);

// console.log(randomParcelID);

module.exports = generateParcelID;
