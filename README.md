# Assignment 1 - ReactJS app.

Yikun Fan
20099869

## Overview.

This application imitates some functions on TMDB. On the basis of movies lab, it adds the function of popular characters, and character details pages, and uses technologies such as pagination and responsive UI.


### Features.

+ Add a list of actor show in a movie in the movie details
+ A page contains the people who are popular now
+ A page contains the detail information of an actor
+ In actor detail page, you can jump to facebook or twitter if possible
+ In popular prople page and actor detail page, I add some responsive UI element and 
pagination technology


## Setup requirements.

+ Clone the repo: https://github.com/LuMingJun62511/MyTMDB.git
+ cd MyTMDB
+ Install packages: npm install 
+ Open browser at: http://localhost:3000


## API endpoints.

+ the cast and crew for a movie - actors
+ list of popular people - peoples
+ the movie credits for a person - creditsList
+ the primary person details - actorDetails
+ the external ids for a person - externalID


## Routing.

+ people/popular - displays all the people who are popular now.
+ actors/id - displays one actor's detail information. You can jump to this page from the popular people page or from the movie detail page by clicking the cards of actors.


## Independent learning (If relevant).
I learned how to use pagination, it can navigate us to different pages from  the mui doc. 
Second one is code splitting, this technology can make the webpage temporarily not render invisible content, making the webpage load faster, the code is detailed in movieDetails.


