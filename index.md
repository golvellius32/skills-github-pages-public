---
title: Welcome to my blog
---

<button id="myButton">Click me!</button>

<script>
  function showMessage() {
    alert('Hello! This is a new message.');
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myButton').addEventListener('click', showMessage);
  });
</script>
