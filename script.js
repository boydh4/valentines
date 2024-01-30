document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('response').style.display = 'block';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
});