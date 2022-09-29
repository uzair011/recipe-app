import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addToFavourites: (id) => {},
  removeFromFavourites: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavouriteMeals(id) {
    setFavouriteMealIds((currentFavouriteMealIds) => [
      ...currentFavouriteMealIds,
      id,
    ]);
  }

  function removeFavouriteMeals(id) {
    setFavouriteMealIds((currentFavouriteMealIds) =>
      currentFavouriteMealIds.filter((mealId) => mealId !== id)
    );
  }

  const values = {
    ids: favouriteMealIds,
    addToFavourites: addFavouriteMeals,
    removeFromFavourites: removeFavouriteMeals,
  };

  return (
    <FavouritesContext.Provider value={values}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
