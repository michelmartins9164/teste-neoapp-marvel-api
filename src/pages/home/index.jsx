import React, { useEffect, useState } from 'react';
import CardComic from '../../components/cardComic/index.jsx';
import HeaderComponent from '../../components/header/index..jsx';
import api, { configUrl } from '../../services/api.js';
import { Container, ContainerComics } from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { getAllComics } from '../../features/comics/index.js';
export default function Home() {
    const comics = useSelector(state => state.comics);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getComics() {
            await api.get(`/comics?${configUrl}`).then((response) => {
                dispatch(getAllComics(response.data.data.results));
            })
        }
        getComics();
    }, [])


    return (
        <Container>
            <HeaderComponent />
            <main>
                <ContainerComics className="list-comics">
                    {
                        comics.slice(0, 5).map((comic) => {
                            const { id, title, prices, thumbnail } = comic;
                            return (
                                <CardComic
                                    key={id}
                                    id ={id} title={title}
                                    image={thumbnail.path}
                                    price={prices[0]['price']}
                                />
                            )
                        })
                    }
                </ContainerComics>
            </main>
        </Container>
    )
}