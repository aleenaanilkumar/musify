// This file initializes the YouTube Music Player application, sets up event listeners, and manages overall functionality.

document.addEventListener('DOMContentLoaded', () => {
    const player = new Player();
    const api = new API();
    const search = new Search(api);
    const library = new Library(api);
    const podcast = new Podcast(api);

    // Initialize the application
    player.init();
    api.init();
    search.init();
    library.init();
    podcast.init();

    // Set up event listeners
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        search.performSearch(query);
    });

    document.getElementById('shuffle-button').addEventListener('click', () => {
        player.shuffle();
    });

    document.getElementById('skip-button').addEventListener('click', () => {
        player.skip();
    });

    document.getElementById('quality-selector').addEventListener('change', (event) => {
        player.setQuality(event.target.value);
    });
});