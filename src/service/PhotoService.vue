<script>
import itp from "../assets/images/data/uni-ITProject.json";
import mp from "../assets/images/data/uni-MAProject.json";
import smp from "../assets/images/data/uni-SMProject.json";
export default class PhotoService {
  data() {
    return {
      itp,
      mp,
      smp,
    };
  }
  getImagesITP() {
    return itp;
  }
  getImagesMAP() {
    return mp;
  }
  getImagesSMP() {
    return smp;
  }
}
</script>
