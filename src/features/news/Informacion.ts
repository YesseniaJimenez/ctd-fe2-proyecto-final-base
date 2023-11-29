import { obtenerCita } from "../quote/citaAPI"
import { obtenerNoticias } from "./fakeRest"

export const informacion=async()=>{
    try{
        const data=await obtenerNoticias().then((res)=>
        res.map((noticia)=>{
            const titulo=noticia.titulo.split(" ").map((str:string)=>{
                return str.charAt(0).toUpperCase()+ str.slice(1)
            }).join(" ");

            const now=new Date();
            const minTrascurridos= Math.floor(
                (now.getTime()- noticia.fecha.getTime())/60000
            );
            const dataNormalizada={
                id:noticia.id,
                titulo: noticia.titulo,
                descripcion: noticia.descripcion,
                fecha: `Hace ${minTrascurridos} minutos`,
                esPremium: noticia.esPremium,
                imagen: noticia.imagen,
                descripcionCorta: noticia.descripcion.substring(0,100)
            };
            return dataNormalizada;
            
        })
        );
        return data;
    }catch{
        throw new Error ("Eroor en noticias")
    }
}

 export default informacion;