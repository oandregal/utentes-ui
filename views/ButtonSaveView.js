Backbone.SIXHIARA = Backbone.SIXHIARA || {};
Backbone.SIXHIARA.ButtonSaveView = Backbone.View.extend({

  events: {
    "click": "save"
  },

  // render: function(){
  // },

  save: function(){
    // TODO: save to API
    // make API configurable through config.js
    console.log(this.model.attributes);
  }

});