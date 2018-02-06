import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './screens/main';
import List from './screens/list';
import Tasky from './screens/toDoListing'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './store/store'
let { store, persistor } = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <div>
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" to={'/'}>First App</Link>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to={'/'}>Tasky</Link></li>
                                    <li><Link to={'/Add'}>Add Post</Link></li>
                                    <li><Link to={'/List'}>List</Link></li>
                                </ul>
                            </div>
                        </nav>

                        <Switch>
                            <Route exact path='/' component={Tasky} />
                            <Route exact path='/Add' component={Main} />
                            <Route exact path='/List' component={List} />
                        </Switch>
                    </div>
                </Router>
                </PersistGate>
            </Provider>
        );
    }
}




export default App;
