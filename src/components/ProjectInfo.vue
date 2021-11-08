<template>
  <div class="row">
    <h1>{{title}}</h1>
    <p><strong>Employees Allocated:</strong> {{allocatedEmployeeCount}}</p>
    <p><strong> Start Date : </strong> {{startDate}}</p>
  </div>
</template>
<script>
export default {
    name:'ProjectInfo',
    props:['title','allocatedEmployeeCount','startDate']
}
</script>
<style scoped>

</style>