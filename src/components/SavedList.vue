<template>
  <div class="savedlist">
    <h1>Saved List</h1>
    <h2>{{msg}}</h2>

  </div>
</template>

<script>
  import list from '@/assets/dbstatic.js'

  export default {
    name: 'SavedList',
    data () {
      return {
        msg: 'You saved the following items of interest...',
        cities: list

      }

    }

  }
</script>
