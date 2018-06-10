<template lang="html">
  <div>
    <delay :wait="3000">
      <h2 class="h2">Урок 9. Работа с API</h2>
    </delay>
    <delay :wait="5000">
      <p>Только что сработал vue-delay в заголовке</p>
    </delay>
    <p>{{ time }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: null
    }
  },
  created() {
    this.timer()
  },
  methods: {
    timer: function () {
      this.time = Date.now()
    }
  }
}
</script>
