import { GlobalStyles, UtilityStyles } from '../components/AppStyles';
const App = ({ Component, pageProps }) => (
	<React.Fragment>
		<GlobalStyles />
		<UtilityStyles />
		<Component {...pageProps} />
	</React.Fragment>
);

export default App;
