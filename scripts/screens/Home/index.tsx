import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {getWeather} from '../../api';
import {Body, ErrorContainer, Heading, Main} from '../../components';
import {spacing} from '../../constants';
import {IWeather, IDailyForecast} from '../../interfaces';
import {DetailItem, ForecastItem} from './shared';
import {formatTemperature, formatWind, wait} from '../../utils';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    setLoading(true);
    const {success, data} = await getWeather();
    if (success) {
      setWeather(data);
    }
    setLoading(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchWeather();
    await wait(2000);
    setRefreshing(false);
  };

  if (weather) {
    const {
      current: {main, feelsLike, temp, windDeg, windSpeed},
      daily,
    } = weather;

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <RefreshControl
          style={styles.refreshControl}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
        <View style={styles.container}>
          <View style={styles.heading}>
            <Heading style={styles.headingItem}>Harrisburg</Heading>
            <Body testID="main-condition" style={styles.headingItem}>
              {main}
            </Body>
            <Main testID="main-temp" style={styles.headingItem}>
              {formatTemperature(temp)}
            </Main>
          </View>
          <View>
            <DetailItem
              description="Feels Like"
              data={formatTemperature(feelsLike)}
            />
            <DetailItem
              description="Wind"
              data={formatWind(windDeg, windSpeed)}
            />
          </View>
          <View>
            <Body style={styles.forecast}>Forecast:</Body>
            {daily.map((d: IDailyForecast, i: number) => (
              <ForecastItem
                condition={d.main}
                day={d.day}
                temperature={d.temp}
                time={d.time}
                key={i}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return <ErrorContainer handlePress={getWeather} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: spacing.horizontalMargin,
  },
  forecast: {
    marginBottom: spacing.spacingConstant * 8,
  },
  heading: {
    alignItems: 'center',
  },
  headingItem: {
    marginVertical: spacing.spacingConstant * 2,
  },
  refreshControl: {
    flex: 0.2,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
});

export default HomeScreen;
