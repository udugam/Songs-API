# Songs API
This API returns an Apple Music or Spotify song ID for a given song.

Usage
=====

A valid request requires:
1) An API KEY as part of the request's header
2) Artist and Song Name as part of the request's body

### Request Header Example
![alt](https://github.com/adam-p/Songs-API/HeaderExample.png)

### Request Body Example
![alt](https://github.com/adam-p/Songs-API/BodyExample.png)

### Endpoints
A request can be sent to two possible endpoints, one for each Music Library:
- https://d3j4z06nr8.execute-api.us-east-1.amazonaws.com/default/getAppleMusicID
- https://d3j4z06nr8.execute-api.us-east-1.amazonaws.com/default/getSpotifyID

### API KEY
This API KEY is for testing only and has been limited to 20 requests per a day and 1 request every 10 seconds. Email Ryan at ryan.udugam@gmail.com for an unrestricted API KEY.
V625pswHAA3scODYQGy0I5CHIHXG5lG975Nbcbg4



