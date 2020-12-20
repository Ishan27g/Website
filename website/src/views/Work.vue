<template>
    <div>
        <h2  class="p-text-left">Work Experience: Hughes Systique Corporation, Gurgaon, India (2016-2019)</h2>
        <div class="p-d-flex p-flex-column" id="experience">
            <div class="p-grid  p-jc-between">
                <div class="p-text-left p-col-8">
                    <h3>ISRO Satellite Voice Gateway</h3>
                        The project involved the development of a voice gateway unit for the Indian Space and Research Organisation's GSAT-6 satellite network that would allow terrestrial (telephone) calls over their satellite network.
                        <ul>
                            <li>Developed 2 out of 8 core modules involving satellite control transport and satellite resource management.</li>
                            <li>Involved in the systems integration and deployment of the system at ISRO Earth Station, New Delhi, India.</li>
                        </ul>
                </div>
                <div class="p-text-center p-col-3">
                    <Card style="width: 15rem; margin-bottom: 2em; border: 100px" id="tech" >
                        <template #title>
                            Tech Used
                        </template>
                        <template #content>
                            <Avatar image="https://img.icons8.com/color/96/000000/c-programming.png" size="large" shape="circle"/>
                            <Avatar image="https://img.icons8.com/color/96/000000/ubuntu.png" size="large" shape="circle"/>
                            <Avatar image="https://img.icons8.com/ios-filled/100/000000/git.png" size="large" shape="circle"/>
                        </template>
                    </Card>
                </div>
                <div class="p-text-left p-col-8">
                    <h3>Hotspot 2.0 Wifi Passpoint</h3>
            
                        The project involved the development of a voice gateway unit for the Indian Space and Research Organisation's GSAT-6 satellite network that would allow terrestrial (telephone) calls over their satellite network.
                        <ul>
                            <li>Migrated an existing licence validation server to a docker based micro service.</li>
                            <li>Developed a micro service to encrypt and redirect application logs.</li>
                        </ul>                </div>
                <div class="p-text-left p-col-8">
                    <h3>Passive monitor for OTT media traffic</h3>
                        The project involved the development of a system capable of monitoring an over-the-top media stream network at extremely high data rates by using the Data Plane Development Kit - DPDK.
                        <ul>
                            <li>Designed and implemented a custom packet filtering algorithm along with a user-based control-plane wrapper.</li>
                            <li>Development and execution of test suites.</li>
                        </ul>                        
                </div>
                <div class="p-text-left p-col-8">
                    <h3>High performance WIFI Access Point</h3>
                        The project involved the development of a high performance WIFI-Access-Point image to support the multi-channel radio architecture.
                        <ul>
                            <li>Testing of custom ‘OpenWRT’ images</li>
                            <li>Development of module to configure the access point through configuration files</li>
                            <li>Integration with a web interface to allow Restful configuration and monitoring of the Access Point</li>
                        </ul>                        
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
        this.$emit('notOnHome')
  }
}
</script>

<style >
    #experience {
        font-size: 20px;
    }
    #tech{
        position: relative;
        margin-top: 50px;
    }
</style>