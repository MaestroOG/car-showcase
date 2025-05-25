import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
        'x-rapidapi-key': 'd8495e604amsh498a2e6e42d5d01p144582jsn67867164fa9f',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    });

    const result = await response.json();

    return result
}

export function calculateCarRentPerDay(year: number): number {
    const baseRate = 100; // base rent per day in dollars
    const minRate = 40;   // minimum allowed rent per day
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - year;

    const depreciation = carAge * 5;
    const rentPerDay = baseRate - depreciation;

    return rentPerDay > minRate ? rentPerDay : minRate;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const { make, model, year } = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', year.toString());
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathName;
}