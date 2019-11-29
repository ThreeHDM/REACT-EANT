import React from 'react';



class Producto extends React.Component {

    
    constructor(){
        super();
        
        this.state = {
            isLoaded : false // no está cargado. No hay datos
        }
    }

    
    componentDidMount(){
        
        /*
        setTimeout(()=>{
            alert("Ya tenemos los datos")
            //para actualizar el state se usa un metodo setter 
            this.setState({ isLoaded : true })
        },10000)
        */ 
    
        //Petición AJAX que trae datos de API
        fetch("https://api.myjson.com/bins/1giaf3").then(rta =>{
    
            let datos = rta.json()

            //una vez obtenida la respuesta puedo usar un then aninado
            datos.then(productos => {
            
            /*
                this.setState({
                    nombre: productos[0].nombre,
                    stock : productos[0].stock,
                    precio : productos[0].precio,
                    disponible: productos[0].disponible
                })
                */

                productos[0].precio *= 69 
            
                //Destructuring
                //toma los valores del objeto que recibo. Construyo un objeto con las propiedades de otro objeto usando los ... 
                this.setState({ ...productos[0], isLoaded : true})
            })
            

            
        }) 
    }
/*
//El uso de este método está prohibido en nuevas versiones de react
    componentWillMount(){
        
    }
*/
    
    
    
    render(){ // se re-ejecuta cada vez que se ejecuta primero el setState
        if(!this.state.isLoaded){
            return <em>Loading...</em>;
        } else {
            return <cite>Tengo los datos de producto {this.state.nombre} y valgo ARS ${this.state.precio} </cite>;
        }
    }
}

export default Producto;