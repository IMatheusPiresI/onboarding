import React from 'react';
import * as S from './styles';
import {StyleSheet, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <S.Container {...rest} style={styles.shadow}>
      <S.TitleButton>{title}</S.TitleButton>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
