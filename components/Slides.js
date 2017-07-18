import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

	renderLastSlide(index) {
		if (index === this.props.data.length - 1) {
			return (
				<Button 
					buttonStyle={styles.buttonStyle} 
					raised 
					title="Got it. Onwards!" 
					onPress={this.props.onComplete} 
				/>
			) 
		}
	}

	renderSlides() {
		return this.props.data.map((slide, index) => {

			return (
				<View style={[styles.slideStyle, { backgroundColor: slide.color }]} key={slide.text}>
					<Text style={styles.slideText}>{slide.text}</Text>
					{this.renderLastSlide(index)}
				</View>
			)
		})
	}

	render() {
		return (
			<ScrollView
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
			>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = {
	slideText: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center',
		marginBottom: 15
	},
	slideStyle: {
		flex: 1,
		width: SCREEN_WIDTH,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonStyle: {
		backgroundColor: '#0288D1'
	}
};

export default Slides;