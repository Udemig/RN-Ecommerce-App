import { createSlice } from '@reduxjs/toolkit';
import { HomeState } from '../../model/data/homeState';

const initialState:HomeState = {
homeWidgets:[
  {
    id: 1,
    title: '',
    type: 'searchBar',
    slug:"searchBar",
  },
  {
    id: 2,
    title: '',
    type: 'promotion',
     slug:"promotion",
  },
  {
    id: 3,
    title: 'En Çok Satılanlar',
    type: 'list',
     slug:"bestSeller",
  },
  {
    id: 4,
    title: 'Popüler Ürünler',
    type: 'list',
     slug:"populer",
  },
  {
    id: 5,
    title: 'Avantajlı Ürünler',
    type: 'list',
     slug:"bestOffer"
  },
],
};
const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers:{}
});

export const {} =homeSlice.actions
export default homeSlice.reducer