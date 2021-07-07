import React from 'react'

class MenuBar extends React.Component{

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  handleClick=(e)=>{
    this.props.nathan(e.target.id)
  }
render(){
  return (
    <div className="ui four item menu">
      <a className="item active" id="beans" onClick={(e)=>this.handleClick(e)}>
        <i className="user large icon" id="beans2" />
      </a>

      <a className="item" id="beans1" onClick={(e)=>this.handleClick(e)}>
        <i className="photo large icon" id="beans" />
      </a>

      <a className="item" id="beans2" onClick={(e)=>this.handleClick(e)}>
        <i className="cocktail large icon" id="beans3" />
      </a>

      <a className="item" id="beans3" onClick={(e)=>this.handleClick(e)}> 
        <i className=" themeisle large icon" id="beans1"/>
      </a>
    </div>
  )
  }
}

export default MenuBar
