<template>
  <main id="app">
    <Nav />
    <router-view /> <!--    <Search /> -->
    <!--    <Results />
    <SavedList /> -->
    <Footer />

  </main>

</template>

<script>
  import Results from '@/components/Results'
  import SavedList from '@/components/SavedList'
  import Nav from '@/components/Nav'
  import Footer from '@/components/Footer'
//  import cities from '@/assets/dbstatic.js'

  export default {
    name: 'App',
    components: {
      Nav, Results, SavedList, Footer

  },
    data () {
      return {
        msg: 'The data replicating a static of the api...',
/*      items: cities,
        allcities: { // Do for Post with reconfigured JSON format
        }*/
      }

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
  body * {
    margin: 0;
    padding: 0;
    border: none;
    cursor: default;

  }
  body ul {
    list-style: none;

  }
  button, a:link, select {
    cursor: pointer;

  }
  input {
    cursor: text;

  }

</style>
