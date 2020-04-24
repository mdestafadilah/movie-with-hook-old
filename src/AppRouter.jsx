import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Template from "./components/Pages/Template";
import Home from "./components/Pages/Home";
import Search from "./components/Pages/Search";
import ViewMovie from "./components/Pages/ViewMovie";
import Error404 from "./components/Pages/Error404";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <FineRoute path="/" component={Home} exact />
          <FineRoute path="/search" component={Search} exact />
          <FineRoute path="/movie/:id" component={ViewMovie} exact />
          <FineRoute path="*" component={Error404} />
        </Switch>
      </Template>
    </BrowserRouter>
  );
};

const FineRoute = ({ component: Component, ...props }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <Route
      {...props}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};
export default AppRouter;
