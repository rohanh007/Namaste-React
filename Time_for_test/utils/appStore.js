import {configureStore} from '@reduxjs/toolkit';
import Cartslice from '../Slices/Cartslice';
import { searchresReducer } from '../Slices/Searchlistslice';

const appStore=configureStore({
  reducer:{
    cart:Cartslice,
    Searchres: searchresReducer,
  }

})

export default appStore;