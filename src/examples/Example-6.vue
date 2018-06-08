<template lang="html">
  <div>
    <h2 class="h2">Урок 6. Cвязывание элементов форм и состояние приложения v-model</h2>
    <div>
      <p>{{ message }}</p>
      <input class="input" v-model="message">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello world!'
    }
  }
}
</script>
