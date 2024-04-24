import {configureStore} from '@reduxjs/toolkit';
import Cartslice from '../Slices/Cartslice';
const appStore=configureStore({
  reducer:{
    cart:Cartslice,
  }

})

export default appStore;