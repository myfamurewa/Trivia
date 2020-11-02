import React from 'react'
import './App.css';
import {Route, Switch} from "react-router-dom"
import Selection from './components/Selection';
import Quiz from './components/Quiz'
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Selection}/>
        <Route path="/quiz" component={Quiz}/>
      </Switch>
      
    </div>
  )
}
