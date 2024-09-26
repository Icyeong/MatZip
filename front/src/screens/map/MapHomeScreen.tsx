import {StyleSheet} from 'react-native';
import React from 'react';
import useAuth from '@/hooks/queries/useAuth';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function MapHomeScreen() {
  const {logoutMutaion} = useAuth();
  return (
    <MapView
      style={styles.container}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
