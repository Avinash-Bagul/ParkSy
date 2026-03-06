import { useState } from "react";
import { getUserLocation } from "../../store/features/locationSlice";

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
        getUserLocation({
          userLat: position.coords.latitude,
          userLng: position.coords.longitude
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
