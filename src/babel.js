import { createApp } from "vue";
import demo from "@/index";
const app = createApp(demo);
app.mount("#app");

const name = "erkelost";
console.log(name);
const bar = () => {
  console.log("im bar");
};
console.log(bar);
bar();
export { name };
