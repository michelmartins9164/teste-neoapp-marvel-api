import md5 from 'md5';
import React, { useEffect, useState } from 'react';

import CardComic from '../../components/cardComic/index.jsx';
import HeaderComponent from '../../components/header/index..jsx';
import config from '../../config/config.js';
import api from '../../services/api.js';
import { Container, ContainerComics } from './styles.js';

const hash = md5(config.date + config.PrivateKey + config.PublicKey);

export default function Home() {
    const [listComics, setComics] = useState([]);
    useEffect(() => {
        api
        .get(`/comics//82970?ts=${config.date}&apikey=${config.PublicKey}&hash=${hash}`)
        .then((resp) => {
                setComics(resp.data.data.results);
            })
    }, []);


    return (
        <Container>
        <HeaderComponent />
        <main>
            <ContainerComics className="list-comics">
                {
                listComics.slice(0, 5).map((comic) => {
                    const { id, title, prices, thumbnail } = comic;
                    return (
                        <CardComic
                            key={id}
                            id={id} title={title}
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