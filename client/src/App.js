import { React, useState } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";

import { IntlProvider } from "react-intl";
import { getMessages } from "./utils/dictionary";

import LanguageContext from "./context/LanguageContext";
import { defaultLanguage } from "./constants";

const App = () => {
  const [lang, setLang] = useState(defaultLanguage);
  return (
    <Router basename="/">
      <LanguageContext.Provider value={{ lang, setLang }}>
        <IntlProvider
          messages={getMessages(lang)}
          locale={lang}
          defaultLocal={defaultLanguage}
        >
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route path="/page/:pagenumber" component={HomeScreen} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
              exact
            />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRouter path="/profile" component={ProfileScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <PrivateRouter path="/shipping" component={ShippingScreen} />
            <PrivateRouter path="/payment" component={PaymentScreen} />
            <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
            <PrivateRouter path="/order/:id" component={OrderScreen} />
            <Route path="*" component={NotFound} />
          </Switch>
        </IntlProvider>
      </LanguageContext.Provider>
    </Router>
  );
};

export default App;
