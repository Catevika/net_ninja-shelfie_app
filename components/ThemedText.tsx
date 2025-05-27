import {Text, useColorScheme} from 'react-native';
import {Colors} from '../constants/Colors';

const ThemedText = ({style, title = false, ...props}: any) => {
	const colorScheme = useColorScheme() as 'light' | 'dark';
	const theme = Colors[colorScheme] ?? Colors.light;

	const textColor = title ? theme.title : theme.text;

	return (
		<Text
			style={[{color: textColor}, style]}
			{...props}
		/>
	);
};

export default ThemedText;
