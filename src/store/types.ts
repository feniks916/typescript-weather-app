export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

//API Part

export interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
};

export interface WeatherData {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord:
    {
        lon: number;
        lat: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    }
    timezone: number;
    id: number;
    name: string;
    wind: {
        speed: number;
        deg: number;
    }
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    }
    visibility: number;
    weather: Weather[];
}

export interface WeatherError {
    cod: string;
    message: string;
};

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

// Actions Part

interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData
}

interface SetLoadingAction {
    type: typeof SET_LOADING
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface Alertstate {
    message: string;
}

