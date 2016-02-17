iCarto.Views.ItemView = Backbone.View.extend({

  // how to instantiate this view
  //
  // var itemView = new iCarto.Views.ItemView({
  //   model: model,
  //   template: template
  // });

  initialize: function(options){
    this.options = options || {};
    if(this.options.template){
      this.template = this.options.template;
    } else {
      throw {message: 'no template provided'};
    }
  },

  render: function(){
    this.$el.append(this.template(this.model.toJSON()));

    return this;
  },

});
