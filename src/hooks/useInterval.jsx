import { useRef, useEffect } from "react";

function useInterval(callback, delayTime) {
  const saveBackPoint = useRef();

  useEffect(() => {
    saveBackPoint.current = callback;
  }, [callback]);

  useEffect(() => {
    function moment() {
      saveBackPoint.current();
    }
    if (delayTime !== null) {
      let id = setInterval(moment, delayTime);
      return () => clearInterval(id);
    }
  }, [delayTime]);
}

export default useInterval;
