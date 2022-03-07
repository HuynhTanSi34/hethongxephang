import { REQ, SUCCESS, ERROR, ADD_TEST } from "./userTypes";
import db from "../../firebase.config";
export const FETCHREQ = () => {
  return {
    type: REQ,
  };
};
export const FETCHSUCCES = (lists: any) => {
  return {
    type: SUCCESS,
    payload: lists,
  };
};
export const FETCHERROR = (error: any) => {
  return {
    type: ERROR,
    payload: error,
  };
};
export const ADDTEST = (content: any) => {
  return {
    type: ADD_TEST,
    payload: content,
  };
};
export const fetchLists = () => {
  return (dispatch: any) => {
    dispatch(FETCHREQ);
    const response = db.collection("user");
    response
      .get()
      .then((response) => {
        const lists: any = [];
        response.docs.forEach((item) => {
          lists.push(item.data());
        });
        dispatch(FETCHSUCCES(lists));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(FETCHERROR(errorMessage));
      });
  };
};
