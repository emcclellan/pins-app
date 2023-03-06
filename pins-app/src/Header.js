import React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: props.title};
    }

    render(){
        const title = this.state.title;
        
        return (<h1 className="Header">{title}</h1>);
    }    

}

export default Header