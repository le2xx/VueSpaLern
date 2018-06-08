<template>
  <div id="app">
    <header class="header">
      <h1>{{ msg }}</h1>
    </header>
    <div class="sidebar">
      <div class="menu">
      <router-link v-for="item in menu"
        :key="item.example"
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
        { example: 6, text: 'Cвязывание элементов форм v-model' }
      ]
    }
  }
}
</script>

<style>
body {
  background-color: #deecde;
  margin: 0 0 0 0;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.header {
  border-bottom: 2px solid #8c9995;
  border-bottom-style: dashed;
  color: green;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 90px;
}

.h2 {
  color: darkgreen;
  text-align: left
}

.sidebar {
  width: 20%;
  padding: 10px 0;
  box-sizing: border-box;
  border-right: 2px solid #8c9995;
  border-right-style: dashed;
  position: relative;
  min-height: 100%;
  top: 90px;
  margin: 0px 0px 0px 10px
}

.menu {
  color: green;
}

.menu__item {
  float: none;
  margin:  5px 0 5px 0;
  
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

.menu__item_text {
  width: 340px;
  position: relative;
  line-height: 50px;
}

.content {
  
  position: fixed;
  top: 90px;
  left: 21%;
  width: 79%;
  padding: 10px 5px
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
  padding: 10px 5px
}

.btn_remov {
  background-color: #a42f2f;
  padding: 2px 5px
}

.input {
  background-color: #416f72;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  color: white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  margin: 5px;
  padding: 10px 5px
}

.input::-webkit-input-placeholder {
  color: white
}

.table {
  border: 1px solid black;
  border-collapse: collapse;
  counter-reset: schetchik;
  padding: 0 10px
}

.table__col {
  border: 1px solid black;
  padding: 0 10px
}

.table__col_head {
  font-weight: 600
}

.table .num {
  counter-increment: schetchik
}

.table .num:before {
  content: counter(schetchik)
}

.select {
  background-color: #3d6c44;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  color: white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  margin: 5px;
  padding: 10px 5px
}
</style>
