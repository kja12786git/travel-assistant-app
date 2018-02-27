<template>
    <nav>
      <ul>
        <li><a href="/">Search</a></li>
        <li><a href="SavedList">Saved List</a></li>
        <li class="end"><a href="/login">Login</a></li>

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
    width: 100%;
    height: 50px;
    top: 0;
    background-color: #EEEFFF;
/*    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px; */

  }
  ul {
    padding: 1em 0;
    padding: 1rem 0;

  }
  ul > li {
    position: relative;
    display: inline-block;
    width: 100px;
    border-right: 1px skyblue inset;


  }
  ul > li:hover {
    border-bottom: 2px black solid;

  }

  a:link, a:visited {
    color: black;
    text-decoration: none;

  }
  .end {
    border-right: 0;

  }


</style>
