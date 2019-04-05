# Video Game Forums
#### by _**Tanner Damron**_

#### A video game based forum web page

## Description
This web page was created with Angular, and is a forum based web page for users to be able to look at and read forum posts. Also any user will be able to post a forum in any category, and search in general for any posts or search specifically in any page.

### Firebase Live Link
* > N/A (for the time being)

## Specifications
* User can click any category link to see all forum posts in that category
* > Input: User clicks Off Topic Forums
* > Output: Web page takes them to all forums within Off Topic Forums
* User can add forum post to any category
* > Input: User clicks add forum inside Off Topic Forums, and fills in the fields
* > Output: User added forum post is shown in list of all forum posts within Off Topic Forums category
* User can search for forum posts within any category or in general discussion
* > Input: User searches for "Pokemon" in General Discussion Forums
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
Project is half finished, user cannot post in any place other than off topic, general, and admin. User cannot see any details of posts just the title links

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


