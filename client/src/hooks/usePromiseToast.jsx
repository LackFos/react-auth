import { useRef } from "react";
import { toast } from "react-toastify";

const usePromiseToast = () => {
  let ref = useRef();

  const loading = (text) => {
    ref.current = toast.loading(text);
  };

  const update = (text, type) => {
    return toast.update(ref.current, {
      render: text,
      type,
      isLoading: false,
      autoClose: 3000,
    });
  };

  return { loading, update };
};

export default usePromiseToast;
