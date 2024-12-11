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
    test6:'',
    test7:'',
    test8:'',
    test9:'',
    test10:'',
    test11:'',
    test12:'',
    test13:false,
    test14:false,
    test15:false,
    test16:false,
    test17:false,
    test18:false,
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
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test7"
            value={data.test7}
            onChange={(e)=>handleChange(e,"test7")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test8"
            value={data.test8}
            onChange={(e)=>handleChange(e,"test8")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test9"
            value={data.test9}
            onChange={(e)=>handleChange(e,"test9")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test10"
            value={data.test10}
            onChange={(e)=>handleChange(e,"test10")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test11"
            value={data.test11}
            onChange={(e)=>handleChange(e,"test11")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test12"
            value={data.test12}
            onChange={(e)=>handleChange(e,"test12")}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={data.test13}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>handleChange(e,"test13",true)}
            />} 
            label="test13"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={data.test14}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>handleChange(e,"test14",true)}
            />} 
            label="test14"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={data.test15}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>handleChange(e,"test15",true)}
            />} 
            label="test15"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={data.test16}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>handleChange(e,"test16",true)}
            />} 
            label="test16"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={data.test17}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>handleChange(e,"test17",true)}
            />} 
            label="test17"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={data.test18}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>handleChange(e,"test18",true)}
            />} 
            label="test18"
          /> 
        </Grid2>
      </Grid2>
    </ScrollView>
  );
}
