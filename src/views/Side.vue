<template>
  <div class="p-grid p-jc-around">
    <div class="p-col-12">
      <h2>Side Projects</h2>
    </div>
    <div class="p-col-12 p-lg-10">
      <div class="p-pb-5 p-text-center" id="tabs">
         <Button
          @click="active = 0"
          class="p-button-text p-button-rounded p-button-lg"
          style="color: #ff9233"
          label="Search & Upload Engine"
        />
        <Button
          @click="active = 1"
          class="p-button-text p-button-rounded p-button-lg"
          style="color: #ff9233"
          label="MeowMeowBeenz"
        />
        <Button
          @click="active = 2"
          class="p-button-text p-button-rounded p-button-lg"
          style="color: #ff9233"
          label="Finstagram"
        />
        <Button
          @click="active = 3"
          class="p-button-text p-button-rounded p-button-lg"
          style="color: #ff9233"
          label="Portfolio Website"
        />
        <Button
          @click="active = 4"
          class="p-button-text p-button-rounded p-button-lg"
          style="color: #ff9233"
          label="API Gateway"
        />
        
        <Button
          @click="active = 5"
          class="p-button-text p-button-rounded p-button-lg"
          style="color: #ff9233"
          label="Merkle Tree"
        />
        
      </div>
    </div>
    <div class="p-col-12 p-md-10 p-lg-10">
      <div id="Side" class="p-grid p-jc-center">
        <Accordion v-model:activeIndex="active">
          <AccordionTab header="Search & Upload Engine">
            <p>
              A distributed file server based on the RAFT algorithm. 
              Content of the uploaded files is mapped and stored in the form of an avl 
              tree distributed amongst the peers, assuring efficient lookup & updates. 
              The system is eventually consistent in the event of network partitions.
            </p>
            <a
              href="https://github.com/Ishan27g/file-index-lookup-engine"
              target="_blank"
              class="p-text-bold"
              >Code repository</a
            >
            <div class="p-grid p-jc-center">
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/color/48/000000/golang.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Golang'"
                />
              </div>
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/dusk/128/000000/docker.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Docker'"
                />
              </div>
            </div>
          </AccordionTab>
          <AccordionTab header="MeowMeowBeenz">
            <p>
              MeowMeowBeenz app from the tv show "Community", 
              season 5 episode - 
              <a href="https://community-sitcom.fandom.com/wiki/MeowMeowBeenz"
                target="_blank"
                >App Development and Condiments</a
              >.
              I wrote this out of interest, to learn Kotlin
            </p>
            <a
              href="https://github.com/Ishan27g/mmbeenz-App"
              target="_blank"
              class="p-text-bold"
              >Code repository</a
            >
            <div class="p-grid p-jc-center">
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/color/48/000000/kotlin.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Kotlin'"
                />
              </div>
            </div>
          </AccordionTab>
           <AccordionTab header="Finstagram">
            <p>
              A full stack minimal Instagram clone: 
              <ul>
                <li>
                  Frontend / User-interface written in Vue.js 
                </li>
                <li>
                  Backend / Server written in Golang 
                </li>
              </ul>
              The app allows registration, login as well as CRUD capabilities. 
              Quasar framework is used for the frontend components. 
              Fiber framework is used on the backend. 
              The server connects to a MongoDB atlas cloud database.
            </p>
            WIP : Deployment
            <ul>
              <li>Frontend (Vue.js) -> deploy to Netlify.</li>
              <li>Server (Golang) deploy to Heroku.</li>
            </ul>
            <div class="p-grid">
              <div class="p-col-3">
              <a
                href="https://github.com/Ishan27g/finstagram"
                target="_blank"
                class="p-text-bold"
                >Code repository</a
              >
            </div>
            <div class="p-col-3">
             <a
              href="https://ishan27g.github.io/finstagram/"
              target="_blank"
              class="p-text-bold"
              >Website</a
              >
              </div>
            </div>
            <div class="p-grid p-jc-center">
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/color/48/000000/golang.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Golang'"
                />
              </div>
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/color/48/000000/vue-js.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Vue.js'"
                />
              </div>
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/dusk/48/000000/css3.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Css'"
                />
              </div>
            </div>
          </AccordionTab>
          <AccordionTab header="Portfolio Website">
            <p>
              This website, written in Vue.js. PrimeVue library is used for
              various components. Website is deployed to Netlify.
            </p>
            <a
              href="https://github.com/Ishan27g/Website"
              target="_blank"
              class="p-text-bold"
              >Code repository</a
            >
            <div class="p-grid p-jc-center">
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/color/48/000000/vue-js.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Vue.js'"
                />
              </div>
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/dusk/48/000000/css3.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Css'"
                />
              </div>
            </div>
          </AccordionTab>
          <AccordionTab header="Api Gateway">
            <p>
              A trivial implementation of an api gateway. Developed to test upstream services and get around
              Nginx deployment during GitHub actions.
            </p>
            <a
              href="https://github.com/Ishan27g/ApiGw"
              target="_blank"
              class="p-text-bold"
              >Code repository</a
            >
            <div class="p-grid p-jc-center">
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/color/48/000000/golang.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Golang'"
                />
              </div>
            </div>
          </AccordionTab>
          <AccordionTab header="Merkle Tree">
            <p>
              A simple implementation of Merkle tree in Go.
            </p>
            <a
              href="https://github.com/Ishan27g/merkle"
              target="_blank"
              class="p-text-bold"
              >Code repository</a
            >
            <div class="p-grid p-jc-center">
              <div class="p-col-2">
                <Avatar
                  image="https://img.icons8.com/color/48/000000/golang.png"
                  size="xlarge"
                  shape="circle"
                  v-tooltip.bottom="'Golang'"
                />
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Side",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
#tabs {
  text-align: center;
  position: relative;
}
#Side {
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
