# Startup
CS 260 Internet startup

[Class Notes](notes.md)
[Project Website](https://delvers-domain.click/)

- To-do: 
 - Fix responsiveness bug with narrow windows on chat page
 - re-style login page

Multiplayer, online roguelike game with a simple friend and chat network. Initiated as a class project for BYU's CS 260 course.


## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown (see notes and this document)
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Imagine a roguelike game that you can cooperate on with your friends! So you can play like a wizard, your friend can hold the knives, and you have to find the exit for the maze-like dungeon! It would adjust the difficulty and size of the dungeon maze depending on how many players were in the game when the level was generated, so you can play in the same game alone and with friends, and it would support an integrated chat so you could collaborate real-time.

### Design

![Main Page (not logged in)](/Startup/ConceptArt/MainPageLoggedOut.png)
![Friends Page](/Startup/ConceptArt/FriendsPage.png)
![Profile Page](/Startup/ConceptArt/ProfilePage.png)

### Key features

End goal:
 - Rougelike game is the main functionality, with fully randomly generated dungeons that can change size depending on how many players are present.

 - Chat functionality is the secondary main functionality, with cooperative play and observation the third stage and then enhancements of gameplay the  final stage of development.

 - Each user will have an account to save preferences for gameplay and to enable chat features and friend requests. There may be an option to link to existing platforms at some point, like signing in with Google, Facebook, or even Apple's gamecenter, depending on how far this project gets.

Development path:
1. Basic website frame.                                                           Technologies: HTML, CSS.
2. Login pathway.                                                                 Technologies added: React, authentication.
3. User information persistence.                                                  Technologies added: Database, 3rd party API for user verification.
4. Playable dummy game, maze-like perhaps. Highscore storage and display.         Technologies added: Websocket.
5. Observation of others by username.                                             Technologies: Expanded Websocket. End of CS 260.
6. Friend network and chat.
7. Rouge-like realization.
8. Play with up to four other players, using a pre-game lobby. In-game chat.
9. Play with up to ten other players, dynamic joining and leaving allowed.


### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Basic Structure and content. Pages for Login, Chat, Play, Friends, Account, etc. Possible reduction with use of React.
- **CSS** - Adaptive styling that looks goood and interesting on a variety of different screen sizes. Smooth and modern appearance and design.
- **React** - Will provide login pipeline, game settings, and game play elements in a streamlined flow. Will help chat experience to be seamless and integrated with other code areas.
- **Service** - Authentication - Use of the third party GetOTP service to verify emails and phone numbers used on the website. Potential integration with SSO providers, including Apple, Google, and Facebook. Chat features potentially added this way. Functinoality endpoint for game observation/multiplayer updating. Testing, temporary endpoint for clearing the database.
- **DB/Login** - The database will give persistence to user data, including login information, highscores, customized characters the players have created and users' chat history. Login will be implemented via react and/or third party SSO.
- **WebSocket** - Data from the server rendered on the user's screen will include realtime chat data, scoring data, friends' statistics and scores, how many players are playing with you or watching you play, and so forth. Initial implementation will be for the dummy game or observation of it.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://delvers-domain.click/).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - framework of pages created representing the final functionality of the app, including home, play, friends, chat, login, leaderboard, and account info pages
- [x] **Proper HTML element usage** - Included the tags Body, Nav, Main, Header, and Footer on each page
- [x] **Links** - Links to each page from the home page via the nav bar (account info page is behind the login page - it will accept anything as a username and password right now)
- [x] **Text** - Standin text and images for the eventual project features, including a picture and settings inputs to stand in for the game, input fields for options to join or watch another game, login placeholders, mimic chat structure, and more
- [x] **3rd party API placeholder** - 3rd party service placeholder on the login page (SSO option) and in account creation functionality not currently visible (GetOTP call for email verification)
- [x] **Images** - Used in the header and the game's placeholder; see Text section above
- [x] **Login placeholder** - Login page includes a placeholder login form, and submitting it takes you to the account page, including placeholder displays for account info including user name, rank, friends summary, and highscore.
- [x] **DB data placeholder** - Database placeholder on the leaderboard page
- [x] **WebSocket placeholder** - Websocket placeholder on the chat page

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - CSS added to main pages header, footer, main and Navigation elements
- [x] **Navigation elements** - See above
- [x] **Responsive to window resizing** - Style Responsive to window resizing
- [x] **Application elements** - Styling applied to application element mock-ups; leaderboard styled for readability, general navbar and footer style added
- [x] **Application text content** - Custom CSS used to give the vhat bubbles on the chat page their shape and contrast the text
- [x] **Application images** - CSS used to stretch and frame the images in the universal header and game placeholder; used to tile the buttons on the main page
- Bootstrap implemented with most elements

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.

