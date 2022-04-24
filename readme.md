1 Make git clone
2 You need be into root directory where located file package.json
3 ONLY ONE TIME then you clonned repository type in TERMINAL npm install
/////////////////////////////////////////////////////////////////

To Start server
You need be into root directory where located file package.json

write in TERNIMAL npm run dev

After that in terminal will be appear text:

Server working on port 5000
this means ALL OK

///////////////////////////////
GET http://localhost:5000/  returns All Animals
GET http://localhost:5000/someAnimalName returns All PRESENT animals  filtered by name
GET http://localhost:5000/id/SOME ID ANIMAL    returns single Animal FOUND BY ID
POST http://localhost:5000/ Creates new Animal required properties <name>,<animal>,<color>
DELETE  http://localhost:5000/IDOFANIMAL   Deletes Animal BY id