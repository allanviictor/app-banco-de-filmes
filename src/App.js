import React from 'react';
import MainIndex from './pages/main-index/index'
import PageInterna from './pages/interna-filme/interna'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function App() {
	return (
		<div className="App">
			{/* <MainIndex /> */}
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainIndex}/>
                    <Route exact path="/filme/:filmeName" component={PageInterna}/>
                </Switch>
            </BrowserRouter>
		</div>
	);
}

export default App;
