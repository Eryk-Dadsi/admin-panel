import MainLayout from "./components/layout/MainLayout/MainLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage/HomePage";
import Login from "./components/views/Login/Login";
import Tables from "./components/views/Tables/Tables";
import Booking from "./components/views/Booking/Booking";
import Event from "./components/views/Event/Event";
import Ordering from "./components/views/Ordering/Ordering";
import NewOrder from "./components/views/NewOrder/NewOrderContainer";
import Order from "./components/views/Order/Order";
import Kitchen from "./components/views/Kitchen/Kitchen";
import PageNav from "./components/layout/PageNav";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <PageNav />
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={Event} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering/`} component={Ordering} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`} component={NewOrder} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order} />
            <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
