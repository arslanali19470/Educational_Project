import React, {useEffect, useState} from 'react';
import {multiThemeColor, normalized} from '../../Utils/AppConstant';
import AnimatedContainer from '../../Components/CustomComponents';
import Picture from '../../Components/CustomComponents/Picture';
import {SHAPE, Splash_image} from '../../Assets';
import {StatusBar, View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigation/MainNavigation';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Set a timeout for 2 seconds before navigating to the main screen
    const timeoutId = setTimeout(() => {
      setInitializing(false);
      navigation.navigate('Home'); // Replace 'MainScreen' with the name of your main navigation screen
    }, 2000);

    // Cleanup timeout if component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  // StatusBar.setHidden(true);
  if (initializing) {
    return (
      <View
        style={{
          backgroundColor: '#0961F5',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <AnimatedContainer
          delay={100}
          duration={800}
          animationType="fadeInDown"
          isVisible={true}>
          <View
            style={{
              borderWidth: 2.5,
              borderColor: 'white',
              height: responsiveHeight(36),
              width: responsiveWidth(74),
              borderRadius: 200,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Picture
              localSource={Splash_image}
              height={responsiveHeight(30)}
              width={responsiveWidth(33)}
              resizeMode="contain"
              top={responsiveHeight(2)}
            />
            <Picture
              localSource={SHAPE}
              height={responsiveHeight(40)}
              width={responsiveWidth(75)}
              resizeMode="contain"
              position='absolute'
              bottom={responsiveHeight(0.5)}
            />
          </View>
        </AnimatedContainer>
      </View>
    );
  }

  return null;
};

export default SplashScreen;
