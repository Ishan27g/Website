<script>
import itp from "../assets/images/data/uni-ITProject.json";
import mp from "../assets/images/data/uni-MAProject.json";
export default class PhotoService {
  data() {
    return {
      itp,
      mp,
    };
  }
  getImagesITP() {
    return itp;
  }
  getImagesMAP() {
    return mp;
  }
}
</script>
