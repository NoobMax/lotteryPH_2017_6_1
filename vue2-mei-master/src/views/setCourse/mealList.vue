<template>
    <!-- 套餐疗程 -->
    <div>
        <i-header title='套餐疗程'></i-header>
        <div class="container">
            <div v-for='(item,i) in todes' class="im_hot_box" id='im_hot_box'>
                <router-link :to="'/Mealdeta/id='+ item.id">
                    <div>
                        <img v-bind:src="item.list_pic" class="img-responsive center-block">
                    </div>
                    <div class="im_project">
                        <div class="col-xs-8">
                            <h4>{{item.name}}</h4>
                            <p><i class="bq"></i> <span>{{item.type_name}}</span></p>
                        </div>
                        <div class="col-xs-4 meal_order">
                            <p><i class="sym">￥</i><i class="price">{{item.price}}</i></p>
                            <p><i>订单数：</i><span>{{item.sale}}</span></p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../../api'
import iHeader from '../../components/i-header'
export default {
    data() {
        return {
            todes: []
        }
    },
    methods: {
        getList() {
            self = this;
            this.$http.get(api.getMealList()).then(res => {
                this.todes = res.data.data.list;
            });
        }
    },
    created() {
        this.getList();
    },
    components: {
        iHeader
    }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
    background: #fff;
    padding-top: 10px;
    margin-bottom: 60px;
}

.container .im_hot_box {
    padding: 0;
    margin: 10px 0;
    height: 156px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    min-height: 1px;
}

.img-responsive {
    display: block;
    height: auto;
    max-width: 100%;
}

.im_project {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 51px;
    background: #fff;
    width: 100%;
    opacity: 0.8;
}

.col-xs-8 {
    width: 66.66666666666666%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.im_project h4 {
    color: #000;
    font-family: "Microsoft YaHei", "微软雅黑";
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.bq {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url(../../../static/images/list.png) no-repeat;
    background-size: 100%;
    vertical-align: middle;
}

.meal_order {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    float: left;
    width: 33.33333333333333%;
}

.meal_order p {
    margin-top: 1px;
}

.sym,
.price {
    color: #f67476;
    font-size: 16px;
    font-weight: bold;
}
</style>