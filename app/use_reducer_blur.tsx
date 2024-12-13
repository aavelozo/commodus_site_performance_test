import { FormControlLabel, Grid2, Switch, TextField, useTheme } from '@mui/material';
import { useReducer, useState } from 'react';
import { ScrollView } from 'react-native';

const initialStates = {
  test1:'',
  test2:'',
  test3:'',
  test4:'',
  test5:'',
  test6:''
};


//reducer setter state
function reducer(state, action) {
  switch (action.type) {
      case 'SET_DATA':
          return { ...state, ...action.payload};
      default:
          return state;
  }
}

export default function UseReducer() {
  const theme = useTheme();
  const [state, dispatch] = useReducer(reducer, initialStates);


  return (
    <ScrollView>
      <Grid2 container>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test1"
            defaultValue={state.test1}
            onBlur={(e)=>dispatch({type:'SET_DATA',payload:{test1:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test2"
            defaultValue={state.test2}
            onBlur={(e)=>dispatch({type:'SET_DATA',payload:{test2:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test3"
            defaultValue={state.test3}
            onBlur={(e)=>dispatch({type:'SET_DATA',payload:{test3:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test4"
            defaultValue={state.test4}
            onBlur={(e)=>dispatch({type:'SET_DATA',payload:{test4:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test5"
            defaultValue={state.test5}
            onBlur={(e)=>dispatch({type:'SET_DATA',payload:{test5:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test6"
            defaultValue={state.test6}
            onBlur={(e)=>dispatch({type:'SET_DATA',payload:{test6:e.target.value}})}
          />
        </Grid2>        
      </Grid2>
    </ScrollView>
  );
}
