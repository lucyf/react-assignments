import {createContext} from 'react';
import * as React from 'react';
import { useState } from 'react';
import { dataBaseContex } from './dataBaseContext';

export const filtersContext = createContext();

export const FiltersProvider = ({children})=> {    
    const [searchValue, setSearchValue] = useState();
    // const [result, setResult] = useState([]);
    // const {itemList} = useContext(dataBaseContex);


    const catchInput = (e) => {
        let trimedSearch = e.trim()
       return setSearchValue(trimedSearch.toLowerCase())      
    }

    // const submitResult = () =>{
    //     if(itemList.categoryId === searchValue){
    //         console.log('funciona')
    //     }else{console.log('sigue intentando')}
    // }



   
    return <filtersContext.Provider value={{catchInput, searchValue}} >
        {children}
    </filtersContext.Provider>

}