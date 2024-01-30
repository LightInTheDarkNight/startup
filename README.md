# Startup
CS 260 Internet startup

[Class Notes](/Startup/notes.md)

## Specifications

### Pitch

Imagine a roguelike game that you can cooperate on with your friends! So you can play like a wizard, your friend can hold the knives, and you have to find the exit for the maze-like dungeon! It would adjust the difficulty and size of the dungeon maze depending on how many players were in the game when the level was generated, so you can play in the same game alone and with friends, and it would support an integrated chat so you could collaborate real-time.

### Specifics

End goal:
Rougelike game is the main functionality, with fully randomly generated dungeons that can change size depending on how many players are present.

Chat functionality is the secondary main functionality, with cooperative play and observation the third stage and then enhancements of gameplay the  final stage of development.

Each user will have an account to save preferences for gameplay and to enable chat features and friend requests. There may be an option to link to existing platforms at somepoint, like signing in with Google, Facebook, or even Apple's gamecenter, depending on how far this project gets.

#### Authentication
Users will have individual logins and basic profile information associated with them.

#### Database Data
The database will store highscores for individual players, as well as characters the players have created and users' chat history.

#### WebSocket data
Data from the server rendered on the user's screen will include realtime chat data, scoring data, friends' statistics and scores, how many players are playing with you or watchin gyou play, and so forth.

#### Concept Art/Wireframes
![Main Page (not logged in)](/Startup/ConceptArt/MainPageLoggedOut.png)
![Friends Page](/Startup/ConceptArt/FriendsPage.png)
![Profile Page](/Startup/ConceptArt/ProfilePage.png)