import {SEARCH} from '../EndPoints/endpoints'
import {Header} from '../Config/config'

 export default async function getBreeds(name){
     
     try{  
        let data= await fetch(`${SEARCH}?q=${name}`, {
        headers: Header ,
        method: 'GET'});
        
          if(data.ok) {
              return  data.json();
        } else {
          return [];
        }
    }catch(error) {
        return [];
    };



}