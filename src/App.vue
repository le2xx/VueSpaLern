<template>
  <div class="app" id="app">
    <div class="header">
      <h1>{{ msg }}</h1>
    </div>
    <div class="sidebar">
      <div class="menu">
      <router-link v-for="item in menu"
        :key="item.example"
        class="menu__a"
        :to="{ name: `example${item.example}` }">
        <div class="menu menu__item menu__item_num">{{ item.example }}</div>
        <div class="menu menu__item menu__item_text">{{ item.text }}</div>
      </router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Учимся Vue а за одно и css с js',
      menu: [
        { example: 1, text: 'Hello World!' },
        { example: 2, text: 'Динамически связанные свойства' },
        { example: 3, text: 'Условия v-if' },
        { example: 4, text: 'Циклы v-for' },
        { example: 5, text: 'События v-on' },
        { example: 6, text: 'Cвязывание элементов форм v-model' },
        { example: 7, text: 'Компоненты' },
        { example: 8, text: 'CRUD' },
        { example: 9, text: 'Работа с API' },
      ]
    }
  }
}
</script>

<style>
body, html {
  background-color: #deecde;
  margin: 0;
  padding: 0 0;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.app {
  width: calc(100% - 20px);
  margin: 10px;
  border: 2px solid #8c9995;
  border-style: dashed;
  border-radius: 15px;
  position: absolute;
}

.header {
  border-bottom: 2px solid #8c9995;
  border-bottom-style: dashed;
  text-align: center;
  color: #42b954;
}

.h2 {
  color: darkgreen;
  text-align: left;
  margin: 0 0 10px 0;
}

.sidebar {
  width: 20%;
  min-width: 200px;
  float: left;
  border-right: 2px solid #8c9995;
  border-right-style: dashed;
}

.success {
  background: #a42f2f
}

.content {
  margin-left: calc(20% + 10px);
  margin-top: 0;
}

.menu {
  color: green;
  margin: 0;
  padding: 5px;
}

.menu__a {
  text-decoration: none;
}

.menu__item {
  float: none;
}

.menu__item_num {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  background: silver;
  color: #a42f2f;
  border-radius: 50%;
  float: left;
}

.menu__item:hover:first-child {
  background: #363b37;
  color: rgb(211, 227, 230);
}

.menu__item_text {
  margin-left: 50px;
  line-height: 45px;
}

.example {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.btn {
  background-color: #3d6c44;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  color: white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  margin: 5px;
  padding: 10px 5px;
}

.btn_remov {
  background-color: #a42f2f;
  padding: 2px 5px;
}

.input {
  background-color: #416f72;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  color: white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  margin: 5px;
  padding: 10px 5px;
}

.input::-webkit-input-placeholder {
  color: white
}

.table {
  border: 1px solid black;
  border-collapse: collapse;
  counter-reset: schetchik;
  padding: 0 10px;
}

.table__col {
  border: 1px solid black;
  padding: 0 10px;
}

.table__col_head {
  font-weight: 600px;
}

.table .num {
  counter-increment: schetchik;
}

.table .num:before {
  content: counter(schetchik);
}

.select {
  background-color: #3d6c44;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  color: white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  margin: 5px;
  padding: 10px 5px;
}
</style>
