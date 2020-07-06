import React from 'react';
import Card from '../Card';

class InnerCarousel extends React.Component {
    render() {

        return(

            <div>
                <Card item={this.props.items[0]} />
                <Card item={this.props.items[1]} />
                <Card item={this.props.items[2]} />
                <Card item={this.props.items[3]} />
            </div>
        )
    }
}

export default InnerCarousel;