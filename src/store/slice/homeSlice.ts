import { createSlice } from '@reduxjs/toolkit';
import { HomeState } from '../../model/data/homeState';

const initialState:HomeState = {
homeWidgets:[
  {
    id: 1,
    title: '',
    type: 'searchBar',
  },
  {
    id: 2,
    title: '',
    type: 'promotion',
  },
  {
    id: 3,
    title: 'En Çok Satılanlar',
    type: 'list',
  },
  {
    id: 4,
    title: 'Popüler Ürünler',
    type: 'list',
  },
  {
    id: 5,
    title: 'Avantajlı Ürünler',
    type: 'list',
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