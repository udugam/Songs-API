const Spotify = require('node-spotify-api')

const spotify = new Spotify({
    id: process.env.SPOTIFY_CLIENT_ID,
    secret: process.env.SPOTIFY_CLIENT_SECRET
});

exports.handler = async(event) => {
    try {
        const parsedEvent = JSON.parse(event.body)
        const result = await spotify.search({ type: 'track', query: parsedEvent.songName, limit: 1 })
        if(typeof result.tracks.items[0] === 'undefined') {
            const response = {
                statusCode: 200,
                body: JSON.stringify('no result')
            }
            return response
        } else {
            const response = {
                statusCode: 200,
                body: result.tracks.items[0].id
            }
            return response
        }
    } catch (err) {
        const response = {
            statusCode: 200,
            body: JSON.stringify(err)
        }
        return response
    }
}