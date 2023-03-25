import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Car() {
    const til = useSelector((state) => {
        return state.ListComics.titleComic
    })
    useEffect(() => {
        console.log(til);
    },[])
    return (
        <div>
            <h1>
                carr
            </h1>
        </div>
    )
}   