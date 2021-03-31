import { Redirect, Route, Switch } from "react-router-dom";
import FormikAndYup from "./components/pages/FormikAndYap/FormikAndYup";
import MainPage from "./components/pages/MainPage/MainPage";
import ReactFormPage from "./components/pages/ReactFormPage/ReactFormPage";
import Layout from "./components/UI/Layout/Layout";

function App() {
  let routes = (
    <Switch>
      <Route exact path={"/"} component={MainPage} />
      <Route exact path={"/react_form"} component={ReactFormPage} />
      <Route exact path={"/formik"} component={FormikAndYup} />
      <Redirect to={""} />
    </Switch>
  );
  return <Layout>{routes}</Layout>;
}

export default App;