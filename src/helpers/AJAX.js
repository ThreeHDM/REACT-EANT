/*
Helpers
-------
Tiene una estructura similar a un componente

Puedo crear un helper con funciones o con clases

*/

class AJAX {


    //método de instancia - le agrego el flag async para usar async/await
    async getData(url){
        /*
        //Retornamos un objeto promise al usar fetch
        return fetch(url).then(rta => rta.json())
        */

        //creo dos variables en la misma linea
        let data, objects = null

        if(!localStorage.getItem("PRODUCTOS"))
        {
            //El flag await aguarda que se resuelva la funcion asyncronica
            data = await fetch(url)
            objects = await data.json()
            //ponemos el await pues el dato que recibe es async
            await localStorage.setItem("PRODUCTOS", JSON.stringify(objects))
        } else {
            data = localStorage.getItem("PRODUCTOS")
            objects = JSON.parse(data) 
        }

        return objects;

    }
}

//Para poder utilizarlo en los componentes lo exporto
export default AJAX