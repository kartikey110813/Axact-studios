import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBanner from "./Admin/AddBanner";
import AddFlashSaleCard from "./Admin/AddFlashSaleCard";
import AddProduct from "./Admin/AddProduct";
import Admin from "./Admin/Admin";
import App from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/addbanner" exact component={AddBanner} />
        <Route path="/addproduct" exact component={AddProduct} />
        <Route path="/addflashsalecard" exact component={AddFlashSaleCard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
