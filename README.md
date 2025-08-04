# YouTube Music Player

This project is a web-based music player that allows users to play songs from YouTube Music. It features a variety of functionalities including music shuffle, skip, search options, music quality selection, library management, podcast access, and an ad-free experience, all powered by the YouTube Music API.

## Features

- **Music Playback**: Play, pause, skip, and shuffle songs.
- **Search Functionality**: Search for songs, albums, and podcasts.
- **Music Quality Selector**: Choose the quality of the music playback.
- **Library Management**: Save and access favorite songs and playlists.
- **Podcast Access**: Browse and play podcasts available on YouTube Music.
- **Ad-Free Experience**: Enjoy uninterrupted music playback.

## Project Structure

```
youtube-music-player
├── src
│   ├── index.html          # Main HTML document
│   ├── css
│   │   └── styles.css      # Styles for the website
│   ├── js
│   │   ├── app.js          # Main JavaScript file
│   │   ├── api.js          # YouTube Music API interactions
│   │   ├── player.js       # Audio playback management
│   │   ├── search.js       # Search functionality
│   │   ├── library.js      # User's music library management
│   │   └── podcast.js      # Podcast functionality
│   └── assets              # Directory for media assets (currently empty)
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to run the application.
3. Ensure you have access to the YouTube Music API and configure the necessary API keys in the `api.js` file.

## Usage Guidelines

- Use the search bar to find your favorite songs or podcasts.
- Manage your library by saving your favorite tracks.
- Adjust the music quality settings according to your preference.
- Enjoy a seamless music experience with the ad-free feature.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.