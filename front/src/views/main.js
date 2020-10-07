import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {shorterUrl} from "../api";
import {URL_API, URL_WEB} from "../api/config";

function Main() {
  const [url, setUrl] = useState("")
  const [value, setValue] = useState("")
  const [shortened, setShortened] = useState("")

  useEffect(() => {
    setUrl(window.location.search.substring(1))
    if (url !== "") {
      window.location.href = URL_API + url;
    }
  }, [url]);

  function handleSubmit(event) {
    let buff = value

    if (!value.includes("://")) {
      setValue("http://" + value)
      buff = "http://" + value
    }
    shorterUrl(buff)
      .then((msg) => {
        setShortened(URL_WEB + "?" + msg.data.message)
      })
      .catch((err) => {
        console.log("Error")
      })
    event.preventDefault()
  }

  function handleChange(event) {
    if (shortened !== "") {
      setShortened("")
    }
    setValue(event.target.value)
  }

  return (
    <div className="App-header">
      <Typography variant="h3">
        Enter the url to shorter here :
      </Typography>
      <form onSubmit={handleSubmit} style={{width: "100%", padding: 10}}>
        <TextField id="outlined-basic" label="Complete URL" variant="outlined"
                   style={{width: '50%', backgroundColor: 'white'}} type={"text"} value={value}
                   onChange={handleChange}/>
      </form>
      { shortened !== "" ?
        <TextField id="filled-read-only-input"
                   label="Your shortened URL"
                   value={shortened}
                   style={{width: '50%'}}
                   InputProps={{
                     readOnly: true,
                   }}
                   variant="filled"
        />
        :
        <></>
      }
    </div>
  );
}

export default Main;