import { useState } from "react";
import axios from "axios";

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  const create = (resource) => {
    setError(null);
    axios
      .post(baseUrl, resource)
      .then((response) => {
        setResources([...resources, response.data]);
      })
      .catch((e) => setError(e));
  };

  const service = {
    create,
  };

  return [resources, service, error];
};

export default useResource;
