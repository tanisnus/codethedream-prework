# CodeTheDream Prework – Top Scorers & Top Assists
# Name: Tanis Sarbatananda
# Email: tanisgpp@gmail.com

A small React app that shows random **Top Scorers** and **Top Assists** from the API-Football (API-Sports) API. You can switch between the two views and request new data on each page.

## What’s in the repo

- **Top Scorers** – Random top scorer (name, season, goals, photo) from the API.
- **Top Assists** – Random top assist provider (name, season, assists, photo) from the API.
- **Navigation** – Navbar links to switch between Top Scorers and Top Assists. Each page loads its own data when you click the button.

## How to run the app

1. **Clone the repo**

2. **Install dependencies**
    - using: npm install
    - Note: Please make sure you are in an appropriate directory

3. Set up the API key
    - Get an API key from API-Sports (Football API).
        - https://www.api-football.com/
        - Note: You may need to create an account
        - Go to "Account -> "My Access" -> then copy the API key
    -   In the project root, create a file named .env.
        - Add this line (replace with the API key) to .env file:
            - VITE_API_SPORTS_KEY=your_api_key_here

4. Start the dev server
    - using: npm run dev
    - Note: Please make sure you are in an appropriate directory

5. Open the app
    - In the terminal you’ll see a local URL (e.g. http://localhost:5173). Open that URL in your browser.

6. Functionality on the web app
    - There are two options for you to select on navigation bar: Top Scorers Page and Top Assist Page
    - Once you are in each page, you can click on the "Get a random top scorer/assist" button that will generate a random player


Video Walkthrough:
https://imgur.com/a/8F2kHLV

Note: This is the link to a gif showing how the functionality of the web app wroks