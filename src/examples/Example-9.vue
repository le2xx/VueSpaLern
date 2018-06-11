<template lang="html">
  <div>
    <link rel="stylesheet" media="screen" 
    href="https://fontlibrary.org/face/segment7" type="text/css"/>
    <delay :wait="3000">
      <h2 class="h2">Урок 9. Работа с API</h2>
    </delay>
    <delay :wait="5000">
      <p>Только что сработал vue-delay в заголовке</p>
    </delay>
    <div class="watch">{{ hours }}:{{ minutes }}:{{ seconds }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hours: null,
      minutes: null,
      seconds: null
    }
  },
  mounted () {
    setInterval(() => this.timer(), 1000)
  },
  methods: {
    timer: function () {
      const time = new Date()
      this.hours = time.getHours()
      this.minutes = time.getMinutes()
      this.seconds = time.getSeconds()
      this.hours < 10 ? this.hours = '0' + this.hours : this.hours
      this.minutes < 10 ? this.minutes = '0' + this.minutes : this.minutes
      this.seconds < 10 ? this.seconds = '0' + this.seconds : this.seconds
    }
  }
}
</script>

<style>
.watch {
  font-family: 'Segment7Standard';
  font-size: 150px;
  color: green;
}
</style>
