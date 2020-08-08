# JS211_DodgeBall

Once you understand the challenge, whiteboard the logic.
Create a list of steps your app needs to do. (Code Plan)
Translate to psuedo code.
Translate to javascript on paper
Make a repo, clone, open and copy/paste the starter code below into two new files: index.html and main.js
Start by working through the existing code to understand it and write comments explaining what each line does.
Put your Code Plan in the README.md file or your repo

Work through the follow challenges:
    Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience
    Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
    Add a button to each new player that will allow each one to be selected for either Blue Team or Read Team and now has mascot and teamColor
    Use the this keyword to assign each player to a team with an onclick. Either Blue Team or Red Team.
    Display the two teams in a new list in the DOM with appropriate titles.
    Create 3 tests for your application.

Add an input at the top of the Window that allows for a user to add new people!
Make a random-izer to automatically select teams for us!
Add multiple teams to add players to.
Change the color of the text for each color based on the color of their team!
Make a button to remove Players from Teams and back to the Players list.
Make a button to remove Players from the Players List and move them into the People List.

---- To Do ----
1. Add to constructor for Player Object canThrowBall (boolean), canDodgeBall (boolean), hasPaid (boolean), isHealthy (boolean), yearsExperience (int)
2. Push player information from list of people to player list and add properties from step 1
3. Create Buttons to add next to the list of player names to choose Red or Blue team
4. Buttons from step 3 will push player from player list to the list of the team selected and add mascot and teamColor property. (this)
5. Mascot and teamColor properties need to be added to the construtor for each team class object.
6. Display the lists of the 2 teams
7. Create 3 tests for main.js
8. Add the ability to add an new person to the list of people
9. **Add randomizer to select teams from list of players**
10. **Add additional teams i.e. Green or White, etc.**
11. **Make text color match team color**
12. Make a button to remove the player from the assigned team and add that person back to the player list
13. Make a button to remove the person from the player list and add that person to the people list