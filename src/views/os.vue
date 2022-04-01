<template>
  <div>
    <h1 class="p-text-center">Open Source Contributions</h1>
      <div class="p-d-flex p-flex-column">
        <div class="p-grid p-jc-between p-col-12">
          <div class="p-text-center" v-for="user in this.filtered" :key="user.name">
            <Card style="margin: 2em">
                  <template #title>{{user.name}}</template>
                  <template #content class="p-text-wrap" style="word-wrap: break-word;" }}> <p >{{user.description}}</p>
                    <div>
                      <i class="pi pi-star" style="margin-right: 0.5em"></i>{{user.stargazers_count}}
                    </div>
                    <div>
                      <div style="width: auto" id="tech" v-if="user.language">
                        <Avatar
                          :image="`https://img.icons8.com/color/48/000000/${user.language}.png`"
                          size="large"
                          shape="circle"
                          v-tooltip.bottom="`${user.language}`"
                        />
                    </div>
                    </div>
                    <div style="margin-top: 10px"><a :href="`${user.html_url}`" target="_blank">
                        <Avatar
                          image="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                          size="small"
                          shape="circle"
                          v-tooltip.bottom="'Open In Github'"
                        />
                      </a></div>
                  </template>
                  <template #footer>
                    <div v-for="topic in user.topics" :key="topic">
                        {{topic}}
                      </div>
                  
                  </template>
              </Card>
        </div>
      </div>
    </div>
    
    <div class="p-d-flex p-flex-column" id="experience">
      <div class="p-grid p-jc-between">
        <div class="p-text-left p-col-8">
          <h3>2021</h3>
          <h3 id="heading">
            <a href="https://shipyard.run/" target="_blank">Shipyard</a>
          </h3>
          <a href="https://shipyard.run/" target="_blank">Shipyard</a> is a
          command line tool for building modern cloud native development
          environments.
          <ul>
            <li>
              Added shipyard log command that allows the ability to tail
              shipyard resource logs, similar to docker-compose
            </li>
            <li>Added a few core debug fixes</li>
            <li>
              <a href="https://github.com/shipyard-run/shipyard/pull/134"
                target="_blank"
                >PR on Github</a
              >
            </li>
          </ul>
        </div>
        <div class="p-text-center p-col-4">
          <div style="width: auto" id="tech">
            <Avatar
              image="https://img.icons8.com/fluency/48/000000/docker.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Docker'"
            />
            <Avatar
              image="https://img.icons8.com/color/48/000000/golang.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Golang'"
            />
            <Avatar
              image="https://img.icons8.com/color/48/000000/kubernetes.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Kubernetes'"
            />
          </div>
        </div>
        <div class="p-text-left p-col-8">
          <h3>2020</h3>
          <h3 id="heading">RightToAsk</h3>
          A mobile app developed for
          <a href="https://thinkingcybersecurity.com/" target="_blank"
            >Vanessa Teague</a
          >
          as a part of a University project. The app is a part of a larger
          ecosystem. Visit the
          <a
            href="https://righttoaskorg.github.io/righttoask-docs/"
            target="_blank"
            >Website</a
          >
          <ul>
            <li>Contributed towards backend development & deployment</li>
            <li>
              <a
                href="https://github.com/RightToAskOrg/righttoask-docs"
                target="_blank"
                >Visit on Github</a
              >
            </li>
          </ul>
        </div>
        <div class="p-text-center p-col-4">
          <div style="width: auto" id="tech">
            <Avatar
              image="https://img.icons8.com/windows/100/26e07f/nodejs.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'NodeJS'"
            />

            <Avatar
              image="https://img.icons8.com/dusk/128/000000/docker.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Docker'"
            />

            <Avatar
              image="https://img.icons8.com/color/48/000000/nginx.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Nginx'"
            />

            <Avatar
              image="https://img.icons8.com/color/48/000000/golang.png"
              size="xlarge"
              shape="circle"
              v-tooltip.bottom="'Golang'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Work",
  data() {
    return {
      shipyardPr:
        "<a href='https://github.com/shipyard-run/shipyard/pull/134'>Visit PR</a>",
    };
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#experience {
  font-size: 18px;
  margin-left: 2%;
  margin-right: 2%;
}
#heading {
  color: #dd700a;
}
#tech {
  position: relative;
  margin-top: 50px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>