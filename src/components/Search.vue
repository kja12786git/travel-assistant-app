<template>
  <header>
      <h1><span>T</span>hings <span>t</span>o <span>D</span>o <br /><span>I</span>n...</h1>

      <form action="/results">
        <input placeholder="Enter A City"></input>
        <select>
          <optgroup name="cities" label="Available Cities">
            <option v-for="item in items">{{ item.current_city.name }}</option>

          </optgroup>

        </select>
        <button>>></button>

      </form>

  </header>


</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        msg: 'Welcome to Travel Assistant App'

      }
    }
  }
</script>

<style scoped>
  h1 > span {
    background-color: cyan;
    padding: 0 5px;

  }

</style>
