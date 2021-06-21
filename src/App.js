import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './hoc/Layout/Layout.js'
import { Route, Switch } from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth.js'
import QuizCreator from './containers/QuizCreator/QuizCreator'

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}

export default App
