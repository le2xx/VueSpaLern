<template lang="html">
  <div>
    <h2 class="h2">Урок 3. Условия v-if</h2>
    <div v-if="seen">Сейчас меня видно?</div>
    <button class="btn" v-on:click="hide">{{ message }}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      seen: true,
      message: 'Скрыть сообщение'
    }
  },
  methods: {
    hide: function () {
      if (this.seen) {
        this.seen = false
        return this.message = 'Показать сообщение'
      }
      this.seen = true
      return this.message = 'Скрыть сообщение'
    }
  }
}
</script>
