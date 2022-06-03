import { createContext, useContext, useEffect, useState } from "react";
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {dictionaryList} from '../configs/language/language';

const mainContext = createContext();

export const ContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [language,setLanguage] = useState({
        userLanguage: 'gr',
        dictionary: dictionaryList['gr']
    })
    const [theme,setTheme] = useState()

    // const readStorage = async ()=>{
    //   try {
    //     const storage = await AsyncStorage.getItem('@language')
    //     console.log("storage",storage)
    //     if(storage){
    //       console.log('HERE')
    //       setLanguage({
    //         userLanguage:storage,
    //         dictionary:dictionaryList[storage]
    //       })
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // useEffect(()=>{
    //   readStorage();
    //   console.log(language)
    //   return;
    // },[])

    return (
      <mainContext.Provider
        value={{
         loading,
         language,
         theme,
         setLanguage,
         setLoading
        }}
      >
        {children}
      </mainContext.Provider>
    );
};
  
export default function useMain() {
    const main = useContext(mainContext);
    return main;
}