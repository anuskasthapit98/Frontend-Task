import React from 'react'
import { BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import Form from './Components/Form'
import About from './Components/About'
import Policy from './Components/Policy'
import Menu from './Components/Menu'
import List from './Components/List'
import './App.css'


export default function App() {
	return (
    <div>
          <Router>
            <Menu />
            <Switch>
            <Route path ='/about' exact component ={About}>
                <About/>
              </Route>
              <Route path ='/form' exact component={Form}>
                <Form/>
              </Route>
              <Route path ='/policy' exact component={Policy}>
                <Policy/>
              </Route>
              <Route path ='/list' exact component={List}>
               
              </Route>
            </Switch>


</Router>
    </div>
  
	);
}
