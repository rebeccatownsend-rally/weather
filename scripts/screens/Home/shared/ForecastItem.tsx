import React, {FunctionComponent} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Body} from '../../../components';
import {spacing} from '../../../constants';
import {TimeAbbr} from '../../../interfaces';
import {formatTemperature} from '../../../utils';

const {width} = Dimensions.get('window');

type IForecastItemProps = {
  condition: string;
  day: string;
  temperature: number;
  time: TimeAbbr;
};
const ForecastItem: FunctionComponent<IForecastItemProps> = ({
  condition,
  day,
  temperature,
  time,
}) => (
  <View style={styles.container}>
    <Body testID="forecast-day" style={styles.item}>
      {day}
    </Body>
    <Body testID="forecast-time" style={styles.item}>
      {time}
    </Body>
    <Body testID="forecast-main-condition" style={styles.item}>
      {condition}
    </Body>
    <Body testID="forecast-temp" style={styles.item}>
      {formatTemperature(temperature)}
    </Body>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: spacing.spacingConstant,
  },
  item: {
    width: (width - spacing.horizontalMargin) / 4,
  },
});

export default ForecastItem;
