# digital-diary
The Digital Diary is a multi-page web application that allows users to create, store, and view personal diary entries directly in the browser. It uses HTML, CSS, and JavaScript, with localStorage for data persistence.

Entries are saved locally in the browser, meaning they remain available even after refreshing or closing the page.

Features
   Create new diary entries (title + content)
   Save entries using browser localStorage
   Home page shows the 5 most recent entries
   Vault page displays all saved entries
   Dynamic rendering using JavaScript DOM manipulation
   Multi-page navigation system

Project Structure
Digital-Diary/
│
├── index.html           Home page (recent entries)
├── new-entry.html       Entry creation page
├── vault.html           Full entry history
│
├── style.css            Global styling
│
├── index.js             Home page logic (latest 5 entries)
├── new-entry.js         Save entries to localStorage
├── vault.js             Display all entries
│
└── README.md            Project documentation

How It Works
1. Creating an Entry
User fills out a form in new-entry.html
JavaScript captures input values
Entry is stored as an object:

2. Saving Data (localStorage
Entries are stored in the browser using:

3. Home Page (Recent Entries)
Reads data from localStorage
Displays only the latest 5 entries
Uses .slice(0, 5) and DOM manipulation

4. Vault Page (All Entries)
Loads all saved entries
Displays them in a vertical list
Allows users to scroll through full history

🛠️ Technologies Used
HTML5 – page structure
CSS3 – layout and styling (Grid & Flexbox)
JavaScript (ES6) – logic and DOM manipulation
Web Storage API – localStorage for persistence

How to Run the Project
Download or clone the repository
Open the project folder
Open index.html in a browser
Start adding entries via new-entry.html
No installation required.

Key Learning Outcomes
DOM manipulation using JavaScript
Multi-page web design
Data persistence using localStorage
Working with arrays and objects in JavaScript
Dynamic rendering of content








