import React, { useEffect, useState } from "react";
import axios from 'axios'

const useFetch = (urls) => {
    const Base_Url = import.meta.env.VITE_APP_WEBSITE;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const refersh = async () => {
        setLoading(true);
        fetch(urls, {credentials: "include"})
            .then(data => data.json())
            .then(res => setData(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        setLoading(true);
        const request = urls.map(url => axios.get(url, { withCredentials: true }));
        let arr = [];
        axios.all(request).then((response) => {
            response.forEach((curr) => {
                arr.push(curr.data.user);
            })
        })
        .then(data => setData(arr))
        .then(data => setLoading(false));
    }, []);

    return { data, error, loading, refersh};
}

export default useFetch;