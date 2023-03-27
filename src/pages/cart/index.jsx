import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/header';
import PageOverview from '../../components/pageOverview';
import { decrement, deleteItemInCart, increment } from '../../store/controlStates';
import { CartContainer, Total } from './styles';

export default function Cart() {

    const dispath = useDispatch();
    let array = []
    let cart = useSelector((state) => {
        return state.ListComics.allItems
    })
    let total = useSelector((state) => {
        return state.ListComics.allItems
    })

    function deleteItemCart(index) {
        let indexInitial = 0;
        let indexSlice = index;

        if (index > 0) {
            indexInitial = index--
        } else indexInitial = 0

        let arrayDeleteItem = []
        arrayDeleteItem = cart.filter(obj => obj.valor !== index);

        if (arrayDeleteItem.length === 1) {
            arrayDeleteItem.length = 0;
            dispath(deleteItemInCart(arrayDeleteItem))

            window.location.reload();
        } else {
            if (index === 0) {
                console.log(index)
                arrayDeleteItem.shift()
                dispath(deleteItemInCart(arrayDeleteItem))
            } else {
                indexInitial = index--
                arrayDeleteItem.splice(indexInitial, indexSlice)
                dispath(deleteItemInCart(arrayDeleteItem))
            }
        }
    }


    let price = 0;
    function incrementAmount(index) {
        dispath(increment(index))
    }
    function decrementAmount(index) {
        dispath(decrement(index))
    }
    return (
        <>
            <HeaderComponent />
            <CartContainer>
                {
                    cart.length <= 0 &&
                    <h1>Carrinho vazio</h1>
                }


                {cart.map((item, index) => {
                    for (let i = 0; i <= cart.length; i++) {
                        price = item.price + price;
                        i++
                    }
                    return (
                        <div key={item.id}>
                            <div className='itemsCart'>
                                <PageOverview title={item.title} id={item.id} image={item.image} />
                                <div className="cotainerValues">
                                    <button onClick={() => decrementAmount(index)}>
                                        -
                                    </button>
                                    <h1>
                                        Quantidade: {item.amount}
                                    </h1>
                                    <button onClick={() => incrementAmount(index)}>
                                        +
                                    </button>
                                </div>
                                <h1>
                                    R$ {item.price}
                                </h1>
                                <div>
                                    <button className='delete' onClick={() => deleteItemCart(index)}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </CartContainer>
            <Total>
                {
                    cart.length > 0 &&
                    <h2>Total: {price}</h2>
                }
            </Total>
        </>
    )
}   