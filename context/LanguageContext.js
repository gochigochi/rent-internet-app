import { useState, useContext, createContext } from 'react'

const LanguageContext = createContext()
export const GetLanguageContext = useContext(LanguageContext)

const LanguageCtx = ({ children }) => {

    const [ language, setLaguage ] = useState({})


    return (
        <LanguageCtx.Provider>
            {children}
        </LanguageCtx.Provider>
  )
}

export default LanguageCtx