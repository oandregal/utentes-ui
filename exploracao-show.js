var exploracao = new Backbone.SIXHIARA.Exploracao({
  'exp_id':     '2016-001',
  'exp_name':   'Planta de abastecimento',
  'd_solici':   '10/07/2015',
  'observacio': 'Observações sobre linha de água e outras notas sobre localização e modo de acesso.',
  'loc_provin': 'Cabo-Delgado',
  'loc_distri': 'Mandimba',
  'loc_posto':  'Posto',
  'loc_nucleo': 'núcleo',
  'loc_endere': 'enderezo',
  'loc_bacia':  'Rovuma',
  'loc_subaci': 'sub',
  'loc_rio':    'Chiulezi'
});
exploracao.set('utente', new Backbone.SIXHIARA.Utente({
  'nome': 'Anadarco Mozambique',
  'nuit': 'N3459',
  'reg_comerc': '',
  'reg_zona': ''
}));
var licenciaSubterranea = new Backbone.SIXHIARA.Licencia({
  'lic_tipo': 'subterranea'
});
var licenciaSuperficial = new Backbone.SIXHIARA.Licencia({
  'lic_tipo':   'superficial',
  'lic_nro':    '2016-001-01',
  'cadastro':   'N78999',
  'estado':     'Irregular',
});
exploracao.get('licencias').add(licenciaSuperficial);
exploracao.get('licencias').add(licenciaSubterranea);

// block info
new Backbone.UILib.WidgetsView({
  el: $('#info'),
  model: exploracao
}).render();

// block utente
new Backbone.UILib.WidgetsView({
  el: $('#utente'),
  model: exploracao.get('utente')
}).render();

// block Licencias
new Backbone.UILib.WidgetsView({
  el: $('#licencia-superficial'),
  model: licenciaSuperficial
}).render();

new Backbone.UILib.WidgetsView({
  el: $('#licencia-subterranea'),
  model: licenciaSubterranea
}).render();