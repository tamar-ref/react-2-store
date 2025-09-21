import { useEffect, useState } from "react"
import getProducts from "./Service"

export default function StoreItems() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getProducts());
    }, []);

    console.log(data);

    return (
        <>
        </>
    )
}