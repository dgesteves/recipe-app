import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

    const APP_ID = '6a41e2ad';
    const APP_KEY = 'de1320c2de353824f27a24fccb83d852';

    const [ recipes, setRecipes ] = useState( [] );
    const [ search, setSearch ] = useState( '' );
    const [ query, setQuery ] = useState( 'salmon' );

    useEffect( () => {
        getRecipes();
        // eslint-disable-next-line
    }, [ query ] );

    const getRecipes = async () => {
        const response = await axios.get( `https://api.edamam.com/search?q=${ query }&app_id=${ APP_ID }&app_key=${ APP_KEY }` );
        setRecipes( response.data.hits );
    };

    const onSearchChange = e => {
        setSearch( e.target.value );
    };

    const onFormSubmit = e => {
        e.preventDefault();
        setQuery( search );
        setSearch( '' );
    };

    return (
        <div className='app'>
            <form className='search-form' onSubmit={ onFormSubmit }>
                <input className='search-bar' type='text' value={ search }
                       onChange={ onSearchChange }/>
                <button className='search-button'
                        type='submit'>
                    Search
                </button>
            </form>
            <div className='recipes'>
                { recipes.map( recipe => {
                    const { calories, label, image, ingredients } = recipe.recipe;
                    return (
                        <Recipe key={ calories }
                                title={ label }
                                calories={ calories }
                                image={ image }
                                ingredients={ ingredients }/>
                    );
                } ) }
            </div>
        </div>
    );
};

export default App;
