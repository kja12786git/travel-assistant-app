<template>
  <section class="results">
    <div class="listlink">A graphical ui link</div>
    <h1>Search Results</h1>
      <p>{{ msg }}</p>
      <p>{{ listCount }}</p>
      {{ methods.dothis() }}
      <br />
          <h2>{{ cities.list.cities.london.current_city.name }}</h2>
<!--      <h3>Number of interests listed: <strong>{{ london.current_city.total_points_of_interest }}</strong></h3> -->

      <ol>
        <li v-for="(value, key) in cities.list.cities.london.points_of_interest">

          <ul style="position: relative">
            <li><b>{{ value.title }}</b></li>
            <li class="details">
              <div>{{ key + 1 }}</div>
              <div style="font-size:1em; color:Orange;">
                <span class="addtolist" v-if="msg === 'To display data from the city searched.'">
                <i class="far fa-heart"></i><span style="color: blue;">Save to List!</span></span>
                <span class="addtolist" v-else><i class="fas fa-heart"></i><span style="color: blue;">Saved!</span></span>

              </div>
              <div>{{ value.details.short_description }}</div>
            </li>
            <li><a :href="value.location.google_maps_link" class="google_maps_link" target="newpage">See this location on the map!</a>
          </li>

          </ul>

        </li>

      </ol>

  </section>

</template>

<script>
//    import { mapState, mapGetters } from 'vuex'
    import list from '@/assets/dbstatic.js'

    export default {
      name: 'Results',
/*      computed: {
        ...mapState(['pushto']),
        ...mapGetters(['listCount'])

      },*/
      data () {
        return {
            msg: 'To display data from the city searched.',

            cities: list,

//            googlelinks: document.getElementsByClassName("google_maps_link").innerText,

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
    margin: auto;

  }
  ol > li {
    border-bottom: 1px solid black;
    overflow: hidden;
    vertical-align: top;

  }
  ol > li:nth-child(even){
    background: lightgrey;

  }
  .details > div {
    max-height: 166px;
    overflow-y: hidden;

  }
  .details > div {
    display: inline-block;

  }
  .details > div:nth-child(1) {
    font-size: 2em;
    font-weight: 400;

  }

  .details > div:nth-child(2) {
    width: 100px;

  }
  .addtolist {
    cursor: pointer;

  }
  .details > div:nth-child(3) {
    text-align: left;
    width: 66%;

  }

</style>
