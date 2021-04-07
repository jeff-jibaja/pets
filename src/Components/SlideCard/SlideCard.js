import { useEffect,useRef,useState } from "react";
import { Button } from "../../Moleculas/Button/Button";
 import { Card } from "../../Moleculas/Card/Card"; 
import { Loader } from "../../Moleculas/Loader/Loader";

import getBreeds  from "../../Services/getBreeds";

import './slidecard.scss'




export const SlideCard = ()=>{

    const textBusquedaRef = useRef();

    const [page,setPage] = useState(0)
    const [text,setText] = useState("")

    const [pest,setPets] = useState([])

    useEffect(()=>{        
        getBreeds(page).then(e => {
            setPets(e)
          }            
        );
    },[page])

  
    const handleNext = ()=>(
        setPage(page + 1)
    )

    const handlePrevious = ()=>
    {
        if(page > 0){
            setPage(page - 1)
        }
    }

     const handleSearch = ()=>{

        setText(textBusquedaRef.current)
        console.log(text);
    } 

       if(pest !== []){
        return (
            <div className="slidecard">
                <form className="form-search">
                    <input type="text" ref={textBusquedaRef}  className="input-search" />
                    <Button text="Buscar" clase="btn-search" onClick={handleSearch} />
                </form>

                <div className="botonera-panigation">
                    <button onClick={handlePrevious} className="btn-next">Anterior</button>
                    <span className="pages">pages: <span>{page}</span></span>
                    <button onClick={handleNext} className="btn-prev">Siguiente</button>
                </div>
               

                

               {

                   pest.length > 0 ?

                    pest.map(({id,bred_for,image,life_span,name,origin,temperament}) => <Card 
                                                    key={id} 
                                                    title={bred_for} 
                                                    width={image.width} 
                                                    height={image.height} 
                                                    url={image.url}
                                                    life={life_span}
                                                    name={name}
                                                    origin={origin}
                                                    temperament={temperament}
                                                    />
                        ) 
                    :  <Loader />
               }
            </div>
        )
       }
   


}