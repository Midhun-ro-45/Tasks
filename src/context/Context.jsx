import { createContext, useState, useEffect } from "react"

export const MyContex = createContext();


function Context({ children }) {

    const [filteredProducts, setFilteredProducts] = useState()
    const handleSubmit = (val) => {
        val && setFilteredProducts(val)
    }

    return (
        <MyContex.Provider value={{ handleSubmit, filteredProducts }}>
            {children}
        </MyContex.Provider>
    )
}

export default Context