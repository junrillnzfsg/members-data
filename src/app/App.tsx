import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.sass'
import MembersListPage from 'features/membersList/MembersListPage'
import MemberDetailsPage from 'features/memberDetails/MemberDetailsPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MembersListPage />
                </Route>
                <Route exact path="/member/:id">
                    <MemberDetailsPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
