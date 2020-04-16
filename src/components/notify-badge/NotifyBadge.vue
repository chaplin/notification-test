<template>
  <div>
    <div class="badge">{{ unreadNotificationCount }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "NotifyBadge",
  computed: {
    ...mapGetters(["unreadNotificationCount"])
  },
  created() {
    console.log("badge", this.count);
  }
};
</script>

<style lang="scss" scoped>
.badge {
  padding: 3px;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  background: red;
  color: white;
}
</style>
