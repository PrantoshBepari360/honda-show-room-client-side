import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Explores from "./pages/Explore/Explores/Explores";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import PrivetRoute from "./pages/Login/PrivetRoute/PrivetRoute";
import PageNotFound from "./pages/Shared/PageNotFound/PageNotFound";
import BookNow from "./pages/Explore/BookNow/BookNow";
import Products from "./pages/Home/Products/Products";
import ReviewDetails from "./pages/Home/ReviewDetails/ReviewDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/product">
              <Products></Products>
            </Route>
            <Route path="/details/:id">
              <ReviewDetails></ReviewDetails>
            </Route>
            <Route path="/explore">
              <Explores></Explores>
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute path="/booking/:Id">
              <BookNow></BookNow>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
