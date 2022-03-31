<script>
//import axios from 'axios'

export class repoInfo {
  name = ''
  url = ''
  description = ''
  created_at = ''
  updated_at = ''
  stargazers_count = 0
  watchers_count = 0
  topics = []
}
import { onMounted } from "vue";
import gt from "../assets/images/data/github-test.json";

export default class GithubService {
  constructor(){}
  async get() {
    //  await axios
    //   .get('https://api.github.com/users/Ishan27g/repos')
    //   .then(response => {this.r = response.data})
    this.r = gt
  }
  async setup() {
    let r = repoInfo();
    onMounted(async () => {
      await this.get()
    });
    return {
      r,
    }
  }
}
</script>
