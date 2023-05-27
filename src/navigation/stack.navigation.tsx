import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export type StackProps = {
	name: string;
	component: any;
	headerShown: boolean;
	headerName?: string;
};

interface StackNavigationProps {
	routes: StackProps[];
	initialRoute: string;
	headerShown?: boolean;
}

const StackNavigation = (props: StackNavigationProps) => {
	const { routes, initialRoute, headerShown } = props;

	return (
		<Stack.Navigator
			initialRouteName={initialRoute}
			screenOptions={{
				headerTitleAlign: 'center',
				headerShown: headerShown || false,
				headerBackTitle: '',
				headerBackAllowFontScaling: true,
				headerTitleStyle: {
					textTransform: 'capitalize',
					fontWeight: 'bold',
				},
				headerTintColor: 'black',
				headerTransparent: true,
				headerStyle: {
					elevation: 0,
					backgroundColor: 'transparent',
					shadowColor: 'transparent',
					shadowOffset: {
						height: 0,
						width: 0,
					},
					shadowOpacity: 0,
					shadowRadius: 0,
				},
			}}
		>
			{routes.map((route) => (
				<Stack.Screen
					name={route.name}
					component={route.component}
					key={route.name}
					options={{
						headerShown: route.headerShown,
						headerTitle: route.headerName,
					}}
				/>
			))}
		</Stack.Navigator>
	);
};
export default StackNavigation;
