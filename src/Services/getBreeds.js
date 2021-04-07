import {LIST} from '../EndPoints/endpoints'
import {Header} from '../Config/config'

 export default async function getBreeds(page = 0){
     
     try{  
        let data= await fetch(`${LIST}?attach_breed=3&limit=3&page=${page}`, {
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