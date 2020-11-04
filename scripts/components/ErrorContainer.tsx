import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {spacing} from '../constants';
import {Body} from './Text';

type IErrorContainerProps = {
  handlePress: () => void;
};
const ErrorContainer: FunctionComponent<IErrorContainerProps> = ({
  handlePress,
}) => (
  <View style={styles.container}>
    <Body>Oops, something went wrong.</Body>
    <TouchableOpacity testID="error-container-retry-btn" onPress={handlePress}>
      <Body style={styles.buttonText}>Tap to try again.</Body>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    marginVertical: spacing.spacingConstant * 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorContainer;
