import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import HeaderComponent from '../../components/header';

import api, { configUrl } from '../../services/api';
import { getComicId, setCart } from '../../store/controlStates';
import { ContainerOverview, LinkContainer, Overview } from './styles';

export default function OverviewComic() {

    const comicId = useSelector((state) => {
        return state.ListComics.comicId
    })
    const dispatch = useDispatch();
    const { id } = useParams();
    let data = [];
    useEffect(() => {
        async function getComicIdAsync() {
            //USD-BRL/1
            await api.get(`/comics/${id}?${configUrl}`).then((res) => {
                data = res.data.data.results[0];
                dispatch(getComicId(data));
            })
                .catch((error) => {
                    console.log(error)
                })
        }
        getComicIdAsync();
    }, []);
    let add = null;
    function sendDataComic() {
        dispatch(setCart(comicId))
        add = true
    }

    return (
        <>
            <HeaderComponent />
            <ContainerOverview>
                {<Overview>
                    <div className='containerComic'>
                        <img src={comicId.image} alt="capa" className='comicOverview' />
                    </div>
                    <h1>{comicId.title}</h1>
                    <span>Descrição: Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                    <h2>${comicId.price}</h2>
                    <LinkContainer>
                        <button className='link' onClick={sendDataComic}>
                            {add ? 'Adicionado' : 'Adicionar ao carrinho'}
                        </button>
                    </LinkContainer>
                </Overview>}
            </ContainerOverview>
        </>
    )
}
