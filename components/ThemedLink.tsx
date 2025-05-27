import {Link} from 'expo-router';
import {useColorScheme} from 'react-native';
import {Colors} from '../constants/Colors';

const ThemedLink = ({style, link = false, ...props}: any) => {
	const colorScheme = useColorScheme() as 'light' | 'dark';
	const theme = Colors[colorScheme] ?? Colors.light;

	const linkBorderBottom = link ? theme.link : 'transparent';

	return (
		<Link
			style={[{borderBottomColor: linkBorderBottom}, style]}
			{...props}
		/>
	);
};

export default ThemedLink;
