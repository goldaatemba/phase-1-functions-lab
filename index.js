// Code your solution in this file!
const headquarters = 42;
const blockLengthInFeet = 264;

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * blockLengthInFeet;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * blockLengthInFeet;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Exporting functions for testing (if using Node.js testing frameworks like Mocha & Chai)
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};
