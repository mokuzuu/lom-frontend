import React from "react";
import { Provider } from "react-redux";
import Routes from "routes";
import store, { AuthAction } from "store/index";
import axiosInit from "init/axios";
import history from "init/history";
interface IApp {}

const App: React.SFC<IApp> = () => {
  axiosInit();
  return (
    <Provider store={store}>
      <Routes customHistory={history} />
    </Provider>
  );
};
export default App;
