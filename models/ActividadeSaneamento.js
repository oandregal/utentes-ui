Backbone.SIXHIARA = Backbone.SIXHIARA || {};
Backbone.SIXHIARA.ActividadeSaneamento = Backbone.Model.extend({

  defaults: {
    'id':           null,
    'tipo': 'Saneamento',
    'c_estimado': null,
    'habitantes': null
  },

});

// declare activity for dinamic discovery
Backbone.SIXHIARA.ActividadesFactory = Backbone.SIXHIARA.ActividadesFactory || {};
Backbone.SIXHIARA.ActividadesFactory['Saneamento'] = new Backbone.SIXHIARA.ActividadeSaneamento();
