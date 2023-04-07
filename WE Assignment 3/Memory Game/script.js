let tiles = [];
let flippedTiles = [];
let matchedTiles = [];
let time = 0;
let timer = null;

for (let i = 1; i <= 9; i++) {
	tiles.push(i);
	tiles.push(i);
}

for (let i = tiles.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * (i + 1));
	[tiles[i], tiles[j]] = [tiles[j], tiles[i]];
}

const tileElements = document.querySelectorAll('.tile');
tileElements.forEach((tileElement, index) => {
	tileElement.addEventListener('click', () => {
		if (tileElement.classList.contains('flipped') || tileElement.classList.contains('matched')) {
			return;
		}

		tileElement.classList.add('flipped');
		flippedTiles.push({ tile: tileElement, value: tiles[index] });
  }
}
