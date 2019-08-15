# Assignment1
Name: Enviro-Map
Application Objective: Provide Location based environment data to researchers/students.

Home: Gives a description of the objective of the application. The services provided and a 'Contact Us' section.
![Screenshot 1](https://user-images.githubusercontent.com/50309322/60738380-f913d400-9f7f-11e9-8fbe-e470e07d2bbf.png)

![Screenshot 2](https://user-images.githubusercontent.com/50309322/60738403-0f219480-9f80-11e9-832a-78640459816a.png)

Map: An interactive Map from Leaflet, an open-source JavaScript library for mobile-friendly interactive maps. Default view is set over Bangladesh. Then a MapLayer is integrated over it from the 'World's Air Pollution: Real-time Air Quality Index' which is provided for free, as long as attribution is provided to the owner.

![Screenshot 3](https://user-images.githubusercontent.com/50309322/60738423-1ba5ed00-9f80-11e9-97c3-f837506544fc.png)

Data Section: Here environmental data are provided based on location that User can select. The first two data (Temperature and Humidity) has been made functional to show that it works. The rest of the data will be poplated from a database in the future.

![Screenshot 4](https://user-images.githubusercontent.com/50309322/60738443-282a4580-9f80-11e9-86e0-9b6b426e9eee.png)

FUNCTIONALITIES TO BE ADDED IN THE FUTURE:

(Mandatory)
Login: For Trusted Users who will have authorization to perform CRUD operations on the location based data. LocalStorage functionality might be introduced here if applicable.


Request Board: For Normal Users to put requests of data of a location if it does not already exist.

(Possible)
Improved Map: Provide display options on Map to show different category of data provided by WQAI website (using JSON API). 
Also pin on map the data we have on our database.