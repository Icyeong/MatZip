import {Text, Button, SafeAreaView} from 'react-native';
import React from 'react';
import useAuth from '@/hooks/queries/useAuth';

export default function MapHomeScreen() {
  const {logoutMutaion} = useAuth();
  return (
    <SafeAreaView>
      <Text>맵 스크린</Text>
      <Button title="로그아웃" onPress={() => logoutMutaion.mutate(null)} />
    </SafeAreaView>
  );
}
