import { createContext, useContext, useState } from "react";
import axios from "axios";
export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
    const [data, setData] = useState()
    const [originalData, setOriginalData] = useState();
    const [currentPage,setCurrentPage]=useState(1)
    //fetching product
    const fetchAllProduct = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            setData(res.data)
            setOriginalData(res.data);
        } catch (error) {
            console.log(error)
        }

    }

//pagination 
const itemsPerPage=8;
const indexOfLastItem=currentPage*itemsPerPage;
const indexOfFirstItem =indexOfLastItem-itemsPerPage;

const currentItems=data?.slice(indexOfFirstItem,indexOfLastItem) || [];











    const sortByPrice = (type = "high") => {
        if (!data) return;
        const sorted = [...data]
        if (type === "low") {
            sorted.sort((a, b) => a.price - b.price);
        }

        if (type === "high") {
            sorted.sort((a, b) => b.price - a.price);
        }

        setData(sorted);
    }

    const sortByRating = (type = "high") => {
        if (!data) return;
        const sorted = [...data]
        if (type === "high") {
            sorted.sort((a, b) => b.rating.rate - a.rating.rate)
        }
        if (type === "low") {
            sorted.sort((a, b) => a.rating.rate - b.rating.rate)
        }
        setData(sorted)
    }
    const getUniqueCategory = (data, property) => {
        if (!data) return [];
        let navAi = data?.map((item) => item[property])
        return [...new Set(navAi)]
    }
    const categoryOnlyData = getUniqueCategory(data, "category")
    const resetFilter = () => {
        if (!originalData) return;
        setData(originalData)
    }


    const filterByCategory = (selectedCategories) => {
        if (!originalData) return;
        if (selectedCategories.length == 0) {
            setData(originalData)
            return;
        }
        const filtered = originalData.filter((item) => selectedCategories.includes(item.category));

        setData(filtered)
    }


    const filterBySearch = (query) => {
        if (!originalData) return;
        if (query.trim() === "") {
            setData(originalData)
            return;
        }
        const filtered = originalData.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        )
        setData(filtered)
    }

    return <DataContext.Provider value={{ data, setData, fetchAllProduct, categoryOnlyData, sortByPrice, sortByRating, resetFilter, filterByCategory,filterBySearch ,currentItems,currentPage,setCurrentPage,itemsPerPage}}>
        {children}
    </DataContext.Provider>
}


export const getData = () => useContext(DataContext)