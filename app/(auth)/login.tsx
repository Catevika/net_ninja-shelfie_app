import {StyleSheet, Text} from 'react-native';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedLink from '../../components/ThemedLink';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import {Colors} from '../../constants/Colors';

const Login = () => {
	const handleSubmit = () => {
		// TODO - Handle login logic here
		console.log('Login form submitted');
	};

	return (
		<ThemedView style={styles.container}>
			<ThemedText
				style={styles.title}
				title={true}>
				Login to Your Account
			</ThemedText>

			<ThemedButton onPress={handleSubmit}>
				<Text style={{color: '#f2f2f2'}}>Login</Text>
			</ThemedButton>

			<Spacer height={100} />
			<ThemedLink
				href='/register'
				style={styles.link}
				link={true}>
				<ThemedText style={{textAlign: 'center'}}>Register instead</ThemedText>
			</ThemedLink>
		</ThemedView>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 30,
	},
	link: {
		borderBottomWidth: 1,
	},
	btn: {
		backgroundColor: Colors.primary,
		padding: 15,
		borderRadius: 5,
	},
	pressed: {
		opacity: 0.8,
	},
});
