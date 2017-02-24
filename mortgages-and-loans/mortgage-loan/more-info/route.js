import MoreInfoRoute from 'buzz/pods/more-info/route';
import Ember from 'ember';

export default MoreInfoRoute.extend({

	afterModel(model) {
		this._super(...arguments);

		if (Ember.isPresent(model.comissions)) {
			model.comissions.forEach((item) => {
				item.hasExemptionPercentage = Ember.isPresent(item.exemptionPercentage);
			});
		}
	},
/*
	model: function() {
		return [
		{
			key: 'Amortización total',
			value: '100.000€'
		},
		{
			key: 'Amortización mínima',
			value: '3.000€'
		},
		{
			key: 'Interés cancelación parcial',
			value: '0%'
		},
		{
			key: 'Interés Cancelación Total',
			value: '0,50%'
		},
		{
			key: 'Resto cuotas',
			value: '440'
		},
		];
	}*/
});
