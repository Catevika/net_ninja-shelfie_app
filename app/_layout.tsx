import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {useColorScheme} from 'react-native';
import {Colors} from '../constants/Colors';

const RouteLayout = () => {
	const colorScheme = useColorScheme() as 'light' | 'dark';
	const theme = Colors[colorScheme] ?? Colors.light;

	return (
		<>
			<StatusBar style='auto' />
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.navBackground,
					},
					headerTintColor: theme.title,
				}}>
				<Stack.Screen
					name='index'
					options={{title: 'Home'}}
				/>

				<Stack.Screen
					name='(auth)'
					options={{headerShown: false, animation: 'none'}}
				/>
				<Stack.Screen
					name='(dashboard)'
					options={{headerShown: false, animation: 'none'}}
				/>
			</Stack>
		</>
	);
};

export default RouteLayout;
