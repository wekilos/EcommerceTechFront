import { React, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import PageLoading from "../components/PageLoading";

import {
  Basket,
  Category,
  Favorites,
  Home,
  Order,
  OrderDone,
  Orders,
  Product,
  Profile,
  OrdersDetails,
  About,
  Contact,
  Delivery,
  Question,
  Privacy,
  Sequrity,
  OrderInfo,
  Brand,
  Search,
  Compare,
  ComparePro,
  CompareAll,
} from "../pages/index";

import ScrollIntoView from "./ScrollIntoView";

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const App = () => {
  return (
    <BrowserRouter>
      <ScrollIntoView>
        <Suspense fallback={<PageLoading />}>
          <Switch>
            <PublicRoute restricted={true} component={Home} path="/" exact />
            <PublicRoute
              restricted={true}
              component={Home}
              path="/home"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Home}
              path="/login"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Home}
              path="/sign"
              exact
            />

            <PublicRoute
              restricted={true}
              component={Product}
              path="/product/:id"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Category}
              path="/category/:id"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Brand}
              path="/brand/:id"
              exact
            />

            <PublicRoute
              restricted={true}
              component={Search}
              path="/search/:id/:search"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Basket}
              path="/basket"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Order}
              path="/order"
              exact
            />
            <PublicRoute
              restricted={true}
              component={OrderDone}
              path="/orderdone/:code"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={Favorites}
              path="/favorites"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={Profile}
              path="/profile"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={Orders}
              path="/orders"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={OrdersDetails}
              path="/orders/:id"
              exact
            />
            <PublicRoute
              restricted={true}
              component={About}
              path="/about"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Delivery}
              path="/delivery"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Privacy}
              path="/privacy"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Sequrity}
              path="/sequrity"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={OrderInfo}
              path="/orderinfo"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Contact}
              path="/contact"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Question}
              path="/question"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Compare}
              path="/compare"
              exact
            />
            <PublicRoute
              restricted={true}
              component={ComparePro}
              path="/compare/:pro1/:pro2/:pro3"
              exact
            />
            <PublicRoute
              restricted={true}
              component={CompareAll}
              path="/compareAll/:pro1/:pro2/:pro3"
              exact
            />
            {/* Global */}
            <PublicRoute component={Home} path="*" />
            {/* <Route path="*" component={Home} /> */}
          </Switch>
        </Suspense>
      </ScrollIntoView>
    </BrowserRouter>
  );
};

export default App;
