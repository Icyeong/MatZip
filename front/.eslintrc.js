module.exports = {
  root: true,
  extends: ['@react-native', '@tsconfig/react-native/tsconfig.json'],
  rules: {
    'no-unused-vars': ['warn', {varsIgnorePattern: 'StyleSheet'}],
  },
};
