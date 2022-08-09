Overview
MockFlix is a Netflix clone platform made for a school project. This platform allows users
to check out actual trending movies, sorted by their genres and with a section dedicated
to the top 10 most popular movies on the platform.

MockFlix does not let users stream the movies, but rather implements a 'mock' feature
where it redirects users to a YouTube video when pressing the Play button for each of the
movies.
The project includes a complete application cycle; from user authentification to
participating in features applied to the shown movies.

Frontend: See other repository's README file... 

Backend
The project backend functionalities were divided into two separate projects:

A JAVA backend: See other repository's README file...

A NodeJS backend: using dependencies such as Express, Mongoose, and CORS.
This backend server is connected to a MongoDB NoSQL database, which handles
the movie Ratings posted by users and shown on the website. Movie ratings are
connected to the movies (from the SQL database) through a movie ID.
