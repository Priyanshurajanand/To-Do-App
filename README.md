# Todo App with React, Redux, and Tailwind CSS

## Overview
This is a simple Todo application built with React, Redux, and Tailwind CSS. It allows users to manage their tasks, mark them as completed, update text, and remove tasks.

## Table of Contents
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)

## Setup

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Priyanshurajanand/To-Do-App.git
   cd todo-app
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
3.start the development server:
 ```bash
   npm run dev
 ```
4.Open the browser and visit http://localhost:5173/

## Project Structure
The project follows a standard React-Redux project structure:
```bash
todo-app/
|-- public/
|-- src/
|   |--assets/
|   |-- components/
|   |   |--FilterButton.jsx
|   |   |--Todo.jsx
|   |   |--TodoItem.jsx
|   |   |--TodoList.jsx
|   |-- redux/
|   |   |--action.js
|   |   |--actionType.js
|   |   |--reducers.js
|   |   |--store.js
|   |-- App.jsx
|   |-- main.jsx
|-- .gitignore
|-- package.json
|-- README.md
|-- ... (other configuration files)
```

- public/: Static assets and HTML template.
- src/redux/reducers.js: Redux action creators.
- src/components/: React components.
- src/redux/action.js: Redux reducers.
- src/App.jsx: Main React component.
- src/main.jsx: Entry point for React rendering.

## Features
- Add new tasks.
- Update task text.
- Mark tasks as completed or incomplete.
- Remove tasks.
- Mark all tasks as completed.
- Filter tasks by completion status.
- Search and filter tasks based on a search term.

## Usage
- Open the application in your browser.
- Add new tasks by typing in the input field and clicking + icon.
- Update task text by clicking on the "Edit" button.
- Mark tasks as completed by clicking on the "Check" button.
- Remove tasks by clicking on the "Trash" button.
- Mark all tasks as completed by clicking on the "Check All" button.
- Filter tasks based on completion status using the filter buttons.
- Search for tasks using the search bar.
