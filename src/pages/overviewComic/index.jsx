import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import api, { configUrl } from '../../services/api';
import { getComicId, getImage, getPrice, getTitle } from '../../store/controlStates';
import { ContainerOverview, Overview } from './styles';

export default function OverviewComic() {
    const comic = useSelector((state) => {
        return state.ListComics.comicId
    });
    const image = useSelector((state) => {
        return state.ListComics.imageSrc
    })
    const title = useSelector((state) => {
        return state.ListComics.titleComic
    })
    const price = useSelector((state) => {
        return state.ListComics.priceComic
    })
    const dispatch = useDispatch();

    const { id } = useParams();
    console.log(id);
    let unknown = false;
    if (image === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
        unknown = true;
    }
    let data = [];
    useEffect(() => {
        async function getComicIdAsync() {
            //USD-BRL/1
            await api.get(`/comics/${id}?${configUrl}`).then((res) => {
                data = Object.values(res.data.data.results);
                dispatch(getComicId(data[0]));
                dispatch(getImage(data[0].thumbnail.path));
                dispatch(getTitle(data[0].title));
                dispatch(getPrice(data[0].prices[0].price));
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getComicIdAsync();
    }, [])

    return (
        <ContainerOverview>
            <Overview>
                <div className='containerComic'>
                    <img src={`${image}.jpg`} alt="capa" className={unknown === true ? 'coverUnknown' : 'comicOverview'} />
                </div>
                <h1>{title}</h1>
                <h2>${price}</h2>
                <Link to={`/car`}>ad</Link>
            </Overview>
        </ContainerOverview>
    )
}
