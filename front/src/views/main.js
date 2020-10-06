import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {shorterUrl} from "../api";

function Main() {
  const [url, setUrl] = useState("")
  const [value, setValue] = useState("")
  const [shortened, setShortened] = useState("")

  useEffect(() => {
    setUrl(window.location.search.substring(1))
    if (url !== "") {
      window.location.href = "http://127.0.0.1:32769/" + url;
    }
  }, [url]);

  function handleSubmit(event) {
    shorterUrl(value).then(res => {
      setShortened("127.0.0.1:3000/?" + res.message)
    }).catch(err => {
      console.log(err)
    })
    event.preventDefault()
  }

  return (
    <div className="App-header">
      <Typography variant="h3">
        Enter the url to shorter here :
      </Typography>
      <form onSubmit={handleSubmit} style={{width: "100%", padding: 10}}>
        <TextField id="outlined-basic" label="Complete URL" variant="outlined"
                   style={{width: '50%', backgroundColor: 'white'}} type={"text"} value={value}
                   onChange={(event) => setValue(event.target.value)}/>
      </form>
      <TextField id="filled-read-only-input"
                 label="Your shortened URL"
                 value={shortened}
                 InputProps={{
                   readOnly: true,
                 }}
                 variant="filled"
                 />
    </div>
  );
}

export default Main;