import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useED = (value) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(value());
  }, [dispatch, value]);
};

export default useED;
