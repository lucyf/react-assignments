import {createContext, useEffect, useState} from 'react';
import { getFirestore } from '../firebase';
import * as React from 'react';

export const dataBaseContex = createContext();

export const DataBaseProvider = ({children})=> {
    const [itemList, setItemList] = useState([])

    React.useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection("ItemCollection")

        itemCollection.get().then((value)=>{
            let array = value.docs.map(e => {
            return {...e.data(), id:e.id}})
            return setItemList(array)
         })
         
    },[]);
   
    return <dataBaseContex.Provider value={{itemList}}>
        {children}
    </dataBaseContex.Provider>

}