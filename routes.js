require('dotenv').config()
const Spotify = require('node-spotify-api')
const got = require('got')

const spotify = new Spotify({
    id: process.env.SPOTIFY_CLIENT_ID,
    secret: process.env.SPOTIFY_CLIENT_SECRET
});

module.exports = function(app, token) {
    app.post('/getSpotifyID', function(req,res) {
        console.log(req.body)
        spotify.search({ type: 'track', query: req.body.songName, limit: 1 })
        .then(function(response) {
            res.json(response.tracks.items[0].id)
        })
        .catch(function(err) {
            console.log(err);
        });
    })
    app.post('/getAppleMusicID', function(req,res) {
        (async () => {
            try {
                const response = await got(`catalog/us/search?term=${req.body.artistName.trim().replace(" ","+")}+${req.body.songName.trim().replace(" ","+")}&limit=1&types=songs`, 
                {
                    baseUrl: 'https://api.music.apple.com/v1/',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    json: 'true'
                })
                res.json(response.body.results.songs.data[0].id);
            } catch (error) {
                res.json(error.response.body);
            }
        })();
    })
}