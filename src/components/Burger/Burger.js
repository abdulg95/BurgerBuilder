import React from 'react';
import  classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return[...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey +i} type={igKey} />
            });
        });
    return(
       <div className ={classes.Burger}>
           <BurgerIngredient type="top-bun" />
            {transformedIngredients}
           <BurgerIngredient type="bottom-bun" />
       </div> 
    );
};

export default burger;