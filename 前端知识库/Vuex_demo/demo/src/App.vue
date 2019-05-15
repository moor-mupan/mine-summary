<template>
  <el-container>
    <el-header height="60px">
      <h1 class="header">Vue+Vuex+ElementUI+less</h1>
    </el-header>
    <el-container>
      <el-aside width="400px">
        <Add></Add>
      </el-aside>
      <el-main>
        <List></List>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
	import List from './components/List'
	import Add from './components/Add'
	export default {
		name: 'App',
		components: {
			List,
      Add
		},
		data () {
			return {
			}
		}
	}

</script>

<style scoped lang="less">
  /* element-ui */
  .el-aside{
    padding: 20px;
  }
  /* element-ui */

  .header{
    font-size: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #587bdd;
    color: #eee;
  }
</style>
