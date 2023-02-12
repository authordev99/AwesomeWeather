import { useEffect, useState } from "react";
import { Platform } from "react-native";

const useData = () => {
  const [data, setData] = useState(null);
  const BASED_ENDPOINT = Platform.select({ios: '127.0.0.1', android:'10.0.2.2'})
  const getData = async () => {
    try {
      const response =
        await fetch(`http://${BASED_ENDPOINT}:3000/`,
        {
          method:'GET',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error.stack);
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
