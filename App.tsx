import React from 'react';
import * as Font from 'expo-font';
import Route from './src/routes/RoutesStack'
// import RouteTab from './src/routes/routesTab'


// export default function App() {
//   const [fontsLoaded] = useFonts({
//     WorkSans_600SemiBold,
//     Quicksand_400Regular
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return(

//   )
// }

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({

      'Quicksand': {
        uri: require('./assets/Quicksand-Bold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'WorkSans': {
        uri: require('./assets/WorkSans400.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {
      return (
        <Route />
      );
    } else {
      return null;
    }
  }
}
