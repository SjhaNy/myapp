import { Result } from "postcss";
import { useEffect, useState } from "react";

const useAPIClient = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Product list is not available");
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [url]);
  return { data, loading, error };
};

export default useAPIClient;
