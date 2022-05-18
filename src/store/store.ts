import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import currentCitySliceReducer from "./slices/currentCitySlice";

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
    currentCitySliceReducer //сюда надо добавить редьюсер для названия города
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }))
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore[`dispatch`];