
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
import Explore from './componenets/Explore/Explore';
import PrivateRoute from './componenets/Login/PrivateRoute/PrivateRoute';
import Dashboard from './componenets/Dashboard/Dashboard';
import AddAProduct from './componenets/Dashboard/Admin/AddAProduct/AddAProduct';
import Purchase from './componenets/Purchase/Purchase';

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
            <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/addAProduct">
            <AddAProduct></AddAProduct>
            </PrivateRoute>
            {/* <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addPlace">
              <AddPlace></AddPlace>
            </PrivateRoute> */}
            {/* <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route> */}
            <Route path="/explore">
             <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute exact path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
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
