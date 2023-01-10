import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [ids, setIds] = useState([]);

  const addFavorite = (id) => {
    setIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setIds((prev) => prev.filter((item) => item !== id));
  };

  return (
    <FavoritesContext.Provider value={{ ids, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
