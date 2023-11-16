import React from 'react'
import Card from './Card';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
//Arreglo con objetos
const cards = [
    {
        id: 1,
        titulo: 'T-Shirt Beige',
        image: image1,
        precio: '$14.000',
        descripcion: 'Remera de algodon RVCA',
        stock: 8,
        sku: 'QWE003'
    },
    {
        id: 2,
        titulo: 'T-Shirt White',
        image: image2,
        precio: '$15.000',
        descripcion: 'Remera de algodon Rusty',
        stock: 20,
        sku: 'QWE001'
    },
    {
        id: 3,
        titulo: 'T-Shirt Black',
        image: image3,
        precio: '$14.000',
        descripcion: 'Remera de algodon Quicksilver',
        stock: 13,
        sku: 'QWE002'
    }
];
function Cards() {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    cards.map((card) => (
                        <div className='col-md-4' key={card.id}>
                            <Card titulo={card.titulo} imageSource={card.image} stock={card.stock} descripcion={card.descripcion} sku={card.sku} precio={card.precio} />
                        </div>

                    ))
                }


            </div>

        </div>
    )
}

export default Cards