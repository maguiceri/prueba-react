import React from 'react';

class Card extends React.Component{
    
    render(){
        return(
            <div>
                <img src={this.props.item.img}/>
                <p>Title: {this.props.item.title}</p>
                <p>Precio: ${this.props.item.price} </p>
            </div>
        )
    }
}

export default Card;