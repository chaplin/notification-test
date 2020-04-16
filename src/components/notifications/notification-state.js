const initState = {
  notifications: []
};

const data = {
  notifications: [
    {
      id: 1,
      title: 'notify 1',
      type: 2,
      read_at: '2020/03/10 10:20:20',
      create_at: '2020/03/10 10:20:20'
    },

  ]
};

const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";

export const ActionType = {
  FETCH_NOTIFICATIONS: "FETCH_NOTIFICATIONS"
};

const mutations = {
  [SET_NOTIFICATIONS] (state, data) {
    Object.assign(state, { notifications: data});
  }
}
const actions = {
  [ActionType.FETCH_NOTIFICATIONS](ctx) {
    setTimeout(() => {
      ctx.commit(SET_NOTIFICATIONS, data.notifications);
      console.log('notification data fetched');
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
  getters,
  mutations
};
