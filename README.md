# Aircraft Database and Recommendation Engine

## Aircraft Database
[Link to database](aircraft_database)

For this independent project, I created a sortable, filterable, and searchable database of all aircraft designs listed on wikipedia. I believe this is the first free database of that type online. To create the database, I scraped the aircraft specifications and wikipedia page content for all the aircraft listed on wikipedia, parsed that data, and created a database with it. I also created a specification based aircraft recommender system, such that given an aircraft the system will return aircraft of similar specifications.

The final database has approximately 9500 aircraft, and includes specifications like: wingspan, length, height, empty weight, gross weight, maximum speed, cruise speed, and stall speed. The database also includes the manufacturer, aircraft role, number of aircraft built, first flight year, and national origin.


## Recommendation Engine
(This section is still in development) 
This recommendation engine analyzes the content of aircraft wikipedia pages, along with the characteristics of the aircraft which were scraped and put into the database, to provide recommendations for similar aircraft to a given query. 
