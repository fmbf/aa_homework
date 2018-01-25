# **Spotify Clone**
#### Design Docs Preparation2: State Shape

- What resources will I be fetching from the database?
- What else do I need to keep track of in my app? (current user info, form errors, loading spinners, sorting strategies for lists, etc.)
---

# Spotify Sample State

```js
{
  entities: {

    songs: {
      1: {
        id: 1,
        title: "Highway To Hell",
        artist_id: 666,
        album_id: 999,
        duration: 197,
        song_path: "songs/1/ACDC_Highway_To_Hell.mp3", // url? filename? db?
        current_user_added: true,// know if to include in user's Library
        //BONUS:
        // plays: 122040502,
      },
      2: {
        id: 2,
        title: 'Hotline Bling'
        artist_id: 424,
        album_id: 999,
        duration: 132,
        song_path: "songs/2/Drake_Hotline_Bling.mp3",
        current_user_added: false,
        //BONUS:
        // plays: 452376223,
      },
      3: {
        id: 3,
        title: "Oops!...I Did It Again",
        ///
      },
    },

    artists: {
      666: {
        id: 666,
        name: "AC/DC",
        album_ids: [999, 232, 102], // songs_ids also? or songs through album assoc?
        img_url: "https://busites.com/content/discography/highwaytohell.jpg", //path or link?
        current_user_follows: true, // show in library
        //BONUS:
        // related_artists_id: [12, 204, 502],
        // monthly_plays: 122040502,
        // about_id: 341 //join with artist bios/info
      },
      32: {
        id: 424,
        name: "Britney Spears",
        album_ids: [102, 482, 627],
        img_url: "https://images1/press-shot-1-bspears.jpg",
        current_user_follows: false,
        //BONUS:
        // related_artists_id: [102, 884, 19],
        // monthly_plays: 1028261,
        // about_id: 341
      }
      182: {
        id: 182
        name: 'Drake'
        ///
      }
    },

    users: {
      11: {
        id: 11,
        username: "music_fan311",
        img_url: "http://o.com/2x/Eyes-Girl-Face-Portrair-Lure-1961529.jpg",
        current_user_follows: true,
        playlists_ids: [44, 71, 292], //show if playlist is public
        //BONUS:
        // following_ids: [3, 666, 84],
        // followers_ids: [102, 832, 572]
      }
      23: {
        id: 23,
        username: "rockerrrr666",
        img_url: "http://maxp.com/people-Urban-Fashion-Trends-3094042.jpg",
        current_user_follows: false,
        //BONUS:
        // following_ids: [53, 917, 12],
        // followers_ids: [38, 128, 927]
      },
      25: {
        id: 25,
        username: "classixxxhunter",
        friends_ids: [23, 11, 84, 43],
        img_url: "http://msas.com/static/photo/ng-Blond-3089486.jpg",
        current_user_follows: false,
        //BONUS:
        // following_ids: [91, 24, 12],
        // followers_ids: [912, 64, 831]
      }
    }

    playlists: {
      1: {
        id: 1,
        title: "TGIF",
        author_id: 29,
        img_url: "http://pic.freepic.com/static/2x3089486.jpg",
        current_user_follows: true
        songs_ids: [60, 231, 22, 18, 371],
        //Bonus
        // followers: 122040502
      },
      2: {
        id: 2,
        title: "Chill Study Beats",
        author_id: 610,
        img_url: "http://pic.freepic.com/static/2x3102989486.jpg",
        current_user_follows: false,
        songs_ids: [60, 231, 22, 18, 371],
        //Bonus
        // followers: 19282
      },
      3: {
        id: 3,
        title: "House Party",
        author_id: 762,
        img_url: "http://pic.freepic.com/photo/1272o1nskj.jpg",
        current_user_follows: false,
        //Bonus
        // followers: 870172
      }

    }
  },

  playback: {
    song_id: 1, // also artist_id? etc, etc? or through assoc?
    playing: true/false,
    volume: 0.3,
    mute: true/false,
    song_queue: [812, 372, 937, 128, 384, 12, 943, 8, 92]
    //BONUS:
    // repeat: true/false,
    // shuffle: true/false,
  }

  errors: {
    login: ["Incorrect username/password combination"],
    playlistForm: ["Playlist title cannot be blank"],
  },

  session: {
    id: 25, // is this user_id??
    username: "classixxxhunter",
    img_url: "https://cdn.pixabay.com/photo/2013/12/29/03/47/hawk-234999_960_720.jpg",
    //BONUS:
    // premium_user: true/false
  },

  //BONUS:
  ui: {
    loading: true/false //do I need this?? no loading spinners etc
  }
}
```
