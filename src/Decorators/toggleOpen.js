import React, {Component} from 'react'

export default (OriginalComponent) => class ToggleOpenComponent extends Component{
    state = {
        isOpen: false
    };
    render(){
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (ev) =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}
