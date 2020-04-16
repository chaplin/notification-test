const initState = {
  notifications: []
};

const data = {
  notifications: []
};

const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
export const ActionType = {
  FETCH_NOTIFICATIONS: "FETCH_NOTIFICATIONS"
};

const actions = {
  [ActionType.FETCH_NOTIFICATIONS](ctx) {
    setTimeout(() => {
      ctx.commit(SET_NOTIFICATIONS, data.notifications);
    }, 3000);
  }
};

const getters = {
  allNotifications(state) {
    return state.notifications;
  },
  unreadNotifications(state) {
    return state.notifications.filter(item => {
      return !item.read_at;
    });
  },
  unreadCount(state) {
    return state.notifications.filter(item => {
      return !item.read_at;
    }).length;
  }
};
export default {
  namespaces: true,
  state: initState,
  actions,
  getters
};
