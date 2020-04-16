<template>
  <div>
    <div class="badge">{{ unreadCount }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ActionType } from '../notification-state';

export default {
  name: "NotifyBadge",
  computed: {
    ...mapGetters(["unreadCount"])
  },
  created() {
    console.log("badge", this.unreadCount);
    this.$store.dispatch(ActionType.FETCH_NOTIFICATIONS);
  },
  watch: {
    unreadCount () {
      console.log('changed');
    }
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
