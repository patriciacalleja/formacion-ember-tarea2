import Ember from 'ember';
import Route from 'buzz/routes/basic';

const MortgagesAndLoansMortgageRepaymentPlanRoute = Route.extend({

	/**
	 * Service injections.
	 */
	enpp: Ember.inject.service(),

	header: {
		type: 'defaultBack'
	},

	beforeModel(transition) {
		this._super(transition);
		this.set('mortgageLoanModel', this.modelFor('mortgages-and-loans.mortgage-loan'));
	},

	model() {
		return [
			{
				key: 'Cuota febrero 2017',
				value: '198,01',
				childs: [
					{ key: 'Principal', value: '142,99' },
					{ key: 'Intereses', value: '55,02' },
					{ key: 'Capital amortizado', value: '142,99' }				]
			},
			{
				key: 'Cuota marzo 2017',
				value: '198,01',
				childs: [
					{ key: 'Principal', value: '143,51' },
					{ key: 'Intereses', value: '54,5' },
					{ key: 'Capital amortizado', value: '143,51' }				]
			},
			{
				key: 'Cuota abril 2017',
				value: '198,01',
				childs: [
					{ key: 'Principal', value: '143,93' },
					{ key: 'Intereses', value: '54,08' },
					{ key: 'Capital amortizado', value: '143,93' }				]
			},
			{
				key: 'Cuota abril 2017',
				value: '198,01',
				childs: [
					{ key: 'Principal', value: '144,27' },
					{ key: 'Intereses', value: '53,74' },
					{ key: 'Capital amortizado', value: '144,27' }				]
			},
			{
				key: 'Cuota mayo 2017',
				value: '198,01',
				childs: [
					{ key: 'Principal', value: '144,90' },
					{ key: 'Intereses', value: '53,11' },
					{ key: 'Capital amortizado', value: '144,90' }				]
			},
			{
				key: 'Cuota junio 2017',
				value: '198,01',
				childs: [
					{ key: 'Principal', value: '145,28' },
					{ key: 'Intereses', value: '52,73' },
					{ key: 'Capital amortizado', value: '145,28' }				]
			}
		];
	},

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('headerTitle', this.get('mortgageLoanModel.name'));
	}
});

export default MortgagesAndLoansMortgageRepaymentPlanRoute;
