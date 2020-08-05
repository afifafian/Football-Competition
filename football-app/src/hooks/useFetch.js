import { useState, useEffect } from "react";

const useFetch = url => {
  const [competitions, setCompetitions] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {

    fetch(url, {
        headers: { 'X-Auth-Token': '6a7c673ff8744f4a89bef61d69edc7f3' },
        dataType: 'json',
        type: 'GET',
    })
      .then(resp => resp.json())
      .then(data => setCompetitions(data.competitions))
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log("Ini Finally");
      });
  }, [url]);

  return competitions;
};

export default useFetch;