function showMessage() {
  alert('This will start a modal dialogue to select local LLM and configuratin options.');
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('JavaScript is running!');
  document.getElementById('myButton').addEventListener('click', showMessage);
});
