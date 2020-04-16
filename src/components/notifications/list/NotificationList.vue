<template>
  <div>
    <p v-if="!notifications">no notifications...</p>
    <p>
      total {{ notifications.length }} notifications,
      {{ unreadCount }} unread.
    </p>
    <ul>
      <li :key="item.id" v-for="item in notifications">
        <input type="checkbox" :checked="!!(item.read_at)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NotificationList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      unreadCount: "unreadCount",
      notifications: "allNotifications",
    })
  }
};
</script>
