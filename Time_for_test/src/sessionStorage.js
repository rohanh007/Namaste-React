export const setLocationDataToSessionStorage = (locationData) => {
    sessionStorage.setItem('locationData', JSON.stringify(locationData));
  };


  export const getLocationDataFromSessionStorage = () => {
    const locationDataString = sessionStorage.getItem('locationData');
    return locationDataString ? JSON.parse(locationDataString) : null;
  };
  