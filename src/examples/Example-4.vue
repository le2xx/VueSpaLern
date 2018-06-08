<template lang="html">
  <div>
    <h2 class="h2">Урок 4. Циклы v-for</h2>
      <ol>
        <li v-for="item in todos">
           Наименование: {{ item.name }} Цена: {{ item.price }}
        </li>
      </ol>
      <br>
      <table class="table">
        <tr>
          <td class="table__col table__col_head">№</td>
          <td class="table__col table__col_head">Наименование</td>
          <td class="table__col table__col_head">Цена</td>
        </tr>
        <tr v-for="item in todos">
          <td class="table__col num"></td>
          <td class="table__col">{{ item.name }}</td>         
          <td class="table__col">{{ item.price }}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [
        { name: 'Бананы', price: 10 },
        { name: 'Апельсины', price: 15 },
        { name: 'Мандарины', price: 20 },
        { name: 'Киви', price: 34 },
        { name: 'Картошка', price: 21 }
      ]
    }
  },
}
</script>
