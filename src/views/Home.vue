<template>
  <div>
    <div class="p-grid p-jc-around" id="ishan">
      <div class="p-col-12 p-text-center">
        <div
          class="box"
          style="color: #f7f8f1; font-family: 'Montserrat', sans-serif; font-weight: 600;"
        >
          ISHAN GOYAL
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/63078216?v=4"
          style="
            border-radius: 50%;
            width: 20%;
            display: block;
            margin-top: 5px;
            margin-left: auto;
            margin-right: auto;
          "
        />
      </div>
    </div>
    <div class="p-grid p-jc-between" id="bioInfo">
      <div class="p-col-12 p-md-8">
        <div class="p-text-center p-text-light">
          <span>
            <p>
              I am a student at the University of Melbourne, in my final semester of a Master's
              in software engineering.
              I enjoy software development, with particular expertise in backend
              technologies.
            </p>
              <p>
              As a clueless undergraduate in 2016, I was fortunate to start at <a href="https://hsc.com/" target="_blank">Hughes Systique</a>
              and gain invaluable insights about software development & technology. 3 years later, it led me to pursue a Masters in Software engineering at UniMelb.
              </p>
            <p>
            I have recently completed a full stack internship at <a href="https://linkmate.com.au/" target="_blank">LinkMate</a> as a part of my course,
            prior to which I was a supervisor for the capstone undergraduate <a href="https://handbook.unimelb.edu.au/subjects/comp30022" target="_blank">IT project</a> at the University of Melbourne. 
            </p>
          </span>
        </div>
      </div>
      <div class="p-col-12 p-md-4 p-text-center">
        <div id="menu">
          <router-link to="/uni">
            <div class="p-text-centre p-text-bold p-text-wrap">
              University Projects
            </div>
          </router-link>
          <router-link to="/side">
            <div class="p-text-centre p-text-bold p-text-wrap">
              Side Projects
            </div>
          </router-link>
          <router-link to="/openSource">
            <div class="p-text-centre p-text-bold p-text-wrap">
              Open Source Contributions
            </div>
          </router-link>
          <router-link to="/work">
            <div class="p-text-centre p-text-bold p-text-wrap">
              Work Experience
            </div>
          </router-link>
          <div @click="showTech()">
            <div
              class="p-text-centre p-text-bold p-text-wrap"
              style="color: #dd700a"
            >
              Tech Stack
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view> </router-view>
    <Sidebar
      v-model:visible="tech"
      :baseZIndex="1000"
      position="full"
      dismissable:true
    >
      <div class="p-grid p-jc-center">
        <div class="p-col-12 p-md-6 p-lg-4 p-text-right">
          <div
            class="p-grid p-jc-around p-ai-center vertical-container"
            style="margin-top: 3%"
          >
            <div v-for="tech in techs1" :key="tech.tooltip">
              <div class="p-col-12 p-md-6">
                <Avatar :image="tech.image" size="xlarge" shape="circle" />
                <h4 class="p-text-center">{{ tech.tooltip }}</h4>
              </div>
            </div>
          </div>
          <div class="p-grid p-jc-around vertical-container">
            <div v-for="tech in techs2" :key="tech.tooltip">
              <div class="p-col-12 p-md-6">
                <Avatar :image="tech.image" size="xlarge" shape="circle" />
                <h4 class="p-text-center">{{ tech.tooltip }}</h4>
              </div>
            </div>
          </div>
          <div class="p-grid p-jc-around vertical-container">
            <div v-for="tech in techs3" :key="tech.tooltip">
              <div class="p-col-12 p-md-6">
                <Avatar :image="tech.image" size="xlarge" shape="circle" />
                <h4 class="p-text-center">{{ tech.tooltip }}</h4>
              </div>
            </div>
          </div>
          <div class="p-grid p-jc-around p-ai-center vertical-container">
            <div v-for="tech in techs4" :key="tech.tooltip">
              <div class="p-col-12 p-md-6">
                <Avatar :image="tech.image" size="xlarge" shape="circle" />
                <div class="p-text-center">{{ tech.tooltip }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      tech: false,
      techs1: [
        {
          image: "https://img.icons8.com/color/48/000000/golang.png",
          tooltip: "Golang",
        },
        {
          image: "https://img.icons8.com/color/48/000000/typescript.png",
          tooltip: "Typescript",
        },
        {
          image: "https://img.icons8.com/color/96/000000/c-programming.png",
          tooltip: "C",
        },
        {
          image:
            "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
          tooltip: "Java",
        },
      ],
      techs2: [
        {
          image: "https://img.icons8.com/color/48/000000/vue-js.png",
          tooltip: "Vue.js",
        },
        {
          image: "https://img.icons8.com/windows/100/26e07f/nodejs.png",
          tooltip: "Node.js",
        },
      ],
      techs3: [
        {
          image: "https://img.icons8.com/color/100/000000/sql.png",
          tooltip: "SQL",
        },
        {
          image: "https://img.icons8.com/color/96/000000/mongodb.png",
          tooltip: "MongoDB",
        },
      ],
      techs4: [
        {
          image: "https://img.icons8.com/dusk/128/000000/docker.png",
          tooltip: "Docker",
        },
        {
          image: "https://img.icons8.com/color/48/000000/nginx.png",
          tooltip: "Nginx",
        },
        {
          image: "https://img.icons8.com/officel/40/000000/console.png",
          tooltip: "Shell",
        },
        {
          image: "https://img.icons8.com/color/100/000000/git.png",
          tooltip: "Git",
        },
      ],
    };
  },
  methods: {
    showTech() {
      this.tech = true;
    },
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
#ishan {
  position: relative;
  font-size: 46px;
}
#bioInfo {
  margin-top: 5px;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 22px;
  color: #ffffff;
}
#menu {
  position: relative;
  margin-top: 20px;
  line-height: 40px;
  font-size: 18px;
}
.vertical-container {
  margin: 0 auto;
  height: 150px;
}
p{
    font-weight: 400;
}
</style>
