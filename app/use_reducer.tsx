import { FormControlLabel, Grid2, Switch, TextField, useTheme } from '@mui/material';
import { useReducer, useState } from 'react';
import { ScrollView } from 'react-native';

const initialStates = {
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
            value={state.test1}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test1:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test2"
            value={state.test2}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test2:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test3"
            value={state.test3}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test3:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test4"
            value={state.test4}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test4:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test5"
            value={state.test5}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test5:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test6"
            value={state.test6}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test6:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test7"
            value={state.test7}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test7:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test8"
            value={state.test8}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test8:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test9"
            value={state.test9}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test9:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test10"
            value={state.test10}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test10:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test11"
            value={state.test11}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test11:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <TextField 
            label="test12"
            value={state.test12}
            onChange={(e)=>dispatch({type:'SET_DATA',payload:{test12:e.target.value}})}
          />
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={state.test13}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>dispatch({type:'SET_DATA',payload:{test13:e.target.checked}})}
            />} 
            label="test13"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={state.test14}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>dispatch({type:'SET_DATA',payload:{test14:e.target.checked}})}
            />} 
            label="test14"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={state.test15}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>dispatch({type:'SET_DATA',payload:{test15:e.target.checked}})}
            />} 
            label="test15"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={state.test16}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>dispatch({type:'SET_DATA',payload:{test16:e.target.checked}})}
            />} 
            label="test16"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={state.test17}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>dispatch({type:'SET_DATA',payload:{test17:e.target.checked}})}
            />} 
            label="test17"
          /> 
        </Grid2>
        <Grid2 size={{xs:12, md:4}}>
          <FormControlLabel 
            control={<Switch
                value={state.test18}
                //defaultValue={showSubInvisibles}
                onChange={(e)=>dispatch({type:'SET_DATA',payload:{test18:e.target.checked}})}
            />} 
            label="test18"
          /> 
        </Grid2>
      </Grid2>
    </ScrollView>
  );
}
