app.post('/add', (req, res) => {

    console.log("Mottagen");

 

    const namn = req.body.namn;

    const kategori = req.body.kategori;

    const kommentar = req.body.kommentar;

 

    fs.readFile('data.json', (err, data) => {

      if (err) throw err;

      const comments = JSON.parse(data);

 

      const newComment = {

        namn: namn,

        kategori: kategori,

        kommentar: kommentar,

      };

 

      comments.push(newComment);

 

      fs.writeFile('data.json', JSON.stringify(comments), (err) => {

        if (err) throw err;

        console.log('Comment Confirmed');

        res.status(200).json(newComment); // Returnera JSON-respons istället för en sträng

      });

    });

  });