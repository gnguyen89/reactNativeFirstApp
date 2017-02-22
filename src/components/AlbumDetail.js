import React, { PropTypes } from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

export default function AlbumDetail({ album }) {
  return (
    <Card>
      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>
    </Card>
  );
}

AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
