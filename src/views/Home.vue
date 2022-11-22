<template>
  <div class="middle">
    <Card>
      <template #header>
        <!-- <img alt="" src="@/assets/logo.png" /> -->
        <!-- <Image src="./img/logo.png" alt="" width="100" /> -->
      </template>
      <template #title>MVVP</template>
      <template #content>
        <InputText type="text" v-model="username" placeholder="username" />

        <Password v-model="password" :feedback="false" placeholder="password" />
      </template>
      <template #footer>
        <Button icon="pi pi-sign-in" label="Login" />
        <Button
          icon="pi pi-times"
          label="Cancel"
          class="p-button-secondary"
          style="margin-left: 0.5em"
        />
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
});
</script>
<style>
.middle {
  height: 200px;
  width: 400px;
  background: rgb(12, 184, 89);

  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
}
</style>
