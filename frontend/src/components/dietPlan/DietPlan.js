import React, { useState } from "react";
import { Utensils, ChevronDown, ChevronUp } from "lucide-react";
import "../../styles/DietPlan.css";

// Mock meal plan data
const mealPlans = {
  "insulin-resistant": {
    breakfast: [
      "Greek yogurt with berries and cinnamon",
      "Spinach and mushroom omelette with avocado",
      "Overnight oats with chia seeds and almond butter",
    ],
    lunch: [
      "Grilled chicken salad with olive oil dressing",
      "Lentil soup with mixed vegetables",
      "Quinoa bowl with roasted vegetables and tahini",
    ],
    dinner: [
      "Baked salmon with roasted broccoli",
      "Turkey and vegetable stir-fry with brown rice",
      "Zucchini noodles with lean ground turkey and tomato sauce",
    ],
    snacks: [
      "Handful of nuts and seeds",
      "Apple slices with almond butter",
      "Hummus with cucumber slices",
    ],
  },
  inflammatory: {
    breakfast: [
      "Anti-inflammatory smoothie with turmeric and ginger",
      "Chia seed pudding with berries",
      "Avocado toast on gluten-free bread with turmeric",
    ],
    lunch: [
      "Mediterranean salad with olive oil and lemon",
      "Turmeric and ginger soup with vegetables",
      "Salmon and avocado bowl with leafy greens",
    ],
    dinner: [
      "Baked cod with anti-inflammatory herbs and vegetables",
      "Turmeric chicken with roasted sweet potatoes",
      "Lentil and vegetable curry with brown rice",
    ],
    snacks: [
      "Berries and walnuts",
      "Turmeric latte with almond milk",
      "Celery with almond butter",
    ],
  },
  hormonal: {
    breakfast: [
      "Flaxseed porridge with cinnamon and berries",
      "Tofu scramble with vegetables",
      "Smoothie with flaxseed, berries, and plant protein",
    ],
    lunch: [
      "Chickpea and vegetable salad with olive oil",
      "Miso soup with tofu and seaweed",
      "Quinoa salad with edamame and vegetables",
    ],
    dinner: [
      "Grilled mackerel with steamed vegetables",
      "Tempeh stir-fry with broccoli and brown rice",
      "Lentil and vegetable stew with herbs",
    ],
    snacks: ["Pumpkin seeds and dried apricots", "Edamame beans", "Seaweed snacks"],
  },
};

const DietPlan = () => {
  const [dietType, setDietType] = useState("insulin-resistant");
  const [preferences, setPreferences] = useState([]);
  const [expandedMeal, setExpandedMeal] = useState(null);

  const toggleMeal = (meal) => {
    setExpandedMeal(expandedMeal === meal ? null : meal);
  };

  const handlePreferenceToggle = (preference) => {
    setPreferences((prev) =>
      prev.includes(preference) ? prev.filter((p) => p !== preference) : [...prev, preference]
    );
  };

  return (
    <div className="diet-plan-container">
      <div className="diet-plan-header">
        <h1>Personalized Diet Plan</h1>
        <p>Nutrition recommendations tailored for your PCOS type</p>
      </div>

      <div className="diet-plan-content">
        <div className="diet-preferences">
          <h3>Your Diet Preferences</h3>

          <div className="diet-type-selector">
            <label>PCOS Type:</label>
            <select value={dietType} onChange={(e) => setDietType(e.target.value)} className="diet-select">
              <option value="insulin-resistant">Insulin Resistant PCOS</option>
              <option value="inflammatory">Inflammatory PCOS</option>
              <option value="hormonal">Hormonal PCOS</option>
            </select>
          </div>

          <div className="dietary-preferences">
            <h4>Dietary Restrictions:</h4>
            <div className="preferences-grid">
              {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Low-Carb"].map((preference) => (
                <div
                  key={preference}
                  className={`preference-tag ${preferences.includes(preference) ? "active" : ""}`}
                  onClick={() => handlePreferenceToggle(preference)}
                >
                  {preference}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="meal-plan">
          <h3>Your 7-Day Meal Plan</h3>

          <div className="meal-categories">
            {["breakfast", "lunch", "dinner", "snacks"].map((mealType) => (
              <div key={mealType} className="meal-category">
                <div className="meal-header" onClick={() => toggleMeal(mealType)}>
                  <h4>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h4>
                  {expandedMeal === mealType ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {expandedMeal === mealType && (
                  <div className="meal-options">
                    {mealPlans[dietType][mealType].map((meal, index) => (
                      <div key={index} className="meal-option">
                        <Utensils size={16} />
                        <p>{meal}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
