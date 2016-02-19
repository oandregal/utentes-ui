var DOMAINS_REPO = new Backbone.UILib.DomainCollection([
  {'category': 'utente', 'text': ''},
  {'category': 'utente', 'text': 'Anadarco Mozambique'},
  {'category': 'utente', 'text': 'Municipio de Pemba'},
  {'category': 'utente', 'text': 'Porto de Pemba'},
  {'category': 'provincia', 'text': ''},
  {'category': 'provincia', 'text': 'Cabo Delgado'},
  {'category': 'provincia', 'text': 'Niassa'},
  {'category': 'distrito', 'text': '', 'parent': 'Niassa'},
  {'category': 'distrito', 'text': 'Ancuabe', 'parent': 'Niassa'},
  {'category': 'distrito', 'text': 'Balama', 'parent': 'Niassa'},
  {'category': 'posto', 'text': '', 'parent': 'Ancuabe'},
  {'category': 'posto', 'text': 'Mesa', 'parent': 'Ancuabe'},
  {'category': 'posto', 'text': '', 'parent': 'Balama'},
  {'category': 'posto', 'text': 'Metoro', 'parent': 'Balama'},
  {'category': 'tipo-licencia', 'text': ''},
  {'category': 'tipo-licencia', 'text': 'Superficial'},
  {'category': 'tipo-licencia', 'text': 'Subterránea'},
  {'category': 'estado-licencia', 'text': '', 'alias': '', 'order': 0},
  {'category': 'estado-licencia', 'text': 'Irregular', 'alias': 'irregular', 'order': 1},
  {'category': 'estado-licencia', 'text': 'Licenciada', 'order': 4},
  {'category': 'estado-licencia', 'text': 'Pdte Solicitaçao utente', 'order': 2},
  {'category': 'estado-licencia', 'text': 'Pdte Emisao', 'order': 3},
  {'category': 'pagamento', 'text': ''},
  {'category': 'pagamento', 'text': 'Pagada'},
  {'category': 'pagamento', 'text': 'Non pagada'},
  {'category': 'actividade', 'text': ''},
  {'category': 'actividade', 'text': 'Abastecemento'},
  {'category': 'actividade', 'text': 'Saneamento'},
  {'category': 'actividade', 'text': 'Industria'},
  {'category': 'bacia', 'text': ''},
  {'category': 'bacia', 'text': 'Megaruma'},
  {'category': 'bacia', 'text': 'Messalo'},
  {'category': 'subacia', 'text': '', 'parent': 'Megaruma'},
  {'category': 'subacia', 'text': 'Miruco', 'parent': 'Megaruma'},
  {'category': 'subacia', 'text': '', 'parent': 'Messalo'},
  {'category': 'subacia', 'text': 'Muaguide', 'parent': 'Messalo'},
]);
