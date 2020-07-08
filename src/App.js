import React from 'react';

import Carousel from './components/Carousel/';

class App extends React.Component{

    render(){

        const items = [
            {
                img:"https://courseit.com.ar/cursos/logo.png",
                title:"primer producto",
                price: 100
            },
            {
                img:"https://courseit.com.ar/cursos",
                title: "segundo producto",
                price:65
            },
            {
                img:"https://courseit.com.ar/cursos",
                title:"tercer producto",
                price:30
            },
            {
                img:"https://courseit.com.ar/cursos",
                title:"cuarto producto",
                price:23
            }
        ]

 
        return(
            <div>
            <Carousel title="carusel 1" items={items} />
            
            
            </div>
        )
    }
}

export default App;
