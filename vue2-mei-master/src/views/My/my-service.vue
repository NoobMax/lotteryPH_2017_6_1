<template>
  <!--当新用户或者没选择门店用户进来时  会让选择默认门店-->
  <div>
    <i-header title="在线客服"></i-header>
  </div>
</template>

<script>
  import iHeader from '../../components/i-header'
  // console.log(iHeader)
  export default {

    data() {
      return {

      }
    },
    methods: {},
    created() {
      // 先判断是否选择了门店 没有就跳转到appointmentShop

      // if()
    },
    components: {
      iHeader
    }
  }

</script>
