import React from 'react';

/**
 * LIFECYCLE DEL COMPONENTE
 * -------------------------- 
 * 
 * 1-El constructor.
 * -----------------
 * 
 * Si no lo escribo, usa el constructor de su padre React.Component
 * Crear una sobrecarga es crear un método de idéntico nombre. 
 * Al contructor no puedo sobrecargarlo.
 * Si quiero ampliarlo puedo usar a los dos a la vez, para respetar el código original
 *  del constructor padre. Eso se hace ejecutándolo/invocándolo, con la palabra super()
 * 
 * 2- componentWillMount() ---> no se usa más. Va en el componentDidMount
 * -----------------------
 * Antes de que en la interface haya una nueva representación visual se ejecuta este metodo.
 * Suele usarse para operacines con datos asincrónicos.
 * 
 * Si no lo defino usa el del padre
 * 
 *
 * 3- componentDidMount() 
 * ----------------------
 * Aún no está visible en la interfaz pero ya esta en el VDOM. Sirve para operaciones
 * sincrónicas. Iteraciones (loops), callbacks, promesas.
 * Si no lo defino usa el del padre
 * 
 * 4- render()
 * -----------
 * 
 * Muestra en el Real DOM
 */

class Base extends React.Component {

    //1) Antes de nacer el componente
    constructor(){
        //Uso el método super() que ejecuta al constructor del superior
        super();

        //Defino el state del componente. Defino un objeto vacío. Todo cambio que ocurra en el state hace que se ejecute nuevamente el render()
        this.state = {}
    }

    //2) Al Montar (armarlo en el DOM) el componente en el VDom
    componentDidMount(){
        
    }

    
    //3) Mostrar el componente en el Real DOM
    render(){
        return <cite>Soy un componente base</cite>;
    }
}

export default Base;