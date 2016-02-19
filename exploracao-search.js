// TODO: take from API
var domains = DOMAINS_REPO;
var exploracaos = EXPLORACAOS_REPO;

var where = new Backbone.SIXHIARA.Where();
var filtersView = new Backbone.SIXHIARA.FiltersView({
  el: $('#filters'),
  model: where,
  domains: domains,
}).render();

var listView = new Backbone.UILib.ListView({
  el: $('#project_list'),
  collection: exploracaos,
  subviewTemplate: _.template($('#exploracao-li-tmpl').html())
}).render();
listView.listenTo(where, 'change', function(model, options){
  this.update(exploracaos.where(where.values()));
});

var mapView = new Backbone.SIXHIARA.MapView({
  el: $('#map'),
  collection: exploracaos
});
mapView.listenTo(where, 'change', function(model, options){
  this.update(new Backbone.GeoJson.FeatureCollection(exploracaos.where(where.values())));
});