<template>
  <el-card class="box-card">
    <div class="item" v-for="(item, index) in comments" :key="index">
      <div class="item-text">
        <p>{{item.userName}}</p>
        <p>{{item.comment}}</p>
      </div>
      <el-button type="text" @click="delHandler($event, index)" >删除</el-button>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {}
    },
    computed: {
      comments () {
        return this.$store.getters.initComments
      }
    },
    methods: {
      delHandler ($event, index) {
        this.$store.commit('del', index)
      }
    }
  }
</script>

<style scoped lang="less">
  .box-card{
    max-height: 500px;
  }
  .item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
    .item-text{
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
</style>
