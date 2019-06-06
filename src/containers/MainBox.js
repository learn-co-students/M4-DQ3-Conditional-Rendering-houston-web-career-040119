import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state = {
      card: "profile"
    }
  }

  detailsToDisplay() {
    switch(this.state.card){
      case "profile":
        return <Profile />
      case "photo":
        return <Photos />
      case "cocktail":
        return <Cocktails />
      case "pokemon":
        return <Pokemon />
    }
  }

  changeCard = (e) => {
    this.setState({
      card: e.target.id
    })
  }

  render() {
    return (
      <div>
        <MenuBar changeCard={this.changeCard} card={this.state.card} />
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
