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
      </Grid2>
    </ScrollView>
  );
}
