<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      A personal web project developed by Marco Duenas and Eduardo Pinese<br>
      Check out the
      <a href="https://github.com/marcotduenas/cogniex" target="_blank" rel="noopener">GitHub Repository</a>.
    </p>
    <h3>Marco's social links</h3>
    <ul>
      <li><a href="https://github.com/marcotduenas" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/marcotduenas/" target="_blank" rel="noopener">Linkedin</a></li>
      <li><a href="https://www.instagram.com/marcot.duenas/" target="_blank" rel="noopener">Instagram</a></li>
    </ul>
    <h3>Eduardo's social links</h3>
    <ul>
      <li><a href="https://github.com/MiniDudi" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://gitlab.com/duduhnpinese" target="_blank" rel="noopener">GitLab</a></li>
      <li><a href="https://www.linkedin.com/in/eduardo-natividade-2a4870231/" target="_blank" rel="noopener">Linkedin</a></li>
      <li><a href="https://www.instagram.com/dudi_dudiii/" target="_blank" rel="noopener">Instagram</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b66b6b;
}
</style>
