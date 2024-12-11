import { FormControlLabel, Grid2, Switch, TextField, useTheme } from '@mui/material';
import { useReducer, useState } from 'react';
import { ScrollView } from 'react-native';


export default function MultipleStates() {
  const theme = useTheme();
  const [test1,setTest1] = useState('');
  const [test2,setTest2] = useState('');
  const [test3,setTest3] = useState('');
  const [test4,setTest4] = useState('');
  const [test5,setTest5] = useState('');
  const [test6,setTest6] = useState('');
  const [test7,setTest7] = useState('');
  const [test8,setTest8] = useState('');
  const [test9,setTest9] = useState('');
  const [test10,setTest10] = useState('');
  const [test11,setTest11] = useState('');
  const [test12,setTest12] = useState('');
  const [test13,setTest13] = useState(false);
  const [test14,setTest14] = useState(false);
  const [test15,setTest15] = useState(false);
  const [test16,setTest16] = useState(false);
  const [test17,setTest17] = useState(false);
  const [test18,setTest18] = useState(false);


  return (
    <ScrollView>
      <Grid2 container>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test1"
            value={test1}
            onChange={(e)=>setTest1(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test2"
            value={test2}
            onChange={(e)=>setTest2(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test3"
            value={test3}
            onChange={(e)=>setTest3(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test4"
            value={test4}
            onChange={(e)=>setTest4(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test5"
            value={test5}
            onChange={(e)=>setTest5(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test6"
            value={test6}
            onChange={(e)=>setTest6(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test7"
            value={test7}
            onChange={(e)=>setTest7(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test8"
            value={test8}
            onChange={(e)=>setTest8(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test9"
            value={test9}
            onChange={(e)=>setTest9(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test10"
            value={test10}
            onChange={(e)=>setTest10(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test11"
            value={test11}
            onChange={(e)=>setTest11(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test12"
            value={test12}
            onChange={(e)=>setTest12(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={test13}
                onChange={(e)=>setTest13(e.target.checked)}
            />} 
            label="test13"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={test14}
                onChange={(e)=>setTest14(e.target.checked)}
            />} 
            label="test14"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={test15}
                onChange={(e)=>setTest15(e.target.checked)}
            />} 
            label="test15"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={test16}
                onChange={(e)=>setTest16(e.target.checked)}
            />} 
            label="test16"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={test17}
                onChange={(e)=>setTest17(e.target.checked)}
            />} 
            label="test17"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={test18}
                onChange={(e)=>setTest18(e.target.checked)}
            />} 
            label="test18"
          /> 
        </Grid2>
      </Grid2>
    </ScrollView>
  );
}
