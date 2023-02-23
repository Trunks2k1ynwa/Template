const INCREMENT = "increment";
const INCREMENT_10 = "increment_10";
const DECREMENT = "decrement";
const initialState = {
  count: 10,
};
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});

// eslint-disable-next-line default-param-last
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCREMENT_10:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
export default counterReducer;
