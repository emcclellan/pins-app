import React from 'react';
import './Inventory.css';
import axios from 'axios'

class Inventory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/members')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const { posts } = this.state
        return(
            <div>test
                {(typeof posts.members === 'undefined') ? <p>Loading...</p> : posts.members.map((member, i) => <p key={i}>{member}</p>) }
            </div>
        );
        
    }

}

export default Inventory