import { createSlice } from "@reduxjs/toolkit";
import { FavoritesState } from "../../model/data/favoritesState";
import { Product } from "../../model/data/productsState";
import { isDisabled } from "react-native/types_generated/Libraries/LogBox/Data/LogBoxData";
import { isHeaderBarButtonsAvailableForCurrentPlatform } from "react-native-screens/lib/typescript/utils";
const initialState: FavoritesState = {
    favorites: []
}
const favoriteSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const product: Product = action.payload
            const id=product.id
            const existing = state.favorites.find(item => item.id === product.id);
            if (existing) {
                state.favorites = state.favorites.filter(item => item.id !== id);
            }
            else {
                state.favorites.push({
                    ...product,
                });
            }
        }
    }
})
export const {addToFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer