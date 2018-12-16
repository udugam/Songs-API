require('dotenv').config()
const Spotify = require('node-spotify-api')

const spotify = new Spotify({
    id: process.env.SPOTIFY_CLIENT_ID,
    secret: process.env.SPOTIFY_CLIENT_SECRET
});

module.exports = function(app) {
    app.post('/getSpotifyID', function(req,res) {
        spotify.search({ type: 'track', query: req.body.songName, limit: 1 })
        .then(function(response) {
            res.json(response.tracks.items[0].id)
        })
        .catch(function(err) {
            console.log(err);
        });
    })
}