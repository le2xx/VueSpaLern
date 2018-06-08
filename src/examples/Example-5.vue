<template lang="html">
  <div>
    <h2 class="h2">Урок 5. События v-on</h2>
      <p>{{ message }}</p>
      <button class="btn" v-on:click="registr">Поменять регистр</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'привет мир!'
    }
  },
  methods: {
    registr: function () {
      if (this.message === this.message.toLowerCase()) {
        return this.message = this.message.toUpperCase()
      }
      return this.message = this.message.toLowerCase()
    }
  }
}
</script>
