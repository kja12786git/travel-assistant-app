<template>
  <div id="app">
    <Nav />
    <router-view /> <!--    <Search /> -->
<!--    <Results />
    <SavedList /> -->

  </div>

</template>

<script>
import Results from '@/components/Results'
import SavedList from '@/components/SavedList'
import Nav from '@/components/Nav'

  export default {
    name: 'App',
    components: {
      Results, SavedList, Nav

    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

  }
  body ul {
    list-style: none;

  }

</style>
