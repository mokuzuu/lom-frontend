import { combineReducers, createStore } from "redux";
export enum AuthAction {
  SignIn = "SignIn",
  SignOut = "SignOut",
}
export const UPDATE_ROUTE_NAME = "UPDATE_ROUTE_NAME";
const authState = {
  isAuthed: false,
};
const initialState = {
  routeName: "",
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_ROUTE_NAME:
      return {
        ...state,
        routeName: action.name,
      };
    default:
      return state;
  }
};

const authReducer = (state = authState, action: { type: AuthAction }) => {
  switch (action.type) {
    case AuthAction.SignIn:
      return {
        ...state,
        isAuthed: true,
      };
    case AuthAction.SignOut:
      return {
        ...state,
        isAuthed: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default createStore(rootReducer);
