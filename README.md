# Final Project

Project Developed by - Muttakin Islam and Tahmid Bin Mahmud

NAME: **Enviro-Map**

Application Objective: Provide Location based environment data to researchers/students.

Home: Gives a description of the objective of the application. The services provided and a 'Contact Us' section.
![Home](https://user-images.githubusercontent.com/50309322/63253690-24ceed00-c294-11e9-8114-31d9fdd50c4b.PNG)

![Home 2](https://user-images.githubusercontent.com/50309322/63253715-2f898200-c294-11e9-9dd0-0979fd0c0920.PNG)

Map: An interactive Map from Leaflet, an open-source JavaScript library for mobile-friendly interactive maps. Default view is set over Bangladesh. Then a MapLayer is integrated over it from the 'World's Air Pollution: Real-time Air Quality Index' which is provided for free, as long as attribution is provided to the owner.

![Map](https://user-images.githubusercontent.com/50309322/63253763-429c5200-c294-11e9-9bbd-898206f165cb.PNG)

Data Section: Here environmental data are provided based on location that User can select and it will be fetched from the database. The Data Query for Barisal has been shown below as an example.

![Data](https://user-images.githubusercontent.com/50309322/63253790-50ea6e00-c294-11e9-86ec-9a351cd561fe.PNG)

Input Section: This section can only be accessed after successful login by an Authorized User to Input/Update location based environmental data into the database.
![Input](https://user-images.githubusercontent.com/50309322/63254199-1f25d700-c295-11e9-963a-eed62aea06ad.PNG)

POSSIBLE IMPROVEMENTS ON THE PROJECT
Request Board: For Normal Users to put requests of data of a location if it does not already exist.

Improved Map: Provide display options on Map to show different category of data provided by WQAI website (using different Map API request).
Also pin on map the data we have on our database.

**How to set up the code**

  1. Install [Node.js](https://nodejs.org/en/download/) on your computer

  2. Download this code, and from command prompt run:

     'npm install'

  3. To run the code, run:

     'nodemon server.js' or,
     'node server.js'

  4. In the browser open [http://localhost:3000/](http://localhost:3000/), and you should see the index page
  
  5. For Authorized Login, use:
     admin: **admin**
     password: **asdf**
