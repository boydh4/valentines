let noButtonMoveCount = 0;

document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('message').style.display = 'none';
    document.getElementById('question').style.display = 'block';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('response').innerHTML = '<h1>Ok then my valentine, I\'ll see your beautiful face across the dinner table February 14th at 7:00 pm. I love you.</h1>';
    document.getElementById('response').style.display = 'block';
});

const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', function() {
    if (noButtonMoveCount < 5) {
        this.style.position = 'absolute';
        this.style.top = Math.random() * window.innerHeight + 'px';
        this.style.left = Math.random() * window.innerWidth + 'px';
        noButtonMoveCount++;
    }
});

noButton.addEventListener('click', function() {
    if (noButtonMoveCount >= 5) {
        document.getElementById('question').style.display = 'none';
        document.getElementById('wrong-answer').style.display = 'block';
    }
});

document.getElementById('goBackButton').addEventListener('click', function() {
    document.getElementById('wrong-answer').style.display = 'none';
    document.getElementById('question').style