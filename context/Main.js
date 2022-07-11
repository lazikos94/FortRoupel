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