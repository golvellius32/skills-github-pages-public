---
title: Welcome to my blog
---

<script>
  function showMessage() {
    alert('Hello! This is a new message.');
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myButton').addEventListener('click', function() {
      alert('Button clicked!');
      showMessage();
    });
  });
</script>
