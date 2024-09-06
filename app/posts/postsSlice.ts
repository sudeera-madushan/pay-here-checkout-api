export const capitalizeFirstLetter = (s:string):string|never => {
    return s.slice(0, 1).toUpperCase() + s.slice(1);
    };