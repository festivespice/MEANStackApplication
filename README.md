# MEANStackApplication
A sample MEAN stack application, which uses MongoDB, Express, Angular, and NodeJS.

🚩How to setup MongoDB for the project.
1)	Download the 4.4 installer for The MongoDB Community Server
2)	Do the full install. Also, install Compass if you want to use the GUI (I suggest it but you don’t have to). 
3)	Make directories ‘C:\data’ and then ‘C:\data\db’
If you want to use command line, then you can do this:  (we may have to use the CLI eventually, but maybe not)
1)	
"C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --port=27017 --dbpath=“C:\data\db”
2)	
"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe”
3)	Interact with the database server daemon “mongod” by using “mongo” which is a shell. Some commands are found here: https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6 
When we create a node JS application to handle requests, we should be able to interact with the database through an API we can create. I actually have a sample application to display this so I can definitely demonstrate this. 


🚩How to setup the project
1)	In a project folder you’ve created, do ‘git init’ and then do ‘git clone https://github.com/festivespice/MEANStackApplication.git’ 
2)	Use a CMD terminal and go to the project directory ‘\MEANStackApplication’ and do ‘npm install’ (if you don’t already have nodejs and npm installed, do so from here https://nodejs.org/en/download/) 
3)	Create a CMD terminal process and type in ‘mkdir \data && mkdir \data\db’ to create the database folders. 
4)	Use the same terminal and start a mongo daemon process using "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath “C:\data\db”
5)	If you aren’t using MongoDB server version 4.4, change that in the path that you use for the ‘monogd’ executable in step 4. 
You should see an IP and port from one of the messages returned for the ongoing daemon process. 
 
6)	Create a CMD terminal process. From the ‘\MEANStackApplication’ directory, type ‘npm run startNode’ in the terminal. Keep it open. 
7)	Create a CMD terminal process. From the ‘\MEANStackApplication\Client’ directory, type ‘npm run start’. Keep it open.
From here, you can directly contact the API for obtaining data from the database by using port 3000 for your localhost. You can access the frontend Angular website by using port 4200. The frontend will communicate with the backend to present data from the database. If you open up the graphical MongoDB user interface (MongoDB compass) and connect to localhost:27017, and connect to our contacts collection (which will be automatically created by the application as you add documents, equivalent of rows, to it), you’ll see the data that you’re storing in the database through the app.

