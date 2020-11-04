import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {Body} from '../../../components';
import {spacing} from '../../../constants';

type IDetailItemProps = {
  data: string;
  description: string;
};
const DetailItem: FunctionComponent<IDetailItemProps> = ({
  data,
  description,
}) => (
  <View style={styles.container}>
    <Body style={styles.item}>{description}</Body>
    <Body style={styles.item}>{data}</Body>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    marginRight: spacing.spacingConstant * 4,
    marginVertical: spacing.spacingConstant,
    minWidth: 100,
  },
});

export default DetailItem;
