import {StyleSheet} from 'react-native';
import Spacer from '../components/Spacer';
import ThemedLink from '../components/ThemedLink';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';
import ThemedViewView from '../components/ThemedView';

const Home = () => {
	return (
		<ThemedViewView style={styles.container}>
			<ThemedLogo />
			<Spacer height={20} />

			<ThemedText
				style={styles.title}
				title={true}>
				The number 1
			</ThemedText>
			<Spacer height={10} />

			<ThemedText>Reading List App</ThemedText>
			<Spacer />

			<ThemedLink
				href='/login'
				style={styles.link}
				link={true}>
				<ThemedText>Login Page</ThemedText>
			</ThemedLink>

			<ThemedLink
				href='/register'
				style={styles.link}
				link={true}>
				<ThemedText>Register Page</ThemedText>
			</ThemedLink>

			<ThemedLink
				href='/profile'
				style={styles.link}
				link={true}>
				<ThemedText>Profile Page</ThemedText>
			</ThemedLink>
		</ThemedViewView>
	);
};
export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	link: {
		borderBottomWidth: 1,
	},
});
