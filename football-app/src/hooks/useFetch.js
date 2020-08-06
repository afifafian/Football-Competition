import { useState, useEffect } from "react";

const useFetch = url => {
  const [competitions, setCompetitions] = useState([]);
  const result = []

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

  competitions.forEach(e => {
    if (e.id <= 2003 || e.id === 2013 || e.id === 2014 || e.id === 2015 || e.id === 2016 
      || e.id === 2017 || e.id === 2018 || e.id === 2019 || e.id === 2021) {
      result.push(e)
    }
  });

  return result;
};

export default useFetch;