# **Spotify Clone**
#### Design Docs Preparation: Component Hierarchy
<!--
Now that we are React+Redux wizards, we should turn our gaze to the future, to our full-stack projects!

Before starting our preparation, let's get our repo ready. Complete `Phase 1` and `Phase 2` of [these instructions][design-docs] to create your Design Docs wiki on Github. The homework for the rest of the Design Docs will be done here.

Take some time to research the site you are cloning. While referring to to your [MVPs][mvps], keep these things in mind:
- What views are required?
- How can these views be broken down into React components? Think boxes-in-boxes.
- Which components can be reused in different components?
- What data does each component need from our redux state?
  - Does it need to `connect` to the store or can it be passed down from a parent as `props`?

[design-docs]: ../../proposal/full-stack-project-proposal.md
[mvps]: ../../proposal/mvp-list.md -->

Any component ending in `Container` will `connect` its nested component to the Redux store.

---
## Component Hierarchy

### General
+ `App`
  + `Header`
  + `Sidebar_L`
  + `MainPage`
  + `Sidebar_R`
  + `Footer`
    + `xtra controls L`
    + `playback controls`
    + `xtra controls R`

---
## Dashboard / Main
+ `MainIndexContainer`:
  + `ProfileIndexContainer` (can be reused: artist/album/user/playlist)
    + `TrackIndexContainer`
    + `RelatedArtistsIndex`
  + `MediaIndexContainer`


![dashboard](/Users/fmbf/Documents/AppAcademy/5_Curriculum/aa_homework/w7d3/FS_wire_frames/spotify_main_wire.jpg)

---
## Session Form
+ `SessionFormContainer`
  + `SessionForm`

<!-- ![session-form](https://raw.githubusercontent.com/appacademy/bluebird/master/wiki/bluebird_session_page.png) -->

![session-form](/Users/fmbf/Documents/AppAcademy/5_Curriculum/aa_homework/w7d3/FS_wire_frames/spotify_session_page_wire.jpg)


<!-- ## Chirp Show
+ `ChirpShowContainer`
  + `ChirpShow`

![chirp-show](/Users/fmbf/Documents/AppAcademy/5_Curriculum/aa_homework/w7d3/FS_wire_frames/spotify_new_playlist_wire.jpg) -->



---

## Playlist Form
+ `PlaylistFormContainer`
  + `PlaylistForm`
    + `PlaylistName`
    + `PlaylistDescription`
    + `PlaylistImagePicker`
    + `PlaylistFormButtons`
      + `PlaylistFormButtonSubmit`
      + `PlaylistFormButtonCancel`

![chirp-form](/Users/fmbf/Documents/AppAcademy/5_Curriculum/aa_homework/w7d3/FS_wire_frames/spotify_new_playlist_wire.jpg)

---

## Playlist Profile

+ `PlaylistInfo`
  + `PlaylistImg`
  + `PlaylistName`
  + `PlaylistDescription`
  + `PlaylistProfileButtons`
    + `PlaylistProfileButtonPlay`
    + `PlaylistProfileButtonFollow`
    + `PlaylistProfileButtonShare`
+ `PlaylistTrackIndex`

![chirp-form](/Users/fmbf/Documents/AppAcademy/5_Curriculum/aa_homework/w7d3/FS_wire_frames/spotify_follow_playlist_wire.jpg)

---

## User Search
+ `UserSearchIndexContainer`
  + `UserSearchIndex`
    + `UserSearchIndexItem`

![chirp-form](/Users/fmbf/Documents/AppAcademy/5_Curriculum/aa_homework/w7d3/FS_wire_frames/spotify_search_wire.png)
