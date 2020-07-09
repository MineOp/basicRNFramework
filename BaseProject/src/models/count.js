import {Palette} from '../api/themes';
import AsyncStorage from '@react-native-community/async-storage';
const count = {
  stateCount: 0, // initial state
  reducers: {
    update(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload;
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
    changeTheme(payload, rootState) {
      AsyncStorage.setItem('theme_key', payload.theme, (err) => {
        console.log(err);
        if (!err) {
          payload.callback && payload.callback();
        }
      });
    },
  }),
};
export default count;
