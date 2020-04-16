<template>
  <div id="app">
    <NotifyBadge/>
    <hr>
    <NotificationList/>
  </div>
</template>

<script>
import {
  NotifyBadge,
  NotificationList
} from "./components/notifications";

export default {
  name: "App",
  components: {
    NotifyBadge,
    NotificationList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 1rem;
}
.pull-right {
  float: right;
}
</style>
