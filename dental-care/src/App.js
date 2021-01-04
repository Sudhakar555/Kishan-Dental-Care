import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css'
import './Styles/index.css'
import HomePage from './Components/Homepage/HomePage.jsx'
export default class App extends React.Component {
render() {
return (
<div className="App" >
            <Router>
                <div>
                    
                    <Route    path="/" component={HomePage} />
                    
                </div>
            </Router>
</div>
       );
    }
}
