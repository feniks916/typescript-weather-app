import {ThunkAction} from 'redux-thunk' ;

import {RootState} from '..';

import { WeatherError, WeatherAction, WeatherData, GET_WEATHER, SET_ERROR, SET_LOADING} from './../types';

export const getWeather = (city: string) : ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const code = process.env.REACT_APP_API_KEY
            console.log(code)
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${code}`);

            if(!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message)
            }

            const resData: WeatherData = await res. json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            })
        } catch (error) {
            dispatch({
                type: SET_ERROR,
                payload: error.message 
            });
        }
    }
}

export const setLoading = (): WeatherAction => {
    return{
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}
