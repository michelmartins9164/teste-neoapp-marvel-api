import React from 'react';
import { Link } from 'react-router-dom';

import { Article } from './styles';

export default function PageOverview(props) {

    return (
        <Article key={props.id} className={props.id}>
            <div className='containerImageComic'>

                <img src={`${props.image}.jpg`} alt={props.alt} className={'cover-comic'} />
            </div>
            <div className='containerTitleComic'>
                <h1>{props.title}</h1>
            </div>

            <Link to={`/${props.id}`} className='link'>Ver detalhes</Link>
        </Article>
    )
}
