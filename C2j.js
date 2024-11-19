const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let playerName = '';
let currentQuestion = 0;
let score = 0;
let timer;

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    playerName = document.getElementById('player-name').value;
    if (playerName === '') {
        alert('Silakan masukkan nama pemain!');
        return;
    }
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
    setTimeout(() => {
        document.getElementById('instructions').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        nextQuestion();
    }, 3000);
}

function nextQuestion() {
    if (currentQuestion < 10) {
        const colorName = colors[Math.floor(Math.random() * colors.length)];
        let colorToShow = colors[Math.floor(Math.random() * colors.length)];
        while (colorName === colorToShow) {
            colorToShow = colors[Math.floor(Math.random() * colors.length)];
        }

        const colorContainer = document.getElementById('color-container');
        colorContainer.innerHTML = '';
        const box = document.createElement('div');
        box.classList.add('color-box');
        box.style.backgroundColor = colorToShow;
        colorContainer.appendChild(box);

        document.getElementById('message').innerText = `Pilih warna untuk: ${colorName}`;
        timer = setTimeout(() => {
            alert('Waktu habis!');
            currentQuestion++;
            nextQuestion();
        }, 5000);

        box.onclick = () => {
            clearTimeout(timer);
            if (colorName === colorToShow) {
                score++;
                document.getElementById('message').innerText = 'Benar!';
            } else {
                document.getElementById('message').innerText = 'Salah!';
            }
            currentQuestion++;
            setTimeout(nextQuestion, 1000);
        };

    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('end-container').style.display = 'block';
    document.getElementById('final-message').innerText = `Permainan selesai, ${playerName}!`;
    document.getElementById('final -score').innerText = `Skor Anda: ${score}`;
}