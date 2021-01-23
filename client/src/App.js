import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import Weight from './Pages/Weight'
import Feeding from './Pages/Feeding'

import Grid from '@material-ui/core/Grid'
import Navbar from './Components/Navbar'
import 'fontsource-roboto'
import logo from './logo.svg'

import PhotoGallery from './Pages/PhotoGallery'
import AddKitten from './Components/AddKitten'
import Greet from './Components/Greet.js'
import KittenList from './Components/KittenList'
import NewKittenForm from './Components/NewKittenForm'
import ModalButton from './Components/ModalButton'
import Title from './Components/Title'

import Login from './Pages/Login'
import Signup from './Pages/Signup'

export default function App () {
  return (
      <div className="App">
          <Router>

              <Switch>
                  <Route exact path="/">
                      <Greet></Greet>
                      <KittenList><AddKitten /></KittenList>
                      <ModalButton label="Enter New Kitten" state={false}>

                          <NewKittenForm /></ModalButton>
                  </Route>
                  <Route exact path={'/kitten/:kittenId'}>
                      <KittenPage />
                  </Route>
                  <Route exact path="/login">
                      <Login />
                  </Route>
                  <Route exact path="/signup">
                      <Signup />
                  </Route>
              </Switch>
          </Router>

      </div>
  )
};

function KittenPage () {
  const { path } = useRouteMatch()

  const { kittenId } = useParams()

  return <Router>
      <Grid item xs={3}>
          <img src={logo} className="App-logo" alt="logo" />
      </Grid>
      <Grid item xs={9}>
          <Title kittenId={kittenId} />
      </Grid>

      <Switch>
          <Route exact path={`${path}/weight`}>
              <Grid item xs={12}>
                  <Navbar id = {kittenId} currPage="1"/>
              </Grid>
              <Weight kittenId = {kittenId}/>
          </Route>
          <Route path={`${path}/feeding`}>
              <Grid item xs={12}>
                  <Navbar id = {kittenId} currPage="0"/>
              </Grid>
              <Feeding kittenId = {kittenId}/>
          </Route>
          <Route path={[path, `${path}/photo`]}>
              <Grid item xs={12}>
                  <Navbar id = {kittenId} currPage="2"/>
              </Grid>
              <PhotoGallery kittenId = {kittenId}/>
          </Route>
      </Switch>
  </Router>
}
