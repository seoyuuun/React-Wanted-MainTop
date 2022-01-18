import { useRef, useEffect } from "react";

function useInterval(callback, delay) {
  const saveCallback = useRef();

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      saveCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
