import { useEffect,useState } from "react";
 import { Card } from "../../Moleculas/Card/Card"; 

import getBreeds  from "../../Services/getBreeds";

import './slidecard.scss'




export const SlideCard = ()=>{

    const [page,setPage] = useState(0)
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



       if(pest !== []){
        return (
            <div className="slidecard">
                <div className="botonera-panigation">
                    <button onClick={handlePrevious} className="btn-next">Anterior</button>
                    <span className="pages">pages: <span>{page}</span></span>
                    <button onClick={handleNext} className="btn-prev">Siguiente</button>
                </div>
               {
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
               }
            </div>
        )
       }
   


}