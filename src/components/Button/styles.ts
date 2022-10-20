import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const TitleButton = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  font-size: 13px;
  color: ${({theme}) => theme.colors.shape};
`;
