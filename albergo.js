fetch("http://ws.cipiaceinfo.it/cache/set", { 
    method: "POST",
    headers: {
        "content-type": "application/json",
         "key": myToken
    },
    body: JSON.stringify({
             key: myKey,
             value: jsonObject
          }
 })
 .then(r => r.json())
 .then(r => {
          console.log(r.result); // se tutto è ok, stamperà "ok"
       })