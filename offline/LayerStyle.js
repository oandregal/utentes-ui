Backbone.SIXHIARA = Backbone.SIXHIARA || {};
Backbone.SIXHIARA.LayerStyle = {
  // doStyleOceano: function (feature) {
  //     return {
  //         weight: 0.26,
  //         color: '#1f78b4',
  //         fillColor: '#1f78b4',
  //         dashArray: null,
  //         lineCap: null,
  //         lineJoin: null,
  //         opacity: 1.0,
  //         fillOpacity: 1.0,
  //         clickable: false,
  //     };
  // },

  doStylePais: function (feature) {
      return {
          weight: 0.52,
          color: '#000000',
          fillColor: '#787878',
          // dashArray: '',
          // lineCap: 'square',
          // lineJoin: 'bevel',
          opacity: 1.0,
          fillOpacity: 1.0,
          clickable: false,
      };
  },

  doStylePostos: function (feature) {
      return {
          weight: 0.52,
          color: '#6c6c6c',
          fillColor: '#f1f4c7',
          dashArray: '5, 5, 1, 5',
          // lineCap: 'square',
          // lineJoin: 'bevel',
          // opacity: 1.0,
          fillOpacity: 1.0,
          clickable: false,
      };
  },

  onEachFeaturePostos: function (feature, layer) {
    layer.bindLabel(feature.properties['Nome'], {
      noHide: true,
      // offset: [-0, -16],
      className: 'sixhiara-leaflet-label-postos',
      opacity: 1,
      zoomAnimation: true,
      // direction: 'auto',
    });
  },

  doStyleProvincias:function (feature) {
      return {
          weight: 1.12,
          color: '#000000',
          fillColor: '#33a02c',
          dashArray: '5, 5, 1, 5',
          // lineCap: 'square',
          // lineJoin: 'bevel',
          opacity: 0.3,
          fillOpacity: 0.3,
          clickable: false,
      };
  },

  onEachFeatureProvincias: function (feature, layer) {
    layer.bindLabel(feature.properties['Nome'], {
      noHide: true,
      // offset: [-0, -16],
      className: 'sixhiara-leaflet-label-provincias',
      opacity: 1,
      zoomAnimation: true,
      direction: 'auto',
    });
    // layer.showLabel();
  },

  doStyleLagos: function (feature) {
      return {
          weight: 0.52,
          color: '#00537d',
          fillColor: '#00537d',
          // dashArray: '',
          // lineCap: 'square',
          // lineJoin: 'bevel',
          opacity: 1.0,
          fillOpacity: 1.0,
          clickable: false,
      };
  },

  doStyleEstradas: function (feature) {
    switch (feature.properties.TIPO) {
          case 'Other':
              return {
              color: '#7d7d7d',
              weight: 0.2,
              // dashArray: '',
              // lineCap: 'square',
              // lineJoin: 'bevel',
              opacity: '1.0',
              clickable: false,
          };
          break;

          case 'Primary':
              return {
              color: '#770514',
              weight: 1.5,
              // dashArray: '',
              // lineCap: 'square',
              // lineJoin: 'bevel',
              opacity: '1.0',
              clickable: false,
              fillColor: '#fff',
          };
          break;

          case 'Secondary':
              return {
              color: '#940518',
              weight: 0.6,
              // dashArray: '',
              // lineCap: 'square',
              // lineJoin: 'bevel',
              opacity: '1.0',
              clickable: false,
          };
          break;

          case 'Tertiary':
              return {
              color: '#11370f',
              weight: 0.52,
              // dashArray: '',
              // lineCap: 'square',
              // lineJoin: 'bevel',
              opacity: '1.0',
              clickable: false,
          };
          break;

          case 'Vicinal':
              return {
              color: '#5f4b0f',
              weight: 0.3,
              // dashArray: '',
              // lineCap: 'square',
              // lineJoin: 'bevel',
              opacity: '1.0',
              clickable: false,
          };
          break;
      }
    },

    marker_Cidadesevilas: new L.icon({
        iconUrl: 'offline/legend/Cidadesevilas.png',
        iconSize:     [16, 16],
        iconAnchor:   [8, 8]
    }),

    doPointToLayerCidadesVilas: function (feature, latlng) {
      return L.marker(latlng, {
        icon: Backbone.SIXHIARA.LayerStyle.marker_Cidadesevilas,
        clickable: false,
      }).bindLabel(feature.properties.NOME, {
        noHide: true,
        offset: [-0, -16],
        className: 'sixhiara-leaflet-label-cidades',
        opacity: 1,
        zoomAnimation: true,
        // direction: 'auto',
      })
    },

    doStyleInvisibleMarker: function () {
      return {
          radius: 2.0,
          fillColor: '#000000',
          color: '#000000',
          weight: 2.0,
          opacity: 0,
          fillOpacity: 0
      }
    },

    doPointToLayerPaisesPunto: function (feature, latlng) {
      return L.circleMarker(latlng, Backbone.SIXHIARA.LayerStyle.doStyleInvisibleMarker()).bindLabel(feature.properties.Nome, {
        noHide: true,
        offset: [-0, -0],
        className: 'sixhiara-leaflet-label-paises',
        opacity: 1,
        zoomAnimation: true,
        // direction: 'auto',
      })
    },

    doPointToLayerPostosPunto: function (feature, latlng) {
      return L.circleMarker(latlng, Backbone.SIXHIARA.LayerStyle.doStyleInvisibleMarker()).bindLabel(feature.properties.Nome, {
        noHide: true,
        offset: [-0, -0],
        className: 'sixhiara-leaflet-label-postos',
        opacity: 1,
        zoomAnimation: true,
        // direction: 'auto',
      })
    },

    doPointToLayerProvinciasPunto: function (feature, latlng) {
      return L.circleMarker(latlng, Backbone.SIXHIARA.LayerStyle.doStyleInvisibleMarker()).bindLabel(feature.properties.Nome, {
        noHide: true,
        offset: [-0, -0],
        className: 'sixhiara-leaflet-label-provincias',
        opacity: 1,
        zoomAnimation: true,
        // direction: 'auto',
      })
    },

    doStyleAlbufeiras: function (feature) {
        return {
            weight: 0.52,
            color: '#304b8a',
            fillColor: '#304b8a',
            // dashArray: '',
            // lineCap: 'square',
            // lineJoin: 'bevel',
            opacity: 1.0,
            fillOpacity: 1.0,
            clickable: false,
        };
    },

    doStyleRios: function (feature) {
        return {
            weight: 0.4,
            color: '#0a2577',
            // dashArray: '',
            // lineCap: 'square',
            // lineJoin: 'bevel',
            opacity: 1.0,
            clickable: false,
        };
    },
};
