import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HomeComp from './components/pages/Home'
import AboutComp from './components/pages/About'
import ContactComp from './components/pages/Contact'
import NavbarComp from './components/layout/NavBar'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import AddUserPage from './components/pages/AddUserPage'
import EditedUser from './components/pages/EditedUser'


function App() {
  return (
    <Router>
      <div className="App">
        < NavbarComp />
          <Switch>
            <Route exact path="/" component={HomeComp} />
            {/* <Route exact path="/home" component={HomeComp} /> */}
            <Route exact path="/about" component={AboutComp} />
            <Route exact path="/contact" component={ContactComp} />
            <Route exact path="/add" component={AddUserPage} />
            {/* <Route exact path="/edit" component={EditedUser} /> */}
            <Route exact path="/edit/:id" component={EditedUser} />
          </Switch>
      </div>
    </Router>
  )
}

export default App
