import React,{useState} from "react";
import {Card, CardContent, Grid, TextField} from "@mui/material"

function App() {
   const [data, setData]=useState("Tajmahal")
   const [City, setCity]=useState("Newyork")
  return (
   <Grid container spacing={3}>
        <Grid item xs={6}>
        <TextField  onChange={(e)=>setData(e.target.value)} variant="outlined" fullWidth />
    
        </Grid>

        <Grid item xs={6}>
          <Card>
              <CardContent>
                 {data}
              </CardContent>
          </Card>

        </Grid>
          <Grid item xs={6}>
      <TextField onChange={(e)=>setCity(e.target.value)}  variant="outlined" fullWidth label="City Name"/>
          </Grid>

          <Grid item xs={6}>
            <Card>
                <CardContent>
                   {City}
                </CardContent>
            </Card>

          </Grid>

<Grid item xs={12}>
  <h1>{data} is in {City}</h1>

</Grid>

   </Grid>
  );
}

export default App;
