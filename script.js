document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('message').style.display = 'none';
    document.getElementById('question').style.display = 'block';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('response').innerHTML = '<h1>Ok my valentine, I\'ll see you on the 14th for our mystery date.</h1>';
    document.getElementById('response').style.display = 'block';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
});