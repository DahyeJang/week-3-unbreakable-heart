// src/hooks/useInput.js

import { useState } from "react";

const useInput = (initialState) => {
  // 2. value는 useState로 관리하고,
  const [data, setData] = useState(initialState);

  // 3. 핸들러 로직도 구현합니다.
  const handler = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // 1. 이 훅은 [ ] 을 반환하는데, 첫번째는 value, 두번째는 핸들러를 반환합니다.
  return [data, handler];
};

export default useInput;
