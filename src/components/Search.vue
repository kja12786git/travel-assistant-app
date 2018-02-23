<template>
  <header>
    <api-request :resource="$api.items" v-model="items">
      <div class="loading" v-if="loading">Loading...</div>
      <div class="error" v-if="error">{{ error }}</div>
      <h1><span>W</span>hat <span>T</span>o <span>D</span>o <br /><span>I</span>n</h1>

      <form action="/results">
        <input placeholder="Enter A City"></input>
        <select><optgroup name="cities" label="Available Cities"><option v-for="item in items">{{ item.current_city.name }}</option></optgroup></select>
        <button name="submit">>></button>

      </form>

    </api-request>

  </header>
</template>

<style scoped>
  h1 > span {
    background-color: cyan;
    padding: 0 5px;

  }

</style>
