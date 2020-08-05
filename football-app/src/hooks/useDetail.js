import { useState, useEffect } from "react";

const useDetail = url => {
  const [detail, setDetail] = useState({});

  useEffect(() => {

    fetch(url, {
        headers: { 'X-Auth-Token': '6a7c673ff8744f4a89bef61d69edc7f3' },
        dataType: 'json',
        type: 'GET',
    })
    .then(resp => resp.json())
    .then(data => setDetail(data))
    .catch(err => {
        console.log(err);
        alert('Sorry You didnt have access to this competition')
    })
    .finally(() => {
        console.log("Ini Finally dari useDetail");
    });
  }, [url]);

  return detail;
};

export default useDetail;