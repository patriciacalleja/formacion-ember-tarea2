import ProductHeaderMixin from 'buzz/mixins/product-header';
import AllowOperationMixin from 'buzz/mixins/allow-operation';
import Route from 'buzz/routes/basic';

const MortgagesAndLoansMortgageIndexRoute = Route.extend(AllowOperationMixin, ProductHeaderMixin, {

	actions: {
		showRepaymentPlan() {
			this.transitionTo('mortgages-and-loans.mortgage-loan.repayment-plan');
		}
	}

});

export default MortgagesAndLoansMortgageIndexRoute;
