<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handlelogin()" class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handlelogin () {
      this.$http.post(`login`, this.formdata).then((res) => {
        // console.log(res)
        const {
          data: {
            data,
            meta: {msg,status}
          }
        } = res
        if (status === 200) {
          // console.log('success---------')
          // 渲染hone.vue 
          this.$router.push({
            name:'home'
          })
        }else{
          // console.log('66666666666666666')
          // 提示框
          this.$message.error(msg);
        }
      })
    }
  }
}
</script>

<style>
    .login-wrap {
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .login-form {
    background-color: #fff;
    width: 400px;
    border-radius: 5px;
    padding: 30px;
    }
    .login-btn {
    width: 100%;
    }
</style>
