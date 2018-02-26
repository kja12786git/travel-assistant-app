<template>
  <footer>
    <h4>{{msg}}</h4>
    <em>K. Jerry Alleyne</em>

  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        msg: 'Excellently put together via an \'Vue-cli\' build by...'

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
    margin: 0;
    text-indent: 1rem;
    background-color: #020202;
    color: white;
    width: 100%;

  }

</style>
