import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingPage>
      <Overlay />
    </LoadingPage>
  );
};

export default Loading;

const LoadingPage = styled.div`
  background-image: url(${'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2cdo4blch85n8.cloudfront.net%2Fwp-content%2Fuploads%2F2019%2F11%2FHeatbox-Self-heating-Lunchbox-image-5.jpg&f=1&nofb=1'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  z-index: 1;
`;
