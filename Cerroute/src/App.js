import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
function App() {
  return (
    <>
      <Router>
          <Route exact path="/">
              <Header />
              <Home />
              <Footer />
          </Route>
          <Route exact path='/login' component={Login} />
          <Route  path='/register' component={Register} />
      </Router>
    </>
  )
}

export default App
