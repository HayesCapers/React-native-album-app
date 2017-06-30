// Import libraries for making component 
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = () => {
	const { textStyle, viewStyle } = styles;


	return (
		<View style={viewStyle}>
			<Text style={textStyle}>HAM on a iphone!</Text>
		</View>	
	);	
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15
	},
	textStyle: {
		fontSize: 20
	}
};

// Make the component available to other parts of the app
export default Header;