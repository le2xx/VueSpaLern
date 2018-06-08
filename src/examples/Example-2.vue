<template lang="html">
  <div>
    <h2 class="h2">Урок 2. Динамически связанные свойства</h2>
    <div v-bind:title="message">Наведи курсор на меня пару секунд</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
    }
  }
}
</script>
