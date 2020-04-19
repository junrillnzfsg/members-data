import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.sass'
import MembersListPage from 'features/membersList/MembersListPage'
import MemberDetailsPage from 'features/memberDetails/MemberDetailsPage'
import PostDataDetailsPage from 'features/postDataDetails/PostDataDetailsPage'

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
                <Route path="/member/:userId/post/:id">
                    <PostDataDetailsPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
