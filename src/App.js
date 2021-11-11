
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './componenets/Home/Home/Home';
import NotFound from './componenets/NotFound/NotFound';
import Footer from './componenets/Shared/Footer/Footer';
import Header from './componenets/Shared/Header/Header';
import Login from './componenets/Login/Login/Login';
import Register from './componenets/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addPlace">
              <AddPlace></AddPlace>
            </PrivateRoute> */}
            {/* <Route path="/whyUs">
              <WhyUs></WhyUs>
            </Route> */}
            {/* <Route path="/features">
             <Features></Features>
            </Route> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            {/* <PrivateRoute exact path="/booking/:placeId">
              <Booking></Booking>
            </PrivateRoute> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
