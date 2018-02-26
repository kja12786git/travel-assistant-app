<template>
  <div class="404">
    <h2>{{msg}}</h2>
    <a href="/">Here's a link</a> to the main application..
  </div>
</template>

<script>
export default {
  name: 'NoDocument',
  data () {
    return {
      msg: 'Not found page.'

    }

  }
}
</script>
