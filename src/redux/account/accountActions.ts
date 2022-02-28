import { REQ, SUCCESS, ERROR } from "./accountTypes";
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
export const fetchLists = () => {
  return (dispatch: any) => {
    dispatch(FETCHREQ);
    const response = db.collection("account");
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
