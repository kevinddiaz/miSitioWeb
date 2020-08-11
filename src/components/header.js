import React from 'react';
import ilustration from '../imgs/undraw_business_decisions_gjwy.svg';
import Form from './contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="justify-center items-center flex">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-purple-700">¡Hola! Soy Kevin</h1>
                    <p className="text-2xl font-light">Creo aplicaciones Web y diseño de programas</p>
                </div>
                <img src={ilustration} alt="Hombre seleccionando elemento" style={{ height: "300px" }}></img>
            </div>
            
            
            <div>
                <Form />
            </div>
        </div>

    </header>
)