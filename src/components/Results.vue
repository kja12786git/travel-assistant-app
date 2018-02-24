<template>
  <div class="results">
    <h1>Search Results</h1>
      <p>{{msg}}</p>
      <!--<p>{{ item.current_city.name }}</p>-->

    <span v-for="item in items">
      <ul>
        <li><strong>{{ item.current_city.name }}</strong></li>
        <li>Number of interests listed: <strong>{{ item.current_city.total_points_of_interest }}</strong></li>
        <li>Find it on: {{ item.current_city.google_maps_link }} Google Maps!</li>
        <li>Description: {{ item.current_city.details.short_description }}</li>

      </ul>

    </span>

  </div>

</template>

<script>
  export default {
    name: 'Results',
    data () {
      return {
        msg: 'To display data from the city searched.',

      }
    }
  }

</script>
