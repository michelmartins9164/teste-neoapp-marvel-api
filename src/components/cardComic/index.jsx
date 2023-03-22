import React from 'react';
import { Link } from 'react-router-dom';

import { Article } from './styles';

export default function CardComic(props) {
    let unknown = false;
    if (props.image === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
        unknown = true;
    }
    return (
        <Article key={props.id} className={props.id}>
            <div className='containerImageComic'>

                <img src={`${props.image}.jpg`} alt={props.alt} className={unknown ? 'coverUnknown' : 'cover-comic'} />
            </div>
            <div className='containerTitleComic'>
                <h1>{props.title}</h1>
            </div>

            <Link to={`/${props.id}`}>Ir para</Link>
        </Article>
    )
}
