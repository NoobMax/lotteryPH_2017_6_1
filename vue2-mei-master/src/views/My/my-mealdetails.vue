<template>
  <div>
    <iHeader title="套餐详情"></iHeader>
    已 支付套餐详情 {{msg.member_mobile}}
  
    <div v-for="(item,i) in msg.data">
      <div>
        {{
          item.name
        }}
      </div>
  
    </div>
  </div>
</template>


<script>
import iHeader from '../../components/i-header'
import { getmyMealdetails } from '../../api'
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    getmyMealdetails() {
      let order_sn = this.$route.query.id
      this.$http.get(getmyMealdetails(order_sn)).then(res => {
        console.log(res.data)
        this.msg = res.data
      })

    }
  },
  created() {
    this.getmyMealdetails()
  },
  components: {
    iHeader
  }
}
</script>
