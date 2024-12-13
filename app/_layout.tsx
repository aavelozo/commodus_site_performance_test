import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { Drawer } from 'expo-router/drawer';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useWindowDimensions } from 'react-native';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const dimensions = useWindowDimensions();
  const theme = useTheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        screenOptions={{
          drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        }}
      >
        <Drawer.Screen
          name="app/unique_state" // This is the name of the page and must match the url from root
          options={{
            //headerShown: false,
            drawerLabel: 'State unico',
            title: 'State unico',
          }}
        />
        <Drawer.Screen
          name="app/multiple_states" // This is the name of the page and must match the url from root
          options={{
            //headerShown: false,
            drawerLabel: 'Multiple States',
            title: 'Multiple States',
          }}
        />
        <Drawer.Screen
          name="app/use_reducer" // This is the name of the page and must match the url from root
          options={{
            //headerShown: false,
            drawerLabel: 'Use Reducer',
            title: 'Use Reducer',
          }}
        />
        <Drawer.Screen
          name="app/use_reducer_blur" // This is the name of the page and must match the url from root
          options={{
            //headerShown: false,
            drawerLabel: 'Use Reducer Blur',
            title: 'Use Reducer Blur',
          }}
        />
        <Drawer.Screen
          name="+not-found"
        />
      </Drawer>
    </ThemeProvider>
  )
}
