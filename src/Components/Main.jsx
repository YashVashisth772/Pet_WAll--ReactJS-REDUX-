import React, {Component} from 'react'
import PhotoWall from './PhotoWall.jsx'
import AddPhoto from './AddPhoto.jsx'
import {Route, Link} from 'react-router-dom'
import Single from './Single.jsx'

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        return ( 
        
        <div>
            <h1> 
                <Link to="/"> Pet-Wall </Link>    
             </h1>
            <Route exact path = "/" render={() => (
                 <div>
                      <PhotoWall {...this.props} />   
                 </div>

            )}/> 

            <Route path= "/AddPhoto" render = {({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )}/>

            <Route path="/single/:id" render = {(params) => (
                <Single  {...this.props} {...params}/> 
            )}/>
         </div>
        )
    }

}


export default Main