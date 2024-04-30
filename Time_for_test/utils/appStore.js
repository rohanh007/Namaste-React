import {configureStore} from '@reduxjs/toolkit';
import Cartslice from '../Slices/Cartslice';
import Searchlistslice from '../Slices/Searchlistslice';
const appStore=configureStore({
  reducer:{
    cart:Cartslice,
    Searchres:Searchlistslice,
  }

})

export default appStore;