import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/hoc/Layout";
import MainPage from "./components/UI/MainPage/MainPage";
import InputTask from './components/tasks/inputTask/InputTask'
import UserListTask from "./components/tasks/UserListTask/UserListTask";
function App() {
  let routes = (
    <Switch>
      <Route exact path={"/"} component={MainPage} />
      <Route path={"/input_task"} component={InputTask} />
      <Route path={"/user_list"} component={UserListTask} />
      <Redirect to={""} />
    </Switch>
  );
  return <Layout>{routes}</Layout>;
}

export default App;
