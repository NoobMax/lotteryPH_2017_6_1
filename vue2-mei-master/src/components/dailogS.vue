<template>
<div>
  <!-- <mu-raised-button label="dialog" @click="open"/> -->
  <mu-icon-button icon='expand_more' @click="open" />
  <mu-dialog :open="dialog"  @close="close">
    <div @click="close" >兩面盤</div>
    <div @click="close" >冠亞和</div>
    <div @click="close" >一至五</div>
    <div @click="close" >六至十</div>
    <!-- <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" primary @click="close" label="确定"/> -->
  </mu-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
