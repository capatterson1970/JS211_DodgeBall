'use strict';

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

    addPlayer = () => {
        listOfPlayers.push(this);
        let index = arrOfPeople.findIndex(value => {return value.id == this.id;});
        arrOfPeople.splice(index, 1);
        listPeopleChoices();
        listPlayers();
    }
  }

  //Class to encapsulate the teammates on the Blue Team
  class BlueTeammate extends Player{
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs){
        super(id, name, age, skill, born, thrw, dodge, paid, health, yrs);
        this.mascot = 'Blue Jays';
        this.color = 'Blue';
    }

    addBlue = () => {
        blueTeam.push(this);
        let index = listOfPlayers.findIndex(value => {return value.id == this.id;});
        listOfPlayers.splice(index, 1);
        listPlayers();
        listBlue();
    }
  }

  //Class to encapsulate the teammates on the Red Team
  class RedTeammate extends Player {
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs){
        super(id, name, age, skill, born, thrw, dodge, paid, health, yrs);
        this.mascot = 'Cardinals';
        this.color = 'Red';
    }

    addRed = () => {
        redTeam.push(this);
        let index = listOfPlayers.findIndex(value => {return value.id == this.id;});
        listOfPlayers.splice(index, 1);
        listPlayers();
        listRed();
    }
  }

  //Class to encapsulate the teammates on the Green Team
  class GreenTeammate extends Player {
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs){
        super(id, name, age, skill, born, thrw, dodge, paid, health, yrs);
        this.mascot = 'Mallards';
        this.color = 'Green';
    }

    addGreen = () => {
        greenTeam.push(this);
        let index = listOfPlayers.findIndex(value => {return value.id == this.id;});
        listOfPlayers.splice(index, 1);
        listPlayers();
        listGreen();
    }

  }

  //Class to encapsulate the teammates on the White Team
  class WhiteTeammate extends Player {
    constructor(id, name, age, skill, born, thrw, dodge, paid, health, yrs){
        super(id, name, age, skill, born, thrw, dodge, paid, health, yrs);
        this.mascot = 'Doves';
        this.color = 'White';
    }
    
    addWhite = () => {
        whiteTeam.push(this);
        let index = listOfPlayers.findIndex(value => {return value.id == this.id;});
        listOfPlayers.splice(index, 1);
        listPlayers();
        listWhite();
    }
    
  }
  
  //List people available and adds button to make them a player
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people');
    listElement.textContent = '';
    arrOfPeople.map(person => {
      const li = document.createElement("li");
      const buttonPlayer = document.createElement("button");
      buttonPlayer.innerHTML = "Make Player";
      buttonPlayer.addEventListener('click', function() { makePlayer(person.id);} )
      li.appendChild(buttonPlayer);
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
      listElement.append(li);
    })
  }

  // List of players available and adds buttons to add to teams
  const listPlayers = () => {
    const listElement = document.getElementById('players');
    listElement.textContent = '';
    listOfPlayers.map(person => {
      const li = document.createElement("li");
      
      const buttonBlue = document.createElement("button");
      buttonBlue.innerHTML = "Add to Blue Team";
      buttonBlue.addEventListener('click', function() {addBlueTeam(person.id);});

      const buttonRed = document.createElement("button");
      buttonRed.innerHTML = "Add to Red Team";
      buttonRed.addEventListener('click', function() {addRedTeam(person.id);});

      const buttonGreen = document.createElement("button");
      buttonGreen.innerHTML = "Add to Green Team";
      buttonGreen.addEventListener('click', function() {addGreenTeam(person.id);});

      const buttonWhite = document.createElement("button");
      buttonWhite.innerHTML = "Add to White Team";
      buttonWhite.addEventListener('click', function() {addWhiteTeam(person.id);});

        const buttonRemove = document.createElement("button");
        buttonRemove.innerHTML = "Remove Player";
        buttonRemove.addEventListener('click', function() {removePlayer(person.id);});

      li.appendChild(buttonBlue);
      li.appendChild(buttonRed);
      li.appendChild(buttonGreen);
      li.appendChild(buttonWhite);
      li.appendChild(buttonRemove);
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
      listElement.append(li);
    })
  }

  // List Blue Team and add Remove from team button
  const listBlue = () => {
    const listElement = document.getElementById('blue');
    listElement.textContent = '';
    blueTeam.map(person => {
      const li = document.createElement("li");
      const buttonRemove = document.createElement("button");
      buttonRemove.innerHTML = "Remove Player";
      buttonRemove.addEventListener('click', function() {removeBluePlayer(person.id);});
      li.appendChild(buttonRemove);
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
      listElement.append(li);
    });
  }

  // List Red Team and add Remove from team button
  const listRed = () => {
    const listElement = document.getElementById('red');
    listElement.textContent = '';
    redTeam.map(person => {
      const li = document.createElement("li");
      const buttonRemove = document.createElement("button");
      buttonRemove.innerHTML = "Remove Player";
      buttonRemove.addEventListener('click', function() {removeRedPlayer(person.id);});
      li.appendChild(buttonRemove);
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
      listElement.append(li);
    });
  }

  // List Green Team and add Remove from team button
  const listGreen = () => {
    const listElement = document.getElementById('green');
    listElement.textContent = '';
    greenTeam.map(person => {
      const li = document.createElement("li");
      const buttonRemove = document.createElement("button");
      buttonRemove.innerHTML = "Remove Player";
      buttonRemove.addEventListener('click', function() {removeGreenPlayer(person.id);});
      li.appendChild(buttonRemove);
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
      listElement.append(li);
    });
  }

  // List White Team and add Remove from team button
  const listWhite = () => {
    const listElement = document.getElementById('white');
    listElement.textContent = '';
    whiteTeam.map(person => {
      const li = document.createElement("li");
      const buttonRemove = document.createElement("button");
      buttonRemove.innerHTML = "Remove Player";
      buttonRemove.addEventListener('click', function() {removeWhitePlayer(person.id);});
      li.appendChild(buttonRemove);
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
      listElement.append(li);
    });
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
    // console.log(`li ${id} was clicked!`);

    let index = arrOfPeople.findIndex(value => {return value.id == id;});
    console.log(index);
    let thrw = genNum();
    let dodge = genNum();
    let paid = genNum();
    let health = genNum();
    let yrs = genNum1();
    
    let newPlayer = new Player(id, arrOfPeople[index].name, arrOfPeople[index].age, arrOfPeople[index].skillSet, arrOfPeople[index].placeBorn, thrw, dodge, paid, health, yrs);
    newPlayer.addPlayer();
  }

  const addBlueTeam = (id) => {
    // console.log(`li ${id} was clicked!`)

    let index = listOfPlayers.findIndex(value => {return value.id == id;});
    
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
    // console.log(`li ${id} was clicked!`)

    let index = listOfPlayers.findIndex(value => {return value.id == id;});
    
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
    // console.log(`li ${id} was clicked!`)

    let index = listOfPlayers.findIndex(value => {return value.id == id;});
    
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
    // console.log(`li ${id} was clicked!`)

    let index = listOfPlayers.findIndex(value => {return value.id == id;});
    
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
    let index = blueTeam.findIndex(value => {return value.id == id;});
    // console.log('index' + index)
    listOfPlayers.push(blueTeam[index]);
    blueTeam.splice(index, 1);
    listPlayers();
    listBlue();
  }

  const removeRedPlayer = (id) => {
    let index = redTeam.findIndex(value => {return value.id == id;});
    listOfPlayers.push(redTeam[index]);
    redTeam.splice(index, 1);
    listPlayers();
    listRed();
  }

  const removeGreenPlayer = (id) => {
    let index = greenTeam.findIndex(value => {return value.id == id;});
    listOfPlayers.push(greenTeam[index]);
    greenTeam.splice(index, 1);
    listPlayers();
    listGreen();
  }

  const removeWhitePlayer = (id) => {
    let index = whiteTeam.findIndex(value => {return value.id == id;});
    listOfPlayers.push(whiteTeam[index]);
    whiteTeam.splice(index, 1);
    listPlayers();
    listWhite();
  }

  const removePlayer = (id) => {
    let index = listOfPlayers.findIndex(value => {return value.id == id;});
    arrOfPeople.push(listOfPlayers[index]);
    listOfPlayers.splice(index, 1);
    listPlayers();
    listPeopleChoices();
  }