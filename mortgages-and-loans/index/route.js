import Route from 'buzz/routes/basic';
import ProductListMixin from 'buzz/mixins/product-list';

const MortgagesAndLoansIndexRoute = Route.extend(ProductListMixin, {

	templateName: 'common/layout-subhome',

	model() {
		return this.get('products').find('mortgagesAndLoans').then((data) => ({
			hasFooter: false,
			titleLabel: 'label.mortgagesAndLoans',
			hasPanel: true,
			subhomeLabel: 'label.outstandingCapital',
			list: this.parseProducts(data)
		}));
	}
});

export default MortgagesAndLoansIndexRoute;
