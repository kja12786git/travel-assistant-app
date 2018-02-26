<template>
  <section class="results">
    <h1>Search Results</h1>
      <p>{{msg}}</p>
      <br />
    <h2>{{ cities.list.cities.newyorkcity.current_city.name }}</h2>
<!--      <h3>Number of interests listed: <strong>{{ london.current_city.total_points_of_interest }}</strong></h3> -->


      <ol>
        <li v-for="(value, key) in cities.list.cities.newyorkcity.points_of_interest">
          <ul>
            <li><b>{{ value.title }}</b></li>
            <li>{{ value.details.short_description }}</li>
            <li><a :href="value.location.google_maps_link" class="google_maps_link" target="newpage">{{ value.location.google_maps_link }}</a></li>

          </ul>

        </li>

      </ol>

  </section>

</template>

<script>

    import list from '@/assets/dbstatic.js'

    export default {

      name: 'NewYork',
      data () {
        return {
            msg: 'To display data from the city searched.',

            city: 'New York City', //pending

            cities: list,

            googlelinks: document.getElementsByClassName("google_maps_link").innerText,

            methods:  {
              dothis: () => {
                console.log("space for a bunch of methods")
                        }
              }

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
