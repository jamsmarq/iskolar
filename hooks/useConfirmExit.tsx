import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { BackHandler } from 'react-native';
import Toast from 'react-native-root-toast';

export const useConfirmExit = () => {
  const [toast, setToast] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        if (toast) {
          // If the toast is already visible and the user presses back again, exit the app
          BackHandler.exitApp();
        } else {
          // Show the toast
          setToast(
            Toast.show('Press back again to exit', {
              duration: Toast.durations.SHORT,
              position: Toast.positions.BOTTOM,
            })
          );

          // Set a timeout to hide the toast after a certain period
          setTimeout(() => {
            setToast(null);
          }, Toast.durations.SHORT);

          return true;
        }

        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

      // Cleanup the listener on unmount
      return () => backHandler.remove();
    }, [toast])
  );
};