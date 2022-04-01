<template>
  <div class="p-grid p-jc-around">
    <div class="p-col-12">
      <h2>Side Projects</h2>
    </div>
     <DataTable :value="this.repositories" dataKey="updated_at" class="p-datatable-sm" 
              responsiveLayout="scroll" scrollable scrollHeight="500px">
                <Column field="name" header="Name" :sortable="true">
                <template #body="slotProps">
                     <h4 id="heading">{{slotProps.data.name}}</h4>
                  </template>
                </Column>
                <Column field="description" header="Description"></Column>
                <Column field="updated_at" header="Updated" :sortable="true"></Column>
                <Column class="p-grid p-jc-center" field="language" header="Languages" :sortable="true">
                  <template #body="slotProps">
                    <div style="width: auto"  class="p-grid p-jc-left" v-if="slotProps.data.language">
                        <Avatar
                          :image="`https://img.icons8.com/color/48/000000/${slotProps.data.language}.png`"
                          size="small"
                          shape="circle"
                          v-tooltip.bottom="`${slotProps.data.language}`"
                        />
                    </div>
                  </template>
                </Column>
                <Column field="url" header="Repository">
                <template #body="slotProps">
                   <div style="margin-top: 10px"><a :href="`${slotProps.data.html_url}`" target="_blank">
                        <Avatar
                          image="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                          size="small"
                          shape="circle"
                          v-tooltip.bottom="'Open In Github'"
                        />
                      </a></div>
                </template>
                </Column>
          </DataTable>
  </div>
</template>

<script>

import { ref, onMounted } from "vue";
import dayjs from 'dayjs';
import axios from 'axios'

export default {
  name: "Side",
  data() {
    return {
      active: 0,
    };
  },
  setup(){
      var filters = ['go-learn', 'go-utils', 'gobyexample', 'ishan27g', 'micro',
       'registry', 'services', 'utils', 'shipyard-aws', 'shipyard', 'zinc']

      let gitInfo = ref([""]);
      let repositories = ref([]);

      onMounted(async () => {
         await axios
          .get('https://api.github.com/users/Ishan27g/repos')
          .then(response => {
            gitInfo.value = response.data
            gitInfo.value.forEach((value) => {
              if (!filters.find((v) => v==value.name) ){
                if (value.language == 'Go'){
                  value.language = 'golang'
                }
                if (value.language == 'Java'){
                  value.language = 'java'
                }
                if (value.language == 'Kotlin'){
                  value.language = 'kotlin'
                }
                if (value.language == 'Vue'){
                  value.language = 'vue-js'
                }
                if (value.language == 'JavaScript'){
                  value.language = 'javascript'
                }
                if (value.language == 'TypeScript'){
                  value.language = 'typescript'
                }
                if (value.language == 'C'){
                  value.language = 'c'
                }
                if (value.name == 'Wealth_Distribution'){
                  value.language = 'java'
                }
                value.updated_at = dayjs(value.pushed_at).format('YYYY MMMM D');
                repositories.value.push(value)
              }
            })
            // sort by last push
            repositories.value = repositories.value.sort(function(x, y) {
                    if (dayjs(x.pushed_at).isBefore(dayjs(y.updated_at))) {
                      return -1;
                    }
                    if (dayjs(y.pushed_at).isBefore(dayjs(x.updated_at))) {
                      return 1;
                    }
                    return 0;
            }).reverse()
          })
      });
      return{
        repositories,
      }
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
