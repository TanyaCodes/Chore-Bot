//Global Variables
const doorImage1 = document.getElementById('door1');
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'
const startButton = document.getElementById('start');
let currentlyPlaying = true;

//Functions
const isBot = (door) => {
  if(door.src===botDoorPath) {
    return true} else {
      return false
    }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

  
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {gameOver('win');
} else if 
  (isBot(door)) {gameOver()}
}

const randomChoreDoorGenerator = () => {
 const choreDoor = Math.floor(Math.random() * numClosedDoors);
if (choreDoor === 0) {
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
} else if (choreDoor === 1) {
  openDoor1 = beachDoorPath;
  openDoor2 = botDoorPath;
  openDoor3 = spaceDoorPath;
} else {
  openDoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
  openDoor3 = botDoorPath;      
        }  
  }


doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying) {doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying) {doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying) {doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}
startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  }
}
const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  }
}

const gameOver = (status) => {
    if(status === 'win') {
      startButton.innerHTML = 'You win! Play again?'
      } else {
        startButton.innerHTML = 'Game over! Play again?'
      };
    currentlyPlaying = false;
  }


//Function Call for Start Round
startRound();