<template>
    <div>
    <div class="p-grid p-jc-between" id="ishan">
      <div class="p-col-3 p-text-left" >
        <div class="box">Ishan Goyal</div>
      </div>
      <div class="p-col-5 p-text-right">
        <div class="box">
          <a href="https://github.com/Ishan27g" target="_blank">
            <Avatar image="https://img.icons8.com/color/000000/github--v1.png" size="large" shape="circle" style="margin-right:100px;" v-tooltip.bottom="'Open Github'"/>
          </a>
          <a href="mailto:ishan.goyal@student.unimelb.edu.au">
            <Avatar image="https://img.icons8.com/fluent/96/000000/send-mass-email.png" size="large" shape="circle" style="margin-right:60px;" alt=""
             v-tooltip.bottom="'Send Email'"/>
            </a>
        </div>
      </div>
    </div>
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
    <div class="p-col-3">
      <div class="box p-shadow-24">
           <Card id="menu">
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
      </div>

  <router-view> </router-view>
</template>
<script>


export default {
  name: 'Home',
  data() {
    return {
      email: false,
    }
  },
  methods: {
    showEmail() {
        this.email = true
      },
  },
}
</script>

<style >
  #bioInfo {
    margin-top: 140px;
    font-size: 26px;

  }
  #menu {
    position: relative;
    margin-top: 40px;
    line-height: 50px;
    font-size: 20px;
  }
  #ishan {
    position: relative;
    margin-top: 150px;
    font-size: 50px;
    color: #494141;
  }
</style>
