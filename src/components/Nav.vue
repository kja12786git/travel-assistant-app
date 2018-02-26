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
    position: fixed;
    top: 0;
    background-color: #EEEFFF;
    padding: 1em;
    padding: 1rem;
    border-bottom-right-radius: 20px;

  }
  ul {
    padding-left: 1rem;
    padding-left: 1rem;

  }
  ul > li {
    display: inline-block;
    width: 100px;
    border-right: 1px white inset;
    position: relative;

  }

  a:link, a:visited {
    color: black;
    text-decoration: none;

  }

</style>
