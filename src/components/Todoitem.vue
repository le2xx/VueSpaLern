<template lang="html">
  <li>{{ todo.text }}</li>
</template>

<script>
export default {
  props: ['todo'],
  data () {
    return {
      result: this.props
    }
  }
}
</script>
