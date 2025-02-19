function showMessage() {
  alert('Hello! This is a new message.');
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('JavaScript is running!');
  document.getElementById('myButton').addEventListener('click', showMessage);
});
