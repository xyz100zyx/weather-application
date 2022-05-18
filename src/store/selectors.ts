import { RootState } from './store';

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;


  //сюда добавить селектор для того, чтобы достать имя из хедера и передать его в хоум
export const selectCurrentCityName = (state: RootState) => state.currentCitySliceReducer;