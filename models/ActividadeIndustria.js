Backbone.SIXHIARA = Backbone.SIXHIARA || {};
Backbone.SIXHIARA.ActividadeIndustria = Backbone.Model.extend({

  defaults: {
    'id':         null,
    'tipo':       'Indústria',
    'c_estimado': null,
    'tipo_indus': null,
    'instalacio': null,
    'efluente':   null,
    'tratamento': null,
    'eval_impac': null
  },

});

// declare activity for dinamic discovery
Backbone.SIXHIARA.ActividadesFactory = Backbone.SIXHIARA.ActividadesFactory || {};
Backbone.SIXHIARA.ActividadesFactory['Indústria'] = new Backbone.SIXHIARA.ActividadeIndustria();
