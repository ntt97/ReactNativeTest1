/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Header from '@components/Header';
import ViewDarkMode from '@components/ViewDarkMode';
import translate from '@localize/index';
import MapboxGL from '@react-native-mapbox-gl/maps';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
MapboxGL.setAccessToken(
  'pk.eyJ1IjoibnRoYW5odG9kZXY5NyIsImEiOiJja3IzNjFvam4weHVqMm5yenlvb2YwMjcwIn0.hYBjpRoZUGp2i0hjdp9apw',
);

export interface Props {
  componentId?: string;
}

const MapScreen = (props: Props) => {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
    NavigationActionsService.initInstance(props.componentId);
  }, []);

  return (
    <ViewDarkMode style={styles.wrapper}>
      <Header
        iconVector="bars"
        noShadow={false}
        mainText={translate('navigation.cart')}
        leftAction={() => NavigationActionsService.toggleDrawer(true)}
      />

      <View style={styles.container}>
        <View style={styles.body}>
          <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Street}
            scrollEnabled={true}
            zoomEnabled={true}
            style={[stylesM.countyPopulation, styles.map]}
          >
            <MapboxGL.Camera
              // zoomLevel={5}
              //  centerCoordinate={[108.20623, 16.047079]}
              centerCoordinate={[-98, 38.88]}
              zoomLevel={3}
              minZoomLevel={3}
            />
            <MapboxGL.VectorSource id="population" url={'mapbox://mapbox.660ui7x6'}>
              <MapboxGL.FillLayer
                id="state-population"
                sourceLayerID="state_county_population_2014_cen"
                maxZoomLevel={4}
                filter={['==', 'isState', true]}
                style={stylesM.statePopulation}
              />
              <MapboxGL.FillLayer
                id="county-population"
                sourceLayerID="state_county_population_2014_cen"
                minZoomLevel={4}
                filter={['==', 'isCounty', true]}
                style={stylesM.countyPopulation}
              />
            </MapboxGL.VectorSource>
          </MapboxGL.MapView>
        </View>
      </View>
    </ViewDarkMode>
  );
};

export default MapScreen;
const stylesM = {
  statePopulation: {
    fillOutlineColor: 'blue',
    fillColor: [
      'interpolate',
      ['linear'],
      ['get', 'population'],
      0,
      '#723122',
      500000,
      '#723122',
      750000,
      '#723122',
      1000000,
      '#723122',
      2500000,
      '#723122',
      5000000,
      '#723122',
      7500000,
      '#723122',
      10000000,
      '#723122',
      25000000,
      '#723122',
    ],

    fillOpacity: 0.75,
  },

  countyPopulation: {
    fillOutlineColor: 'blue',
    fillColor: [
      'interpolate',
      ['linear'],
      ['get', 'population'],
      0,
      '#723122',
      100,
      '#723122',
      1000,
      '#723122',
      5000,
      '#723122',
      10000,
      '#723122',
      50000,
      '#723122',
      100000,
      '#723122',
      500000,
      '#723122',
      1000000,
      '#723122',
    ],

    fillOpacity: 0.75,
  },
};
