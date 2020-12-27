<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <main>

      <div class="right-side">
        <div class="doc">
          <div class="title alt">Other Documentation</div>
          <button @click="aa">1111111</button>
          <el-button>11111</el-button>
        </div>
      </div>
    </main>
    <router-view></router-view>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      aa(){
        console.log(this.$route)
        this.$router.push('/aa')
      }
    }
  }
</script>

<style>


</style>
