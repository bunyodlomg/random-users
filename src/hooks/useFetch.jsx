import { useEffect, useState } from "react";

const useFetch = (url, refresh) => {
    const [data, setData] = useState(null)
  
    const [error, setError] = useState(null)
    const [isPanding, setIsPanding] = useState(true)
    const fetchApi = async (link) => {
        try {
            const req = await fetch(link)
            if (!req.ok) {
                throw new Error(req.statusText)
            }
            const data = await req.json()
            setData(data.results)
            setIsPanding(false)
        } catch (err) {
            setIsPanding(false)
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchApi(url, refresh)
    }, [url, refresh])

    // console.log(data);
    return { data, error, isPanding }
}
export { useFetch }