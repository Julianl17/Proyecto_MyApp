import React from 'react'
import './cards.css';

export default function Card({ titulo, imageSource, stock, descripcion, precio, sku }) {

    return (
        <div className='card text-center'>
            <div className='overflow'>
            <img src={imageSource} alt="" className='images card-img-top' />
            </div>
            
            <div className='card-body'>
                <h4 className='card-title text-primary'>{titulo}</h4>
                <p className='card-text text-secondary'>{descripcion}</p>
                <p className='card-text text-secondary'>Precio: {precio}</p>
                <p className='card-text text-secondary'>Codigo: {sku}</p>
                <p className='card-text text-secondary'>Disponibles: {stock}</p>
                <a href="#!" className='btn btn-outline-secondary rounded-0'>
                    Go to this Page
                </a>

            </div>
        </div>
    )
}
