<template>
  <div class="card" id="Uni">
    <h2 id="subject">ZooMuteX : COMP90020</h2>
    <p>
      A p2p video conference webapp that uses the Suzuki Kasami’s Mutual
      Exclusion algorithm as a way to prevent two or more people from talking
      over one another.
      <a href="https://zoomutex.herokuapp.com/" target="_blank">Check it out</a
      >
    </p>
    <div class="p-grid p-jc-around">
      <div class="p-col-2">
        <a
          href="https://github.com/Ishan27g/zoomutex"
          target="_blank"
          class="p-text-bold"
          >Code repository</a
        >
      </div>
      <div class="p-col-10 p-text-right">
        <div style="width: auto" id="tech">
          <Avatar
            image="https://img.icons8.com/color/48/000000/typescript.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'Typescript'"
          />
        </div>
      </div>
    </div>
    <h2 id="subject">Wealth Distribution Model : SWEN90004</h2>
    <p>
      A Java replication & extension of the Wealth Distribution model from NetLogo to demonstrate Pareto's law.
    </p>
    <div class="p-grid p-jc-around">
      <div class="p-col-2">
        <a
          href="https://github.com/Ishan27g/Wealth_Distribution"
          target="_blank"
          class="p-text-bold"
          >Code repository</a
        >
      </div>
      <div class="p-col-10 p-text-right">
        <div style="width: auto" id="tech">
          <Avatar
            image="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'Java'"
          />
        </div>
      </div>
    </div>
    <h2 id="subject">E-portfolio : COMP30022</h2>
    <p>
      The E-portfolio allows students to create custom profiles to showcase
      their documents and achievements to potential employers.
    </p>
    <div class="p-grid p-jc-around">
      <div class="p-col-2">
        <a
          href="https://github.com/Ishan27g/LIMQA"
          target="_blank"
          class="p-text-bold"
          >Code repository</a
        >
      </div>
      <div class="p-col-2">
        <Galleria
          :value="imagesITP"
          :responsiveOptions="responsiveOptions"
          :numVisible="1"
          containerStyle="max-width: 80%"
          :circular="true"
          :fullScreen="true"
          :showItemNavigators="true"
          :showThumbnails="false"
          v-model:visible="displayITP"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              class="zoom"
              style="width: 90%"
              :alt="slotProps.item.alt"
            />
          </template>
          <template #thumbnail="slotProps">
            <img
              :src="slotProps.item.thumbnailImageSrc"
              :alt="slotProps.item.alt"
            />
            {{ slotProps.item.thumbnailImageSrc }}
          </template>
          <template #footer>
            <h1>Hover Mouse over Image</h1>
          </template>
        </Galleria>
        <Button
          class="p-button-outlined p-button-rounded p-button-raised"
          style="color: #ff9233"
          label="Images"
          icon="pi pi-images"
          @click="displayITP = true"
        />
      </div>
      <div class="p-col-8 p-text-right">
        <div style="width: auto" id="tech">
          <Avatar
            image="https://img.icons8.com/color/96/000000/mongodb.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'MongoDB'"
          />

          <Avatar
            image="https://img.icons8.com/windows/100/26e07f/nodejs.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'NodeJS'"
          />

          <Avatar
            image="https://img.icons8.com/clouds/100/000000/react.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'React'"
          />

          <Avatar
            image="https://img.icons8.com/dusk/128/000000/docker.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'Docker'"
          />

          <Avatar
            image="https://img.icons8.com/color/100/000000/git.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'Git'"
          />
        </div>
      </div>
    </div>

    <h2 id="subject">Masters Software Engineering Project : SWEN90014</h2>
    <p>
      A mobile application that acts as a platform for public concesus of
      political processes by involving MP's with citizens.
    </p>
    <div class="p-grid p-jc-around">
      <div class="p-col-2">
        <a
          href="https://github.com/vteague/prototypeRightToAsk"
          target="_blank"
          class="p-text-bold"
          >Code repository</a
        >
      </div>

      <div class="p-col-2">
        <Galleria
          :value="imagesMAP"
          :responsiveOptions="responsiveOptions"
          :numVisible="1"
          containerStyle="max-width: 70%"
          :circular="true"
          :fullScreen="true"
          :showItemNavigators="true"
          :showThumbnails="false"
          v-model:visible="displayMAP"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              style="width: 90%"
              :alt="slotProps.item.alt"
              class="zoom"
            />
          </template>
          <template #thumbnail="slotProps">
            <img
              :src="slotProps.item.thumbnailImageSrc"
              :alt="slotProps.item.alt"
            />
            {{ slotProps.item.thumbnailImageSrc }}
          </template>
          <template #footer>
            <h1>Hover Mouse over Image</h1>
          </template>
        </Galleria>

        <Button
          class="p-button-outlined p-button-rounded p-button-raised"
          style="color: #ff9233"
          label="Images"
          icon="pi pi-images"
          @click="displayMAP = true"
        />
      </div>
      <div class="p-col-8 p-text-right">
        <div style="width: auto" id="tech">
          <Avatar
            image="https://img.icons8.com/nolan/64/react-native.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'react-native'"
          />

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

          <Avatar
            image="https://img.icons8.com/color/100/000000/postgreesql.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'PostgreSQL'"
          />

          <Avatar
            image="https://img.icons8.com/color/48/000000/bitbucket.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'BitBucket'"
          />
        </div>
      </div>
    </div>
    <h2 id="subject">Distributed Dictionary Server : COMP90015</h2>
    <p>
      A simple server that can be queried by multiple concurrent clients to
      perform CRUD operations on a shared dictionary. Utilizes multiple types of
      thread pools.
    </p>
    <div class="p-grid p-jc-around">
      <div class="p-col-2">
        <a
          href="https://github.com/Ishan27g/Dictionary-ClientServer"
          target="_blank"
          class="p-text-bold"
          >Code repository</a
        >
      </div>
      <div class="p-col-10 p-text-right">
        <div style="width: auto" id="tech">
          <Avatar
            image="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'Java'"
          />
          <Avatar
            image="https://img.icons8.com/officel/40/000000/console.png"
            size="xlarge"
            shape="circle"
            v-tooltip.bottom="'Shell Script'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoService from "../service/PhotoService";

export default {
  name: "Uni",
  data() {
    return {
      imagesITP: null,
      imagesMAP: null,
      activeIndex: 0,
      visibleFull: false,
      displayCustom: false,
      responsiveOptions: [
        {
          breakpoint: "1500px",
          numVisible: 5,
        },
        {
          breakpoint: "1024px",
          numVisible: 3,
        },
        {
          breakpoint: "768px",
          numVisible: 2,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
      displayITP: false,
      displayMAP: false,
    };
  },
  galleriaService: null,
  created() {
    this.galleriaService = new PhotoService();
  },
  mounted() {
    this.imagesITP = this.galleriaService.getImagesITP().data;
    this.imagesMAP = this.galleriaService.getImagesMAP().data;
  },
  methods: {
    imageClick(index) {
      this.activeIndex = index;
      this.displayCustom = true;
    },
  },
};
</script>

<style >
#Uni {
  font-size: 20px;
  text-align: left;
  margin-left: 2%;
  margin-right: 2%;
}
#subject {
  margin-top: 5%;
}
.zoom {
  transition: transform 0.2s;
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.2);
}
</style>
