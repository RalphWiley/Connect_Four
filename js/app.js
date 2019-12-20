const game = new Game();
const start = document.getElementById('begin-game');
/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

start.addEventListener('click', function() {
    game.startGame();

    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

document.addEventListener('keydown', e => {
    game.handleKeydown(e);
});