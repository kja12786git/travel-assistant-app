<template>
  <section class="results">
    <h1>Search Results</h1>
      <p>{{msg}}</p>
      <br />
          <h2>{{ cities.list.cities.london.current_city.name }}</h2>
<!--      <h3>Number of interests listed: <strong>{{ london.current_city.total_points_of_interest }}</strong></h3> -->


      <ol>
        <li v-for="(value, key) in cities.list.cities.london.points_of_interest">
          <ul>
            <li><b>{{ value.title }}</b></li>
            <li>{{ value.details.short_description }}</li>
            <li>{{ value.location.google_maps_link }}</li>

          </ul>

        </li>

      </ol>

  </section>

</template>

<script>
  import list from '@/assets/dbstatic.js'

  export default {

    name: 'Results',
    data () {
      return {
          msg: 'To display data from the city searched.',

          city: () => { return 'thecity' }, //pending

          cities: list

        }

      }

  }

</script>

<style scoped>
  h2 {
    font-size: 400%;
  }

  li {
    padding: .5em 0;
    padding: .5rem 0;
    width: 100%;
    margin: 0 auto;

  }
  ol {
    width: 90%;
    margin: auto;

  }
  ol > li {
    border-bottom: 1px solid black;

  }
  ol > li:nth-child(even){
    background: lightgrey;


  }


</style>
