import * as React from 'react';
import styled from 'styled-components';
import ProfileConfig from './ProfileConfig';

const Vr = styled.div`
  border-right: solid 2px ${({ theme }) => theme.colors.primary[500]};
  flex-grow: 0;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['bg-grey']};
  border-top: solid 2px ${({ theme }) => theme.colors.primary[500]};
  border-bottom: solid 2px ${({ theme }) => theme.colors.primary[500]};
  display: flex;
  height: 100%;
  padding: 16px 26px;
`;

const TemplateDiv = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const Config = (): JSX.Element => (
  <Wrapper>
    <ProfileConfig />
    <Vr />
    <TemplateDiv />
  </Wrapper>
);

export default Config;
