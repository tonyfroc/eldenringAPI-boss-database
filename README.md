# Elden Ring Boss Database

#### By Tony Froccaro, Marcus Ferreira and Erika Mogollon

#### Elden Ring Boss Database utilizing HTML, CSS, Javascript and jQuery

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Description

The Elden Ring Boss database uses the API found here: `https://docs.eldenring.fanapis.com/docs/` to extract data pertaining to Bosses found in the critically acclaimed video game Elden Ring. Elden Ring is a massive open world game that contains around 200 boss battles and a trove of other exciting challenges and quests.

To use our application, first select from one of the six regions present in the game; Limgrave, Weeping Peninsula, Liurnia of The Lakes, Caelid, Altus Pleateau or Mountaintops of the Giants. Once selected, a region article will appear that gives a brief description of the region, lists all bosses (available from the API at this time) for that region, and displays a small picture of the region selected.

Select the dropdown underneath the regions location to select a boss from that region. The application utilizes the API to retrieve information pertaining to the boss's location, health, description and reward collected from slaying the boss and then displays a card showing all of that information. Using the boss's location, another card will appear adjacent to the boss card displaying relevant information about where the boss is located.

## Tests

No tests written.

## Setup/Installation Requirements

- Download git
- Navigate to your Desktop folder
- Make a folder to store the application files
- Navigate to https://github.com/tonyfroc/
- Select code, then copy the link below "Clone"
- In terminal type:
- `git init`
- `git clone https://github.com/tonyfroc/eldenringAPI-boss-database.git`
- `git remote add your_initials main https://github.com/tonyfroc/eldenringAPI-boss-database.git`
- `git push your_initials main`
- Download a text editor (preferably VSCode) and
- In terminal, type: `code .` and open the `index.html` in a web browser.

## Known Bugs

- Several locations do not render because images for those locations have not yet been added to the database within the UI.

- The "All Elden Ring Bosses" section is not rendered correctly. All bosses are listed vertically as opposed to horizontally in 6 different columns.

## License

_[MIT](https://opensource.org/licenses/MIT)_  
Copyright (c) 2022, Tony Froccaro, Marcus Ferreira, Erika Mogollon
