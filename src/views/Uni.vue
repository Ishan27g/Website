<template>
  <div class="card" id="Uni">
    <h2 id="subject">E-portfolio : IT Project</h2>
    <p>
      The E-portfolio allows students to create custom profiles to showcase
      their documents and achievements to potential employers.
    </p>
    <div class="p-grid p-jc-left">
      <div class="p-col-2">
        <a href="https://github.com/Ishan27g/LIMQA" target="_blank"
          >Code repository</a
        >
      </div>
      <div class="p-col-2">
        <Button
          class="p-button-outlined p-button-raised"
          @click="visibleFull = true"
          >View Images</Button
        >
      
      </div>
    </div>
    <div class="p-grid p-jc-center">
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/96/000000/mongodb.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'MongoDB'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/96/000000/nodejs.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'NodeJS'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/clouds/100/000000/react.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'React'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/dusk/128/000000/docker.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Docker'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/ios-filled/100/000000/git.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Git'"
        />
      </div>
    </div>

    <h2 id="subject">Masters Software Engineering Project</h2>
    <p>
      A mobile application that acts as a platform for public concesus of
      political processes by involving MP's with citizens.
    </p>
    <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="1" containerStyle="max-width: 850px"
          :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayBasic">
          <template #item="slotProps">
              <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"/>
          </template>
          <template #thumbnail="slotProps">
              <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt"/>
              {{slotProps.item.thumbnailImageSrc}}
          </template>
      </Galleria>
      <Button label="Show Images" icon="pi pi-external-link" @click="displayBasic = true" />    
    <div class="p-grid p-jc-center">
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/nolan/64/react-native.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'react-native'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/96/000000/nodejs.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'NodeJS'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/dusk/128/000000/docker.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Docker'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/48/000000/nginx.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Nginx'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/48/000000/golang.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Golang'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/ios-filled/50/000000/postgreesql.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'PostgreSQL'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/48/000000/bitbucket.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'BitBucket'"
        />
      </div>
    </div>

    <h2 id="subject">WebCrawler : COMP30023</h2>
    <p>A web crawler written according to custom specifications, in a hurry.</p>
    <a href="https://github.com/Ishan27g/WebCrawler-in-C" target="_blank"
      >Code repository</a
    >
    <div class="p-grid p-jc-center">
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/96/000000/c-programming.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'C Programming'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/48/000000/gitlab.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Gitlab'"
        />
      </div>
    </div>

    <h2 id="subject">Distributed Dictionary Server : COMP90015</h2>
    <p>
      A simple server that can be queried by multiple concurrent clients to
      perform CRUD operations on a shared dictionary. Utilizes multiple types of
      thread pools.
    </p>
    <a
      href="https://github.com/Ishan27g/Dictionary-ClientServer"
      target="_blank"
      >Code repository</a
    >

    <div class="p-grid p-jc-center">
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Java'"
        />
      </div>
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/officel/40/000000/console.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Shell Script'"
        />
      </div>
    </div>

    <h2 id="subject">Beauty saloon eCommerce website : SPM</h2>
    <p>
      A website that allows customers to book appointments, services and make
      payments for various services offered by the saloon
    </p>
    <Button
      class="p-button-outlined p-button-raised"
      @click="visibleFull = true"
      >View Images</Button
    >

    <div class="p-grid p-jc-center">
      <div class="p-col-1">
        <Avatar
          image="https://img.icons8.com/windows/32/000000/wix.png"
          size="xlarge"
          shape="circle"
          v-tooltip.bottom="'Wix'"
        />
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
      images: null,
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
      displayBasic: false,
    };
  },
  galleriaService: null,
  created() {
    this.galleriaService = new PhotoService();
  },
  mounted() {
    this.images = this.galleriaService.getImagesITP().data;
    console.log(this.images);
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
  color: #000000;
}
#subject {
  margin-top: 5%;
}
</style>
