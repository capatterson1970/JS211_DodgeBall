'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ];
  
  let listOfPlayers = [];
  let blueTeam = [];
  let redTeam = [];
  let greenTeam = [];
  let whiteTeam = [];
  
  //Class to encapsulate player Object
  class Player {
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs) {
        this.id = id;
        this.name = name; 
        this.age = age; 
        this.skillSet = skill; 
        this.placeBorn = born; 
        this.canThrowBall = thrw;
        this.canDodgeBall = dodge;
        this.hasPaid = paid;
        this.isHealthy = health;
        this.yearsExperience = yrs;           
    }

    const addPlayer = () => {
        listOfPlayers.push(this);
        let index = arrOfPeople.findIndexOf(this.id)
        arrOfPeople.splice(index, index + 1);
        // listPeopleChoices();
        // listPlayers();
    }
  }

  //Class to encapsulate the teammates on the Blue Team
  class BlueTeammate extends Player{
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs){
        super(id, name, age, skill, born, thrw, dodge, paid, health, yrs);
        this.mascot = 'Blue Jays';
        this.color = 'Blue';
    }

    const addBlue = () => {
        blueTeam.push(this);
        let index = listOfPlayers.findIndexOf(this.id)
        listOfPlayers.splice(index, index + 1);
    }
  }

  //Class to encapsulate the teammates on the Red Team
  class RedTeammate extends Player {
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs){
        super(id, name, age, skill, born, thrw, dodge, paid, health, yrs);
        this.mascot = 'Cardinals';
        this.color = 'Red';
    }

    const addRed = () => {
        redTeam.push(this);
        let index = listOfPlayers.findIndexOf(this.id)
        listOfPlayers.splice(index, index + 1);
    }
  }

  //Class to encapsulate the teammates on the Green Team
  class GreenTeammate extends Player {
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs){
        super(id, name, age, skill, born, thrw, dodge, paid, health, yrs);
        this.mascot = 'Mallards';
        this.color = 'Green';
    }

    const addGreen = () => {
        greenTeam.push(this);
        let index = listOfPlayers.findIndexOf(this.id)
        listOfPlayers.splice(index, index + 1);
    }

  }

  //Class to encapsulate the teammates on the White Team
  class WhiteTeammate extends Player {
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs){
        super(id, name, age, skill, born, thrw, dodge, paid, health, yrs);
        this.mascot = 'Doves';
        this.color = 'White';
    }
    
    const addWhite = () => {
        whiteTeam.push(this);
        let index = listOfPlayers.findIndexOf(this.id)
        listOfPlayers.splice(index, index + 1);
    }
    
  }
  
  //List people available and adds button to make them a player
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people');
    arrOfPeople.map(person => {
      const li = document.createElement("li");
      const buttonPlayer = document.createElement("button");
      buttonPlayer.innerHTML = "Make Player";
      buttonPlayer.addEventListener('click', function() {
          makePlayer(person.id);
          listElement.removeChild(li);
        } )
      li.appendChild(buttonPlayer)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }

  const listPlayers = () => {
    const listElement = document.getElementById('players');
    listOfPlayers.map(person => {
      const li = document.createElement("li");
      
      const buttonBlue = document.createElement("button");
      buttonBlue.innerHTML = "Add to Blue Team";
      buttonBlue.addEventListener('click', function() {
          makePlayer(person.id);                            //add to team color
          listElement.removeChild(li);
        } )
      
      const buttonRed = document.createElement("button");
      buttonRed.innerHTML = "Add to Red Team";
      buttonRed.addEventListener('click', function() {
          addRedTeam(person.id);
          listElement.removeChild(li);
        } )

      const buttonGreen = document.createElement("button");
      buttonGreen.innerHTML = "Add to Green Team";
      buttonGreen.addEventListener('click', function() {
          addGreenTeam(person.id);
          listElement.removeChild(li);
        } )

      const buttonWhite = document.createElement("button");
      buttonWhite.innerHTML = "Add to White Team";
      buttonWhite.addEventListener('click', function() {
          addWhiteTeam(person.id);
          listElement.removeChild(li);
        } )

      li.appendChild(buttonBlue);
      li.appendChild(buttonRed);
      li.appendChild(buttonGreen);
      li.appendChild(buttonWhite);
      li.appendChild(document.createTextNode(person.name));
      listElement.append(li);
    })
  }

  const genNum = () => {
      let num = Math.floor(Math.random() * 1);
      if (num == 1){
          return true;
      }
      return false;
  }

  const genNum1 = () => {
    return Math.floor(Math.random() * 10);
}
  
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)

    let index = arrOfPeople.indexOf(id);
    let thrw = genNum();
    let dodge = genNum();
    let paid = genNum();
    let health = genNum();
    let yrs = genNum1();
    
    let newPlayer = new Player(id, arrOfPeople[index].name, arrOfPeople[index].age, arrOfPeople[index].skillSet, arrOfPeople[index].placeBorn, thrw, dodge, paid, health, yrs);
    newPlayer.addPlayer();
  }

  const addBlueTeam = (id) => {
    console.log(`li ${id} was clicked!`)

    let index = listOfPlayers.indexOf(id);
    
    let newBluePlayer = new BlueTeammate (
        id, 
        listOfPlayers[index].name, 
        listOfPlayers[index].age, 
        listOfPlayers[index].skillSet, 
        listOfPlayers[index].placeBorn, 
        listOfPlayers[index].canThrowBall, 
        listOfPlayers[index].canDodgeBall, 
        listOfPlayers[index].hasPaid, 
        listOfPlayers[index].isHealthy, 
        listOfPlayers[index].yearsExperience
    );
    
    newBluePlayer.addBlue();
  }

  const addRedTeam = (id) => {
    console.log(`li ${id} was clicked!`)

    let index = listOfPlayers.indexOf(id);
    
    let newRedPlayer = new RedTeammate (
        id, 
        listOfPlayers[index].name, 
        listOfPlayers[index].age, 
        listOfPlayers[index].skillSet, 
        listOfPlayers[index].placeBorn, 
        listOfPlayers[index].canThrowBall, 
        listOfPlayers[index].canDodgeBall, 
        listOfPlayers[index].hasPaid, 
        listOfPlayers[index].isHealthy, 
        listOfPlayers[index].yearsExperience
    );
    
    newRedPlayer.addRed();
  }

  const addGreenTeam = (id) => {
    console.log(`li ${id} was clicked!`)

    let index = listOfPlayers.indexOf(id);
    
    let newGreenPlayer = new GreenTeammate (
        id, 
        listOfPlayers[index].name, 
        listOfPlayers[index].age, 
        listOfPlayers[index].skillSet, 
        listOfPlayers[index].placeBorn, 
        listOfPlayers[index].canThrowBall, 
        listOfPlayers[index].canDodgeBall, 
        listOfPlayers[index].hasPaid, 
        listOfPlayers[index].isHealthy, 
        listOfPlayers[index].yearsExperience
    );
    
    newGreenPlayer.addGreen();
  }

  const addWhiteTeam = (id) => {
    console.log(`li ${id} was clicked!`)

    let index = listOfPlayers.indexOf(id);
    
    let newWhitePlayer = new WhiteTeammate (
        id, 
        listOfPlayers[index].name, 
        listOfPlayers[index].age, 
        listOfPlayers[index].skillSet, 
        listOfPlayers[index].placeBorn, 
        listOfPlayers[index].canThrowBall, 
        listOfPlayers[index].canDodgeBall, 
        listOfPlayers[index].hasPaid, 
        listOfPlayers[index].isHealthy, 
        listOfPlayers[index].yearsExperience
    );
    
    newWhitePlayer.addWhite();
  }

  const removeBluePlayer = (id) => {
    let index = blueTeam.indexOf(id);
    listOfPlayers.push(blueTeam[index]);
    blueTeam.slice(index, index + 1);
  }

  const removeRedPlayer = (id) => {
    let index = redTeam.indexOf(id);
    listOfPlayers.push(redTeam[index]);
    redTeam.slice(index, index + 1);
  }

  const removeGreenPlayer = (id) => {
    let index = greenTeam.indexOf(id);
    listOfPlayers.push(greenTeam[index]);
    greenTeam.slice(index, index + 1);
  }

  const removeWhitePlayer = (id) => {
    let index = whiteTeam.indexOf(id);
    listOfPlayers.push(whiteTeam[index]);
    whiteTeam.slice(index, index + 1);
  }

  const removePlayer = (id) => {
    let index = listOfPlayers.indexOf(id);
    arrOfPeople.push(listOfPlayers[index]);
    listOfPlayers.slice(index, index + 1);
  }