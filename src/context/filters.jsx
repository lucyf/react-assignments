import {createContext} from 'react';
import * as React from 'react';
import { useState } from 'react';
import { dataBaseContex } from './dataBaseContext';
import { useContext } from 'react';

export const filtersContext = createContext();

export const FiltersProvider = ({children})=> {    
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState([]);
    const {itemList} = useContext(dataBaseContex);


    const catchInput = (e) => {
        let trimedSearch = e.trim()
       setSearchValue(trimedSearch.toLowerCase());    
    }


   
    return <filtersContext.Provider value={{catchInput, searchValue}} >
        {children}
    </filtersContext.Provider>

}