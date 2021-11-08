  <template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <project-info :title="title" :allocatedEmployeeCount="allocatedEmployeeCount" :startDate="startDate"/>
    <!-- <global-component /> -->
  </div>
</template>

<script>
import ProjectInfo from './components/ProjectInfo.vue';

export default {
  name: 'App',
  components: {
    ProjectInfo
  },
  data(){
    return{
      title:'Project Alpha',
      allocatedEmployeeCount:'100',
      startDate:"29-01-2021"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
