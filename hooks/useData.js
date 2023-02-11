import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data
  }
}

export default useData;
