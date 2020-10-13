import React from 'react';
import {AirbnbRating} from 'react-native-ratings';

const Rating = (props) => {
  const {ratingNumber, undisable, finishRating, size, count} = props;
  return (
    <AirbnbRating
      count={count || 5}
      defaultRating={ratingNumber}
      size={size || 13}
      showRating={false}
      isDisabled={undisable ? false : true}
      starStyle={{margin: 0, marginRight: 2}}
      onFinishRating={finishRating}
    />
  );
};
export default Rating;
