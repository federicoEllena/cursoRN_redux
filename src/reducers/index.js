import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'; //este reducer es para la lista de tarjetitas 
import SelectionReducer from './SelectionReducer'; //este reducer es para la tarjetita o libreria seleccionada

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});