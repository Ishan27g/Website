<template>
  <div class="p-grid p-jc-between" id="bioInfo">
    <div class="p-col-7">
      <div class="box ">
          <div class="p-text-left">
            <span>
              <p>I am a student at the University of Melbourne, pursuing a master's in software engineering.</p>
              <p>I enjoy web development, with particular expertise in backend technologies.</p>
              <p>I have just under 3 years of professional experience in developing software solutions in the wireless communication domain.</p>
            </span>
          </div>
      </div>
    </div>
    <div class="p-col-2">
      <div class="box p-shadow-24">
           <Card style="width: 20rem" id="menu">
              <template #content>
                  <router-link to="/work">
                    <div class="p-text-centre">Work Experience</div>
                  </router-link>
                  <router-link to="/">
                    <div class="p-text-centre">University Projects</div>
                  </router-link>
                  <router-link to="/">
                    <div class="p-text-centre">Side Projects</div>
                  </router-link>
                  <router-link to="/">
                    <div class="p-text-centre">Timeline</div>
                  </router-link>
              </template>
          </Card>
      </div>
    </div>
  </div>
  <router-view> </router-view>
</template>
<script>

export default {
  name: 'Home',
  
}
</script>

<style >
  #bioInfo {
    margin-top: 240px;
    font-size: 26px;
    margin-right: 8%;
  }
  #menu {
    position: relative;
    margin-top: 40px;
    line-height: 50px;
    font-size: 20px;

  }
</style>
