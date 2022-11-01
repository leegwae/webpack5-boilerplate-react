import React from 'react';
import GlobalStyle from '@common/components/GlobalStyle';
import Button from '@common/components/Button';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Button>버튼</Button>
      <div>process.env.TEST: {process.env.TEST}</div>
    </>
  );
};

export default App;
