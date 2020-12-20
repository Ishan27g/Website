<template>
    <div>
     <div class="p-d-flex">
         <div class="p-grid">
            <div class="p-col-8 p-md-6 p-lg-8">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-8 p-md-6 p-lg-8">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-8 p-md-6 p-lg-8">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
            <div class="p-col-8 p-md-6 p-lg-8">
                <div class="box">p-col-12 p-md-6 p-lg-3</div>
            </div>
        </div>
     </div>

    </div>
</template>

<script>
export default {
  name: 'Work',
  data() {
      return {
          notOnHome : true,
      }
  },
    onMounted() {
        this.notOnHome = false
        this.$emit('notOnHome', 'notOnHome')
  }
}
</script>

<style >
</style>