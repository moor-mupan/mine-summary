<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="form" :rules="rules">
    <el-form-item label="用户名" prop="userName">
      <el-input placeholder="用户名" v-model="form.userName"></el-input>
    </el-form-item>
    <el-form-item label="评论" prop="comment">
      <el-input class="textarea" type="textarea" placeholder="评论" v-model="form.comment"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交评论</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
      name: "Add",
      data () {
          return {
            labelPosition: 'right',
            form: {
              userName: '',
              comment: ''
            },
            rules: {
              userName: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 2, max: 100, message: '长度在需大于2个字符', trigger: 'blur' }
              ],
              comment: [
                { required: true, message: '请输入评论', trigger: 'blur' }
              ]
            }
          }
      },
      methods: {
        onSubmit (e) {
          const data = this.form
          if (!data.userName && !data.comment) {
            this.$message({
              type: 'warning',
              message: '请输入姓名和评论'
            })
            return
          }
          this.$store.dispatch('addAction', data)
          this.form = {}
        }
      }
    }
</script>

<style scoped lang="less">
  /deep/ .el-textarea__inner{
    resize: none;
  }

</style>
