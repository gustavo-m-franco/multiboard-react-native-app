import React, { Component, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, } from 'react-native';
import PropTypes from 'prop-types';
import AnimatedButton from './AnimatedButton';

class StatefullAnimatedButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            springAnimation: new Animated.Value(0),
        }
    }
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
    }

    componentDidMount() {
        const bounciness = 12;
        const speed = 1;
        Animated.spring(
            this.state.springAnimation,
            {
                toValue: this.props.width,
                delay: 100,
                speed,
                bounciness,
            }
        ).start();
    }

    render() {
        let fontSize = this.state.springAnimation.interpolate({inputRange: [0, this.props.width,],outputRange: [0, 14,],});
        return (
            <AnimatedButton
                onPress={this.props.onPress}
                animation={this.state.springAnimation}
                text={this.props.text}
            />
        );
    }
}


export default StatefullAnimatedButton;
