import React, {FunctionComponent, ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSize} from '../constants';

type ITextFactoryProps = {
  children: ReactNode;
  style?: any;
  type: string;
  testID?: string;
};
const TextFactory: FunctionComponent<ITextFactoryProps> = ({
  children,
  style,
  type,
  ...rest
}) => {
  const getBaseStyle = () => {
    switch (type) {
      case 'main':
        return styles.main;
      case 'heading':
        return styles.heading;
      case 'body':
        return styles.body;
      default:
        return {};
    }
  };
  return (
    <Text style={[getBaseStyle(), style]} {...rest}>
      {children}
    </Text>
  );
};

type ITextItemProps = {
  children: ReactNode;
  style?: any;
  testID?: string;
};

export const Body: FunctionComponent<ITextItemProps> = ({
  children,
  style,
  ...rest
}) => (
  <TextFactory style={style} type="body" {...rest}>
    {children}
  </TextFactory>
);

export const Heading: FunctionComponent<ITextItemProps> = ({
  children,
  style,
  ...rest
}) => (
  <TextFactory style={style} type="heading" {...rest}>
    {children}
  </TextFactory>
);

export const Main: FunctionComponent<ITextItemProps> = ({
  children,
  style,
  ...rest
}) => (
  <TextFactory style={style} type="main" {...rest}>
    {children}
  </TextFactory>
);

const styles = StyleSheet.create({
  body: {
    fontSize: fontSize.small,
  },
  heading: {
    fontSize: fontSize.medium,
  },
  main: {
    fontSize: fontSize.large,
  },
});
