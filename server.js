const express = require('express');

const PORT = 3003;

const path = require('path');

const app = express();

const fs = require('fs');




app.use(express.static(path.join(__dirname + '/public')));

app.use(express.json());





app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));

});





app.get('/script.js', (req, res) => {

    res.sendFile(path.join(__dirname, 'script.js'), {

    headers : {

        'Content-Type': 'text/javascript',

    }




    });

});




app.get('/comments', (req, res) => {

    const data = fs.readFileSync('data.json', 'utf8');

    res.end(data);

});




app.post('/add', (req, res) => {

    console.log("Mottagen");

    const namn = req.body.namn;

    const avdelning = req.body.avdelning;

    const comment = req.body.comment;




    fs.readFile('data.json', (err, data) =>{

        if (err) throw err;

        const comments = JSON.parse(data);




        const newComment = {

            namn : namn,

            avdelning : avdelning,

            comment : comment,

           

        };

        comments.push(newComment);




        fs.writeFile('data.json', JSON.stringify(comments), (err) =>{

          if (err) throw err;

          console.log('Comment Confirmed');

res.status(200).send('Comment Confirmed');

}); });

});




app.listen(PORT, () => {

console.log(`Server listening on ${PORT}`);

});