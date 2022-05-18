export type Weather = {
    weather: [{
        description: string;
    }],
    main: {
        temp: number;
        //delete bottom
        feels_like: number;
        pressure: number;
        humidity: number;
        sea_level: number;


    },
    name: string,
    wind:{
        speed: number;
    }
};
//тут похуй