function showMessage() {
  alert('This will start a modal dialogue to select the local LLM via OLLAMA models and configuration options.');
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('JavaScript is running!');
  document.getElementById('myButton').addEventListener('click', showMessage);
});
