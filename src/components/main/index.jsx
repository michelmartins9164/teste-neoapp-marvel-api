import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageOverview from '../../components/pageOverview/index.jsx';
import api, { configUrl } from '../../services/api.js';
import { getAllComics, nextPage, prevPage } from '../../store/controlStates/index.js';
import { ContainerButtons, ContainerComics } from './styles.js';

function Main() {
    let data = [];
    const dispatch = useDispatch();

    const comicsList = useSelector((state) => {
        return state.ListComics.comics;
    });


    const limit = useSelector((state) => {
        return state.ListComics.currentPage;
    });

    const prev = useSelector((state) => {
        return state.ListComics.prev;
    });

    const next = useSelector((state) => {
        return state.ListComics.next;
    });

    function currentPageNext() {
        dispatch(nextPage())
    }
    function currentPagePrev() {
        dispatch(prevPage())
    }

    useEffect(() => {
        api.get(`/comics?${configUrl}`).then((res) => {
            data = Object.values(res.data.data);
        })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                dispatch(getAllComics(data[4]))
            })
    }, [])
    return (
        <main>
            
            <ContainerComics className="list-comics">
                <div className='shadow'>
                </div>
                {
                    comicsList.slice(prev, next).map((comic) => {
                        const { id, title, prices, thumbnail } = comic;
                        return (
                            <article key={id}>
                                <PageOverview
                                    key={id}
                                    id={id} title={title}
                                    image={`${thumbnail.path}.jpg`}
                                    price={prices[0]['price']} />
                            </article>
                        )
                    })
                }
                <ContainerButtons>
                    <button onClick={currentPagePrev}></button>
                    <button onClick={currentPageNext}></button>
                </ContainerButtons>
                <p>{limit}</p>
            </ContainerComics>
        </main>

    )
}

export default Main