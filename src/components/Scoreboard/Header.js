import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import PropTypes from 'prop-types';
import Stopwatch from './Stopwatch';
import Stats from './Stats';

const Header = props => (
    <View style={styles.header}>
        <Stats
            players={props.players}
            maxScore={props.maxScore}
            maxScoreWins={props.maxScoreWins}
        />
        {props.timed?
            <Stopwatch
                timed={props.timed}
                time={props.time}
                showTimerAlert={props.showTimerAlert}
                showGameEndedAlert={props.showGameEndedAlert}
                gameStatus={props.gameStatus}
            />: undefined
        }
    </View>
);

Header.propTypes = {
    players: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            score: PropTypes.number,
        })
    ).isRequired,
    maxScore: PropTypes.number.isRequired,
    maxScoreWins: PropTypes.bool.isRequired,
    timed: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired,
    showTimerAlert: PropTypes.func.isRequired,
    gameStatus: PropTypes.string.isRequired,
    showGameEndedAlert: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#222',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#444',
    },
});

export default Header;
