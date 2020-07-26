import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


//Functional componets
export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Rick&Morty', 'PS5'];
    const [categories, setCategories] = useState(['Rick and Morty']);

    // const handdleAdd = () =>{
    //     //setCategories([...categories,'Kick Butowsky'])
    //     setCategories( elemento => [...categories,'Kick Butowsky']  );
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories = { setCategories }/>
            <hr />
            {/* <button onClick={ handdleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( (category,i) => (
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    ))
                }
            </ol>
        </>
        );

};


