import { useState, useEffect, useRef, useCallback } from 'react';

export default function useGeolocation(options?: PositionOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [data, setData] = useState<GeolocationCoordinates | null>(null);

  const watchIdRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (!navigator.geolocation) {
      setError({
        code: 1,
        message: 'Geolocation not supported',
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
      });
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        setLoading(false);
        setError(null);
        setData(pos.coords);
      },
      (err) => {
        setLoading(false);
        setError(err);
      },
      options,
    );
  }, [options]);

  const stop = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      // cleanup khi component unmount
      stop();
    };
  }, [stop]);

  return { loading, error, data, start, stop };
}
