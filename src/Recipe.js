import React from 'react';
import style from './Recipe.module.css';

const Recipe = ( { title, calories, image, ingredients } ) => {
    return (
        <div className={ style.recipe }>
            <h1>{ title }</h1>
            <img className={ style.image } src={ image } alt={ title }/>
            <ul>
                { ingredients.map( ( ingredient, index ) =>
                    <li key={ index }>{ ingredient.text }</li> ) }
            </ul>
            <h3>Calories: { calories }</h3>
        </div>
    );
};

export default Recipe;
