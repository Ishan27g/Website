<template>
  <div>
    <div class="p-grid p-jc-between" id="ishan">
      <div class="p-offset-2 p-col-3 p-text-center">
        <div class="box">Ishan Goyal</div>
      </div>
    </div>
    <div class="p-grid p-jc-between" id="bioInfo">
      <div class="p-col-7">
        <div class="box">
          <div class="p-text-center">
            <span>
              <p>
                I am a student at the University of Melbourne, pursuing a
                master's in software engineering.
              </p>
              <p>
                I enjoy web development, with particular expertise in backend
                technologies.
              </p>
              <p>
                I have just under 3 years of professional experience in
                developing software solutions in the wireless communication
                domain.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div class="p-col-3" >
        <div class="box p-shadow-6">
          <Card id="menu">
            <template #content>
              <router-link to="/work">
                <div class="p-text-centre p-text-bold">Work Experience</div>
              </router-link>
              <router-link to="/uni">
                <div class="p-text-centre p-text-bold">University Projects</div>
              </router-link>
              <router-link to="/side">
                <div class="p-text-centre p-text-bold">Side Projects</div>
              </router-link>
              <router-link to="/">
                <div class="p-text-centre p-text-bold">Timeline</div>
              </router-link>
            </template>
          </Card>
        </div>
      </div>
    </div>
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      email: false,
    };
  },
  methods: {
    showEmail() {
      this.email = true;
    },
  },
};
</script>

<style >
#bioInfo {
  margin-top: 100px;
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
  margin-top: 80px;
  font-size: 50px;
  color: #494141;
}

</style>
