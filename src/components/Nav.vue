<template>
  <div>
    <nav>
      <ul>
        <li>{{msg}}</li>
        <li><a href="/">Search</a></li>
        <li><a href="SavedList">Saved List</a></li>        

      </ul>

    </nav>
  </div>

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
