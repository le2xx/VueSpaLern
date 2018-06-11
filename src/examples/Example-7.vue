<template lang="html">
  <div>
    <h2 class="h2">Урок 7. Компоненты</h2>
    <ol>      
      <todo-item
        v-for="item in fresh"
        v-bind:todo="item"
        v-bind:key="item.id">
      </todo-item>
    </ol>
  </div>
</template>

<script>
import Todoitem from '../components/Todoitem.vue'

export default {
  components: {
    'todo-item': Todoitem
  },
  data () {
    return {
      fresh: [
        { id: 0, text: 'Мандарины' },
        { id: 1, text: 'Яблоки' },
        { id: 2, text: 'Бананы' }
      ]
    }
  }
}
</script>
