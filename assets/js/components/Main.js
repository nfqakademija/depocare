import React from 'react'
import Home from './homePage/Home'
import About from './About'
import UserRegister from './UserRegister'
import ProjectsView from './projects/viewProjects/RenderProjects'
import Login from './Login'
import Logout from './Logout'
import { Switch, Route } from 'react-router-dom'
import ProjectCreate from './projects/projectsCreate/ProjectCreate'
import Project from './projects/SingleProjectView'
import UserProjectsList from './projects/projectsCreate/MyProjectsList'
import ProjectsLanding from './projects/viewProjects/ProjectsLanding'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () =>(
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/apie' component={About}/>
            <Route path='/registruotis' component={UserRegister}/>
            <Route path='/projektai/:category' component={ProjectsView}/>
            <Route path='/projektai' component={ProjectsLanding}/>
            <Route exact path='/prisijungti' component={Login}/>
            <Route exact path='/atsijungti' component={Logout}/>
            <Route path='/prisijungti' component={Login}/>
            <Route path='/kurti/:project_id' component={ProjectCreate}/>
            <Route path='/projektas/:project_id' component={Project}/>
            <Route path='/mano_projektai' component={UserProjectsList}/>
            <Route component={Home}/>
        </Switch>
    </main>
);


export default Main
