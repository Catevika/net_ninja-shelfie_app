import {StyleSheet, Text} from 'react-native';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedLink from '../../components/ThemedLink';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Register = () => {
	const handleSubmit = () => {
		// TODO - Handle register logic here
		console.log('Register form submitted');
	};

	return (
		<ThemedView style={styles.container}>
			<ThemedText
				style={styles.title}
				title={true}>
				Register for an Account
			</ThemedText>
			<ThemedButton onPress={handleSubmit}>
				<Text style={{color: '#f2f2f2'}}>Register</Text>
			</ThemedButton>
			<Spacer height={100} />
			<ThemedLink
				href='/login'
				style={styles.link}
				link={true}>
				<ThemedText style={{textAlign: 'center'}}>Login instead</ThemedText>
			</ThemedLink>
		</ThemedView>
	);
};
export default Register;

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
});
