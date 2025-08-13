import mergeDeep from './util/merge-deep.js';

const cityCenterCoords = [-75.163471, 39.953338];

const imageryInfo = {
  sources: {
    imageryLabels: {
      tiles: [
      'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2024: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2024_1in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2023: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2023/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2022: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2022_2in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2020: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2020_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2019: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2018: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2018_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2017: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2017_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2016: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2016_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2015: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2015_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2012: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2012_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2010: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2010_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2008: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2008_3in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    2004: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2004_6in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    1996: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_1996_6in/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    1962: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1962/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    1942: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1942/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    1910: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1910/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    1895: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1895/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    1875: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricGMHopkinsAtlas_1875/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    1860: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricHexamerLocherAtlas_1860/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    cyclomediaRecordings: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      },
    },
    cyclomediaCamera: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [],
        }
      }
    },
    cyclomediaViewcone: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [[[]]],
        }
      }
    },
  },
}

const pwdDrawnMapStyle = mergeDeep(imageryInfo,{
  version: 8,
  name: 'pwdDrawnMap',
  glyphs: '//fonts.openmaptiles.org/{fontstack}/{range}.pbf',
  sources: {
    test: {
      tiles: [
        'https://citygeo-geoserver-test.databridge.phila.gov/geoserver/gwc/service/wmts/rest/dor_basemap:dor_basemap/raster/3857x512/3857x512:{z}/{y}/{x}?format=image/png',
        // 'https://citygeo-geoserver-test.databridge.phila.gov/geoserver/gwc/service/tms/1.0.0/dor_basemap%3Ador_basemap@3857x512@png/{z}/{y}/{x}.png',
      ],
      type: 'raster',
      tileSize: 512,
    },
    pwd: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    pwdLabels: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}',
      ],
      type: 'raster',
      tileSize: 256,
    },
    fullMarathon: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/2024_FullMarathon/MapServer/tile/{z}/{y}/{x}'
      ],
      type: 'raster',
      tileSize: 256,
    },
    halfMarathon: {
      tiles: [
        'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/2024_HalfMarathon/MapServer/tile/{z}/{y}/{x}'
      ],
      type: 'raster',
      tileSize: 256,
    },
    addressMarker: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [],
        }
      }
    },
    dorParcel: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [[[]]],
        }
      }
    },
  },
  layers: [
    {
      id: 'pwd',
      source: 'pwd',
      type: 'raster',
    },
    {
      id: 'pwdLabels',
      source: 'pwdLabels',
      type: 'raster',
    },
    {
      id: 'fullMarathon',
      source: 'fullMarathon',
      type: 'raster',
    },
    {
      id: 'cyclomediaRecordings',
      source: 'cyclomediaRecordings',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#5b94c6',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#a1a1a1',
        'circle-opacity': 0.5,
      }
    },
    {
      id: 'cyclomediaCamera',
      source: 'cyclomediaCamera',
      type: 'symbol',
      layout: {
        'icon-image': 'camera-icon',
        'icon-anchor' : 'center',
        'icon-size': 0.09,
        'icon-rotate': 0,
        'icon-rotation-alignment': 'map',
        "icon-allow-overlap" : true,
        "text-allow-overlap": true,
      },
    },
    {
      'id': 'cyclomediaViewcone',
      'type': 'fill',
      'source': 'cyclomediaViewcone',
      'layout': {},
      'paint': {
        'fill-color': 'rgb(0,102,255)',
        'fill-opacity': 0.2,
      },
    },
    {
      id: 'addressMarker',
      source: 'addressMarker',
      type: 'symbol',
      layout: {
        'icon-image': 'marker-blue',
        'icon-rotate': 180,
        'icon-anchor': 'bottom',
        'icon-size': .05,
        "icon-allow-overlap" : true,
        "text-allow-overlap": true,
      },
    },
  ],
});

