import React from 'react';

import Carousel from './components/Carousel/';

class App extends React.Component{

    render(){

        const items = [
            {
                img:"https://courseit.com.ar/cursos/logo.png",
                title:"primer producto",
                price: 1000
            },
            {
                img:"https://courseit.com.ar/cursos/logo.png",
                title:"segundo producto",
                price:8
            },
            {
                img:"https://courseit.com.ar/cursos/logo.png",
                title:"tercer producto",
                price:30 
            },
        
            {
                img:"https://courseit.com.ar/cursos/logo.png",
                title:"cuarto producto",
                price:9
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
