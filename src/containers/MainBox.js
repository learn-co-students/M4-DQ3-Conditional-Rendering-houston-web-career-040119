import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      beans: "default"
    }

    
  }

  nathan=(e)=>{

    this.setState({
      beans:e
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    let bigBeans
    if(this.state.beans=="beans"){
      bigBeans=<Pokemon/>
    }else if(this.state.beans=="beans2"){
      bigBeans=<Profile/>
    }else if(this.state.beans=="beans3"){
      bigBeans=<Photos/>
    }else if(this.state.beans=="beans1"){
      bigBeans=<Cocktails/>
    }
    

    return (
      <div>
        <MenuBar nathan={this.nathan}/>
        {bigBeans}       
      </div>
    )
  }

}

export default MainBox
