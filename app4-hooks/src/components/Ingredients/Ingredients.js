import React, { useState, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = async (ingredient) => {
    const response = await fetch('https://react-hooks-test-6338a.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();
    setIngredients((prevIngredients) => [...prevIngredients, { id: responseData.name, ...ingredient }]);
  };

  const removeIngredientHandler = async (ingredientId) => {
    const _response = await fetch(`https://react-hooks-test-6338a.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    });
    setIngredients((prevIngredients) => prevIngredients.filter((ing) => ing.id !== ingredientId));
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
