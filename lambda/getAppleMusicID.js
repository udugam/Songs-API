
const got = require('got')
const jwt = require('apple-music-jwt')
const fs = require('fs')
var secret = fs.readFileSync("AuthKey.p8").toString();
var token = jwt.generate(process.env.APPLE_MUSIC_KEY_ID, process.env.APPLE_TEAM_ID, secret);

exports.handler = async(event) => {
    try {
        const parsedEvent = JSON.parse(event.body)
        const appleMusicResponse = await got(`catalog/us/search?term=${parsedEvent.artistName.trim().replace(" ","+")}+${parsedEvent.songName.trim().replace(" ","+")}&limit=1&types=songs`, 
            {
                baseUrl: 'https://api.music.apple.com/v1/',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                json: 'true'
            })
        if(typeof appleMusicResponse.body.results.songs === 'undefined') {
            const response = {
                statusCode: 200,
                body: JSON.stringify('no result')
            }
            return response
        } else {
            const response = {
                statusCode: 200,
                body: appleMusicResponse.body.results.songs.data[0].id
            }
            return response
        }
    } catch (error) {
        const response = {
            statusCode: 400,
            body: JSON.stringify('There was an error')
        }
        return response
    }
}