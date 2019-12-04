import React from 'react';




class Producto extends React.Component {
    
    constructor(){
        super();
        //En el estado agrego las propiedades del componente porque eso me permite controlar los cambios en el render. Si el estado cambia, el render también. Punto de conexión entre datos e interfaz
        this.state = {
            isLoaded : false // no está cargado. No hay datos
        }
    }

    
    componentDidMount(){
        //Aquí se setea todo lo que tiene que ver con el state
        
        this.setState({...this.props.datos, isLoaded : true})


        /*
        setTimeout(()=>{
            alert("Ya tenemos los datos")
            //para actualizar el state se usa un metodo setter 
            this.setState({ isLoaded : true })
        },10000)
        */ 
    
        //Petición AJAX que trae datos de API
        /*
        fetch("https://api.myjson.com/bins/1giaf3").then(rta =>{
    
            let datos = rta.json()

            //una vez obtenida la respuesta puedo usar un then aninado
            datos.then(productos => {
    

                productos[0].precio *= 69 
            
                //Destructuring
                //toma los valores del objeto que recibo. Construyo un objeto con las propiedades de otro objeto usando los ... 
                this.setState({ ...productos[0], isLoaded : true})
            })
            
            
        }) */
    }
/*
//El uso de este método está prohibido en nuevas versiones de react
    componentWillMount(){
    }
*/

/////////////////////////
    //a los métodos tipo evento se los suele llamar onSomething..
    onUpdatePrice(){
        //alert(`Soy ${this.state.nombre}`)
        let newPrice = prompt("Ingrese nuevo precio")

        this.setState({precio : newPrice})
    }
    
    
    
    render(){ // se re-ejecuta cada vez que se ejecuta primero el setState
        
        if(!this.state.isLoaded){
            return <em>Loading...</em>;
        } else {
            return <cite style={{display : "block", margin: 10}} onClick={this.onUpdatePrice.bind(this)}>Tengo los datos de producto {this.state.nombre} y valgo ARS ${this.state.precio} </cite>;
        }
    }
}

class Gondola extends React.Component {

    render() {   
        return (<div> {this.props.productos.map((e, i) => <Producto datos={e} key={i}/> )} </div>)
    }
}

export default Gondola;