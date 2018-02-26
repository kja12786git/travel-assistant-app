<template>
  <footer>
    <h4>{{msg}}</h4>

  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        msg: 'The common footer component.'

      }
    }
  }

</script>

<style scoped>
  footer {
    bottom: 0;
    padding: 1em 0;
    padding: 1rem 0;
    margin: 0;
    text-indent: 1rem;
    background-color: black;
    color: white;
    width: 100%;

  }

</style>
