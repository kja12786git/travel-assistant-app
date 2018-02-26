<template>
  <header class="Search">
      <h4>{{msg}}!</h4>
      <h1><span>T</span>hings <span>t</span>o <span>D</span>o <br /><span>I</span>n...</h1>
      <form action="/results/NYC">
        <input placeholder="Enter A City" value=""></input>
        <button type="submit">>></button>
        <br />
        <br />
        <h5>- or select -</h5>
        <br />
        <select>
          <optgroup name="selectacity" label="Available Cities">
            <option v-for="(value, key) in cities.list.cities">{{value.current_city.name}}</option>

          </optgroup>

        </select>


      </form>


  </header>

</template>

<script>
import list from '@/assets/dbstatic.js'

  export default {
    name: 'Search',
    data () {
      return {
        msg: 'Welcome to Travel Assistant App',
        cities: list

      }
    }
  }
</script>

<style scoped>
  header {
    margin-bottom: 2em;
    margin-bottom: 2rem;

  }
  h1 {
    margin: 1rem 0;
    margin: 1em 0;

  }
  h1 > span {
    background-color: cyan;
    padding: 0 5px;

  }

</style>
