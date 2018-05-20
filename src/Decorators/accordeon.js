import React from 'react'


export default Component => class Accordeon extends React.Component{
    state = {
        openItemId: null
    }

    render(){
        return(
            <Component {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId}/>
        )
    }

    toggleOpenItem = openItemId => ev =>{
        this.setState({
            openItemId: openItemId === this.setState.openItemId ? null : openItemId
        })
    }
}