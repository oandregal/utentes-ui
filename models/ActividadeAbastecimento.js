Backbone.SIXHIARA = Backbone.SIXHIARA || {};
Backbone.SIXHIARA.ActividadeAbastecimento = Backbone.Model.extend({

  defaults: {
    'id':         null,
    'tipo':       'Abastecimento',
    'c_estimado': null,
    'habitantes': null,
    'dotacao':    20
  },

  initialize: function () {
    this.on('change:dotacao change:habitantes', this.updateCEstimado, this);
  },

  updateCEstimado: function () {
      if(habitantes && dotacao) {
        this.set('c_estimado', habitantes * dotacao * 30/1000);
      };
  }

});

// declare activity for dinamic discovery
Backbone.SIXHIARA.ActividadesFactory = Backbone.SIXHIARA.ActividadesFactory || {};
Backbone.SIXHIARA.ActividadesFactory['Abastecimento'] = new Backbone.SIXHIARA.ActividadeAbastecimento();