import ProductRoute from 'buzz/pods/product/route';
import Ember from 'ember';

const MortgagesAndLoansMortgageLoanRoute = ProductRoute.extend({

	subfamilyName: 'mortgages',

	beforeModel(transition) {
		this._super(transition);

		// Si no hay cuenta seleccionada, redirigimos a la subhome.
		if (!this.get('cache.selectedMortgageLoanId')) {
			const familyName = this.get('familyName');

			return this.transitionTo(familyName);
		}
	},

	model(params, transition) {
		const productInsurance = this.get('products').getLastProductSelected();

		this.set('selectedId', Ember.get(productInsurance, 'id'));
		this.set('subfamilyName', Ember.get(productInsurance, 'subfamilyCode'));
		this.set('typeName', Ember.get(productInsurance, 'subfamilyTypeCode'));

		return this.getModel(transition, false);
	},

	actions: {
		showRepaymentPlan() {
			this.transitionTo('mortgages-and-loans.mortgage-loan.repayment-plan');
		}
	}

});

export default MortgagesAndLoansMortgageLoanRoute;
