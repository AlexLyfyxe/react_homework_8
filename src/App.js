import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";

export default  function Menu() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=&l=100"
        );
        setMeals(response.data.meals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Menu</h1>
      </header>
      <div className="meals-list">
        {meals.map((meal, index) => (
          <div className="meal-card" key={index}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} />
            <p>{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
