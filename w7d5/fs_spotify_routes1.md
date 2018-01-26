# FS Spotify Clone - Routes

#### Frontend Routes:

+ `/search/results/:query_string`
+ `/album/:album_id`
+ `/artist/:artist_id`
+ `/song/:song_id`
+ `/playlist/:playlist_id`
+ `/user/:user_id`

+ `/browse/featured`
+ `/browse/genres`
+ `/browse/newreleases`
+ `/browse/discover`

+ `/collection/playlists`
+ `/collection/tracks`
+ `/collection/albums`
+ `/collection/artists`
+ `/daily-mix-hub`


#### API Endpoints

###### users
+ `GET /api/users` - returns a user's info for Search feature
+ `POST /api/users` - sign up
+ `PATCH /api/users/:id` - edit a user


###### `playlists`
+ `GET /api/playlists` - returns relevant playlists (filtered by `data`/`params`)
+ `GET /api/playlists/:id` - returns playlist
+ `POST /api/playlists` - creates a playlist
+ `PATCH /api/playlists/:id` - edit a playlist
+ `DELETE /api/playlists/:id` - remove a playlist

###### `artists`
+ `GET /api/artists` - returns relevant artists (filtered by `data`/`params`)
+ `GET /api/artists/:id` - returns artist

###### `albums`
+ `GET /api/albums` - returns relevant albums (filtered by `data`/`params`)
+ `GET /api/albums/:id` - returns album

###### `songs`
+ `GET /api/songs` - returns relevant songs (filtered by `data`/`params`)
+ `GET /api/songs/:id` - returns song

###### `likes`
+ `POST /api/likes` - like a chirp
+ `DELETE /api/likes` - unlike a chirp
