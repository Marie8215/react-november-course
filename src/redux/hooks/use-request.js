import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatusbyId } from "../ui/request/request-slice";

export const useRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();
  const dispatch = useDispatch();

  const requestStatus = useSelector((state) =>
    selectRequestStatusbyId(state, request?.requestId)
  );
  useEffect(() => {
    const request = dispatch(thunk(...params));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [dispatch, thunk, ...params]);

  return requestStatus;
};
