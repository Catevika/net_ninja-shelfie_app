import {Ionicons} from '@expo/vector-icons';
import {Tabs} from 'expo-router';
import {useColorScheme} from 'react-native';
import {Colors} from '../../constants/Colors';

const DashboardLayout = () => {
	const colorScheme = useColorScheme() as 'light' | 'dark';
	const theme = Colors[colorScheme] ?? Colors.light;

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: theme.navBackground,
					paddingVertical: 10,
					height: 90,
				},
				tabBarActiveTintColor: theme.iconColorFocused,
				tabBarInactiveTintColor: theme.iconColor,
			}}>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({focused}) => (
						<Ionicons
							name={focused ? 'person' : 'person-outline'}
							size={24}
							color={focused ? theme.iconColorFocused : theme.iconColor}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='books'
				options={{
					title: 'Books',
					tabBarIcon: ({focused}) => (
						<Ionicons
							name={focused ? 'book' : 'book-outline'}
							size={24}
							color={focused ? theme.iconColorFocused : theme.iconColor}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='create'
				options={{
					title: 'Create',
					tabBarIcon: ({focused}) => (
						<Ionicons
							name={focused ? 'create' : 'create-outline'}
							size={24}
							color={focused ? theme.iconColorFocused : theme.iconColor}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default DashboardLayout;
