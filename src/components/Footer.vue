<template>
  <footer>
    <h4>{{msg}}</h4>
    <em><a style="font-size: bold;" target="github" href="https://github.com/kjerrya">@kjerrya</a></em>

  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        msg: 'Excellently put together using a \'Vue-cli\' build'

      }
    }
  }

</script>

<style scoped>
  footer {
    font-size: 80%;
    bottom: 0;
    padding: 1em 0;
    padding: 1rem 0;
    margin: 2em 0 0 0;
    margin: 2rem 0 0 0;
    text-indent: 1rem;
    background-color: #020202;
    color: white;
    width: 100%;

  }

</style>
