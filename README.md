# Video Game Forums
#### by _**Tanner Damron**_

#### A video game based forum web page

## Description
This web page was created with Angular, and is a forum based web page for users to be able to look at and read forum posts. Also any user will be able to sign in and post a forum in any category or comment on any post. User can also search for any posts containing the search word.

### Firebase Live Link
* > https://joystick-forums.firebaseapp.com

## Specifications
* User can click any category link to see all forum posts in that category
* > Input: User clicks Off Topic Forums
* > Output: Web page takes them to all forums within Off Topic Forums
* User can sign in using google email
* > Input: User clicks sign in button and uses google email
* > Output: User is now signed in and can access making posts or comments on any thread
* User can add forum post to any category if signed in
* > Input: User clicks add forum inside Off Topic Forums, and fills in the fields
* > Output: User added forum post is shown in list of all forum posts within Off Topic Forums category
* User can add comments to any post if signed in
* > Input: User clicks add comment inside of any post
* > Output: User can type in comment and post comment on thread
* User can search for forum posts
* > Input: User searches for "Pokemon"
* > Output: All forum posts containing the word "Pokemon will show up"

### Setup Instructions
Download Node.js

* Clone repository
* Add it to your desktop using "git clone "https://github.com/tannerdamron/Video_Game_Forums"
* Open in preferred text editor to see all code used
* Create a api-keys.ts file in the root directory
* You must add personal API key from Firebase to the api-keys.ts file.
* > Example:
* > export const masterFirebaseConfig = {
* > apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",
* > authDomain: "xxxxxx.firebaseapp.com",
* > databaseURL: "https://xxxxxxx.firebaseio.com",
* > storageBucket: "xxxxxx.appspot.com",
* > messagingSenderId: "xxxx"
* > };
* Enter "$ npm i" in root directory in terminal
* Enter "$ ng build" in root directory in terminal
* Enter "$ ng serve --open" in root directory in terminal to open a local host of web page

## Known Bugs
Search is really slow

### Languages/Libraries Used
* HTML
* CSS
* Bootstrap
* JavaScript ES6
* Node.js
* Jasmine
* Karma
* Typescript
* Firebase

### GitHub Repository Link
https://github.com/tannerdamron/Video_Game_Forums

### Support or Contact
* For any questions or suggestions email me at tanner.mdamron@gmail.com

### License
*MIT License*

Copyright (c) 2019 Tanner Damron.


