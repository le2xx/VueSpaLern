<template lang="html">
  <div>
    <h2 class="h2">Урок 8. CRUD</h2>
      <p>Фильтр:</p>
      <div>
        <select class="select" v-model="selected" v-on:change="filterAutoName">
          <option class="select" disabled value="">Выберите марку</option>
          <option class="select" v-for="item in select">{{ item }}</option>
        </select>
        <button class="btn" v-on:click="filterAuto">Фильтр</button>
      </div>
      <div>
        <p>Добавить машину:</p>
        <input class="input" v-model="auto.name" placeholder="Марка">
        <input class="input" v-model="auto.model" placeholder="Модель">
        <input class="input" type="number" pattern="\d+" v-model="auto.price" placeholder="Цена">
        <input class="input" type="number" pattern="\d+" min="1900" max="2100" value="2018" 
          v-model="auto.year" placeholder="Год">
        <button class="btn" v-on:click="addAuto(auto)">Добавить машину</button>
      </div>
      <table class="table">
        <tr>
          <td class="table__col">
            <button class="btn btn_table" v-on:click="sortAuto('name', 'up')">↑</button><br>
            <button class="btn btn_table" v-on:click="sortAuto('name', 'dowm')">↓</button>
          </td>
          <td class="table__col">
            <button class="btn btn_table" v-on:click="sortAuto('model', 'up')">↑</button><br>
            <button class="btn btn_table" v-on:click="sortAuto('model', 'dowm')">↓</button>
          </td>
          <td class="table__col">
            <button class="btn btn_table" v-on:click="sortAuto('price', 'up')">↑</button><br>
            <button class="btn btn_table" v-on:click="sortAuto('price', 'dowm')">↓</button>
          </td>
          <td class="table__col">
            <button class="btn btn_table" v-on:click="sortAuto('year', 'up')">↑</button><br>
            <button class="btn btn_table" v-on:click="sortAuto('year', 'dowm')">↓</button>
          </td>
          <td class="table__col">
            <button class="btn" v-on:click="reset">Вернуть все как было</button>
          </td>
        </tr>
        <tr>
          <td class="table__col table__col_head">Марка</td>
          <td class="table__col table__col_head">Модель</td>
          <td class="table__col table__col_head">Цена</td>
          <td class="table__col table__col_head">Год</td>
          <td class="table__col table__col_head"></td>
        </tr>
        <tr v-for="item in todos">
          <td class="table__col">{{ item.name }}</td>         
          <td class="table__col">{{ item.model }}</td>
          <td class="table__col">{{ item.price }}</td>         
          <td class="table__col">{{ item.year }}</td>
          <td class="table__col"><button class="btn btn_remov" v-on:click="removAuto(item)">Удалить</button></td>
        </tr>
      </table>
      <p>Всего машин в списке: {{ sum }} шт.</p>
  </div>
</template>

<script>
const json = [
  { name: 'BMV', model: 'X5', price: 34000, year: 2015 },
  { name: 'AUDI', model: 'A3', price: 12000, year: 2017 },
  { name: 'Hyundai', model: 'Solaris', price: 20000, year: 2013 },
  { name: 'KIA', model: 'Rio', price: 14600, year: 2015 },
  { name: 'AUDI', model: 'Q3', price: 17500, year: 2014 },
  { name: 'BMV', model: 'X6', price: 39000, year: 2018 },
  { name: 'KIA', model: 'Cerato', price: 11000, year: 2009 },
  { name: 'Toyota', model: 'Carola', price: 2100, year: 2007 },
  { name: 'AUDI', model: 'A6', price: 12500, year: 2011 },
  { name: 'Hyundai', model: 'Gets', price: 6000, year: 2013 },
  { name: 'ВАЗ', model: '1111', price: 1000, year: 1998 }
]

export default {
  data () {
    return {
      todos: json.slice(),
      selected: '',
      auto: {}
    }
  },
  computed: { // геттеры вычисляемого значения
    sum: function () {
      return this.todos.length
    },
    select: function () { 
      const listName = this.todos.reduce((acc, item) => [...acc, item.name], [])
      return [...new Set(listName)]
    },
  },
  methods: {
    sortAuto: function (n, m = 'up') {
      if (m === 'up') {
        return this.todos.sort((a, b) => a[n] < b[n] ? -1 : 1)
      }
      return this.todos.sort((a, b) => b[n] < a[n] ? -1 : 1)
    },
    filterAuto: function () {
      this.todos = this.todos.filter(item => item.year > 2011)
    },
    filterAutoName: function () {
      this.todos = this.todos.filter(item => item.name === this.selected)
    },
    reset: function () {
      this.todos = json.slice()
    },
    addAuto: function (auto) {
      if (Object.values(auto).length < 4) {
        return
      }
      this.todos.push(auto)
      this.auto = {}
    },
    removAuto: function (auto) {
      this.todos = this.todos.filter(item =>
        Object.values(item).join() !== Object.values(auto).join())
    }
  }
}
</script>
