import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ base, quote, conversionRate }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} 
  </Text>
);

LastConverted.propTypes = {

  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
