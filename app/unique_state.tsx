import { FormControlLabel, Grid2, Switch, TextField, useTheme } from '@mui/material';
import { useReducer, useState } from 'react';
import { ScrollView } from 'react-native';


export default function UniqueState() {
  const theme = useTheme();
  const [data, setData] = useState({
    test1:'',
    test2:'',
    test3:'',
    test4:'',
    test5:'',
    test6:''
  });

  const handleChange = (e,field,boolean) =>
    setData((prevState) => ({ ...prevState, [field]: e.target[boolean ? "checked" : "value"] }));


  return (
    <ScrollView>
      <Grid2 container>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test1"
            value={data.test1}
            onChange={(e)=>handleChange(e,"test1")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test2"
            value={data.test2}
            onChange={(e)=>handleChange(e,"test2")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test3"
            value={data.test3}
            onChange={(e)=>handleChange(e,"test3")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test4"
            value={data.test4}
            onChange={(e)=>handleChange(e,"test4")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test5"
            value={data.test5}
            onChange={(e)=>handleChange(e,"test5")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test6"
            value={data.test6}
            onChange={(e)=>handleChange(e,"test6")}
          />
        </Grid2>        
      </Grid2>
    </ScrollView>
  );
}
