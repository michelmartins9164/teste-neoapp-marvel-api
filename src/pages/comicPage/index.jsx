import React from 'react'
import {useParams} from 'react-router-dom'
export default function ComicPage() {
    const {id} = useParams();
    console.log(id)
  return (
    <div>ComicPage</div>
  )
}
