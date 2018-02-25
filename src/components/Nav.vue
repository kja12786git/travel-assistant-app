<template>
    <nav>
      <ul>
        <li><a href="/">Search</a></li>
        <li><a href="SavedList">Saved List</a></li>

      </ul>

    </nav>

</template>

<script>
  export default {
    name: 'Nav',
    data () {
      return {
        msg: 'To display data for navigation of application.',

      }
    }
  }

</script>

<style scoped>
  ul > li {
    display: inline-block;

  }

</style>
