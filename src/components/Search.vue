<template>
  <header class="Search">
      <h4>{{ msg }}!</h4>
      <h1><span>T</span>hings <span>t</span>o <span>D</span>o <br /><span>I</span>n...</h1>
      <form v-bind:action="/results/ + selected">
        <select v-model="selected">
          <optgroup name="selectacity" label="Available Cities">
            <option v-if="selected === ''" label="Selected A City..." selected></option>
            <option v-for="(value, key) in cities.list.cities">{{ value.current_city.name }}</option>

          </optgroup>

        </select>
        <button type="submit">>></button>
        <br />
        <br />
        <h5>- or -</h5>
        <br />
        <input placeholder="Enter A City" v-model="selected" />
        <button type="submit">>></button>
        <br />
        <br />

      </form>
<!--      <p>{{ selected }}</p> -->
      <h5 v-if="selected !== 'New York City'">Well, it's not New York City... </h5>
      <h5 v-else>The big apple!</h5>
      <h5 v-if="selected === 'Los Angeles'">Beach body weather!</h5>
      <h5 v-if="selected === 'London'">The United Kingdom, Great Britain, British! All the same?</h5>
      <h5 v-if="selected === 'Chicago'">A windy city?!</h5>
      <h5 v-if="selected === 'Boston'">Something's always brewing in Boston?</h5>

  </header>

</template>

<script>
  import list from '@/assets/dbstatic.js'

  export default {
    name: 'Search',
    data () {
      return {
        msg: 'Welcome to Travel Assistant App',
        selected: '',
        methods: { // I can't call these methods within this parent..?
          routedir: (selected) => {
              let x = selected;
              let a = '/results/';
                if (selected === "New York City") {
                  return a + 'newyorkcity'

                }

          }, // a direct string for the correct route to go to

        },
        domselects: '',
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
  select {
    border: black solid 1px;
    padding: .24em;
    padding: .24rem;

  }
  h1 {
    margin: 1rem 0;
    margin: 1em 0;

  }
  h1 > span {
    background-color: cyan;
    padding: 0 5px;

  }
  input {
    background: #CCCEEE;
    padding: .24em;
    padding: .24rem;
    box-shadow: 1px 3px 5px inset black;
    border: 1px solid black;

  }

  button {
    padding: .24em;
    padding: .24rem;
    color: #EEEFFF;
    background: #222;
    border: 1px solid black;

  }

</style>
