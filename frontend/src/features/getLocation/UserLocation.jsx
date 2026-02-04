import { useState } from "react";

const useUserLocation = () => {

  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {

    console.log("location function clicked");
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    setLoading(true);

    // console.log('asdfjk');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
        console.log("asdfjjhasdfj");
      },

      (err) => {
        setError(err.message);
        setLoading(false);
      }

    );
  };

  return { location, error, loading, getLocation };
};

export default useUserLocation;
