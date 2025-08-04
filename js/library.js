// This file manages the user's music library, allowing users to save and access their favorite songs and playlists.

class MusicLibrary {
    constructor() {
        this.library = JSON.parse(localStorage.getItem('musicLibrary')) || [];
    }

    addSong(song) {
        if (!this.library.find(item => item.id === song.id)) {
            this.library.push(song);
            this.saveLibrary();
        }
    }

    removeSong(songId) {
        this.library = this.library.filter(song => song.id !== songId);
        this.saveLibrary();
    }

    getLibrary() {
        return this.library;
    }

    saveLibrary() {
        localStorage.setItem('musicLibrary', JSON.stringify(this.library));
    }
}

const musicLibrary = new MusicLibrary();

// Example usage:
// musicLibrary.addSong({ id: '123', title: 'Song Title', artist: 'Artist Name' });
// musicLibrary.removeSong('123');
// console.log(musicLibrary.getLibrary());