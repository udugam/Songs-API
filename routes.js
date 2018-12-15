module.exports = function(app) {
    app.post('/getSpotifyID', function(req,res) {
        res.json("this is the Spotify ID")
    })
}