<template>
    <nav>
      <ul>
        <li><a href="/">Search</a></li>
        <li><a href="SavedList">Saved List</a></li>
        <li class="fixed"><a href="/login">Login</a></li>

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
  nav {
    margin: 1em 0;
    margin: 1rem 0;
    
  }
  ul > li {
    display: inline-block;

  }

</style>
