const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getPakej', (req,res) => {
    var package = [ {
        'id': 1,
        'user': 'MatRock123',
        'description': 'Holiday 3D 2N at Langkawi Beach Resort',
        'location': 'Langkawi Beach Resort',
        'price': 'RM 350',
        'pax': '4',
        'image': 'https://cdn.star2.com/wp-content/uploads/2019/09/273905.jpeg',
        'theme': 'honeymoon,school,vacation',
        'dateavailablestart': '31/01/2020',
        'dateavailableend': '01/05/2020',
      }, {
        'id': 2,
        'user': 'Scuba Dive Team',
        'description': 'Scuba license program',
        'location': 'Pulau Tioman',
        'price': 'RM 1350',
        'pax': '10',
        'image': 'https://www.holidaygogogo.com/wp-content/uploads/2013/05/diving-in-tioman.jpg',
        'theme': 'program',
        'dateavailablestart': '27/03/2020',
        'dateavailableend': '30/05/2020',
      }, {
        'id': 3,
        'user': 'Sarawaqian',
        'description': 'Enjoy the wonders of Sarawak',
        'location': 'Kuching',
        'price': 'RM 250',
        'pax': '3',
        'image': 'https://www.theborneopost.com/newsimages/2019/04/SK04.jpg',
        'theme': 'school,honeymoon,vacation,program',
        'dateavailablestart': '01/01/2020',
        'dateavailableend': '01/12/2020',
      },
    ]
    res.json(package);
    console.log('Sent pakej of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