const $mapConfig = {
  topicStyles: {
    'Property-Assessments': 'pwdDrawnMapStyle',
    Condominiums: 'pwdDrawnMapStyle',
  },
  parcelLayerForTopic: {
    undefined: 'pwd',
    'Property-Assessments': 'pwd',
    Condominiums: 'pwd',
    Deeds: 'dor',
    'Licenses-and-Inspections': 'pwd',
    Zoning: 'dor',
    Voting: 'pwd',
    '311': 'pwd',
    Stormwater: 'pwd',
    'Nearby-Activity': 'pwd',
    Districts: 'pwd',
  },
  mapLayers: {
    pwdBasemap: {
      id: 'pwdBasemap',
      source: 'pwdBasemap',
      type: 'raster',
    },
    pwdLabels: {
      id: 'pwdLabels',
      source: 'pwdLabels',
      type: 'raster',
    },
    fullMarathon: {
      id: 'fullMarathon',
      source: 'fullMarathon',
      type: 'raster',
    },
    halfMarathon: {
      id: 'halfMarathon',
      source: 'halfMarathon',
      type: 'raster',
    },
    dorBasemap: {
      id: 'dorBasemap',
      source: 'dorBasemap',
      type: 'raster',
    },
    dorLabels: {
      id: 'dorLabels',
      source: 'dorLabels',
      type: 'raster',
    },
    zoning: {
      id: 'zoning',
      source: 'zoning',
      type: 'raster',
    },
    addressMarker: {
      id: 'addressMarker',
      source: 'addressMarker',
      type: 'circle',
    },
    dorParcel: {
      id: 'dorParcel',
      type: 'fill',
      source: 'dorParcel',
      layout: {},
      paint: {
        'fill-color': 'blue',
        'fill-opacity': 0.4
      }
    },
    dorParcelLine: {
      id: 'dorParcelLine',
      type: 'line',
      source: 'dorParcel',
      layout: {},
      paint: {
        'line-color': 'blue',
        'line-width': 2
      }
    },
    imageryLabels: {
      id: 'imageryLabels',
      source: 'imageryLabels',
      type: 'raster',
    },
    2024: {
      id: '2024',
      source: '2024',
      type: 'raster',
    },
    2023: {
      id: '2023',
      source: '2023',
      type: 'raster',
    },
    2022: {
      id: '2022',
      source: '2022',
      type: 'raster',
    },
    2020: {
      id: '2020',
      source: '2020',
      type: 'raster',
    },
    2019: {
      id: '2019',
      source: '2019',
      type: 'raster',
    },
    2018: {
      id: '2018',
      source: '2018',
      type: 'raster',
    },
    2017: {
      id: '2017',
      source: '2017',
      type: 'raster',
    },
    2016: {
      id: '2016',
      source: '2016',
      type: 'raster',
    },
    2015: {
      id: '2015',
      source: '2015',
      type: 'raster',
    },
    2012: {
      id: '2012',
      source: '2012',
      type: 'raster',
    },
    2010: {
      id: '2010',
      source: '2010',
      type: 'raster',
    },
    2008: {
      id: '2008',
      source: '2008',
      type: 'raster',
    },
    2004: {
      id: '2004',
      source: '2004',
      type: 'raster',
    },
    1996: {
      id: '1996',
      source: '1996',
      type: 'raster',
    },
    1962: {
      id: '1962',
      source: '1962',
      type: 'raster',
    },
    1942: {
      id: '1942',
      source: '1942',
      type: 'raster',
    },
    1910: {
      id: '1910',
      source: '1910',
      type: 'raster',
    },
    1895: {
      id: '1895',
      source: '1895',
      type: 'raster',
    },
    1875: {
      id: '1875',
      source: '1875',
      type: 'raster',
    },
    1860: {
      id: '1860',
      source: '1860',
      type: 'raster',
    },
  },
}

$mapConfig['cityCenterCoords'] = cityCenterCoords;
$mapConfig['pwdDrawnMapStyle'] = pwdDrawnMapStyle;

export default $mapConfig;
