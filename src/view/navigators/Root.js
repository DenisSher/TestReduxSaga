import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Search from '../screens/Search'

const Root = () =>
  <Switch>
    <Route path ="/" component={Search}/>
    {/*<Route path ="/:cityId" component={DetailedSearch}/>*/}
    {/*<Route path ="/favourites" component={Favourites}/>*/}
  </Switch>

export default Root