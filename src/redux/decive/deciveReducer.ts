import { REQ, SUCCESS, ERROR } from "./deciveTypes";
const initState = {
  loading: true,
  error: "",
  lists: [],
};
const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case REQ:
      return {
        ...state,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        lists: action.payload,
      };
    case ERROR:
      return {
        ...state,
        lists: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
