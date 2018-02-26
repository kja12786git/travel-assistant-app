<template>

  <div id="app">
    <Nav />
    <main>
      <router-view /> <!--    <Search /> -->
      <!--    <Results />
      <SavedList /> -->
      <Footer />

    </main>
  </div>

</template>

<script>
  import Results from '@/components/Results'
  import SavedList from '@/components/SavedList'
  import Nav from '@/components/Nav'
  import Footer from '@/components/Footer'

  export default {
    name: 'App',
    components: {
      Nav, Results, SavedList, Footer

  },
    data () {
      return {
        msg: 'The data replicating a static of the api...',

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
  * {
    margin: 0;
    padding: 0;
    border: none;
    cursor: default;

  }
  ul {
    list-style-type: none;

  }
  ol {
    list-style-type: decimal;

  }
  button, a:link, select {
    cursor: pointer;

  }
  input {
    cursor: text;

  }
  main > * {
    width: 97%;

  }

</style>
