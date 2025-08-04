const API_KEY = 'YOUR_YOUTUBE_MUSIC_API_KEY';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

async function fetchSongs(query) {
    const response = await fetch(`${BASE_URL}/search?part=snippet&q=${encodeURIComponent(query)}&key=${API_KEY}`);
    const data = await response.json();
    return data.items;
}

async function fetchPlaylist(playlistId) {
    const response = await fetch(`${BASE_URL}/playlists?part=snippet&id=${playlistId}&key=${API_KEY}`);
    const data = await response.json();
    return data.items[0];
}

async function fetchUserPreferences(userId) {
    const response = await fetch(`${BASE_URL}/users/${userId}/preferences?key=${API_KEY}`);
    const data = await response.json();
    return data;
}

export { fetchSongs, fetchPlaylist, fetchUserPreferences };