import React from 'react';

const burgerIngredient = (props) => {
    let ingredient = null;
    switch(props.type) {
        case ('bottom-bun'):
            ingredient = <div className = {classes.BreadBottom}></div>;
            break;
        case ('top-bun'):
            ingredient = (
                <div className = {classes.Top}>
                    <div className = {classes.Seeds1}></div>
                    <div className = {classes.Seeds2}></div>
                </div>
            );
            break;
        case ('cheese'):
            ingredient = <div className = {classes.Cheese}></div>;
            break;   
        case ('bacon'):
            ingredient = <div className = {classes.Bacon}></div>;
            break;   
        case ('salad'):
            ingredient = <div className = {classes.Salad}></div>;
            break;   
        default:
            ingredient = null;   

    }
};

export default burgerIngredient;