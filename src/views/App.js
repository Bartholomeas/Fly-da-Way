/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import InputSection from 'components/organisms/InputSection/InputSection';
import { Wrapper } from './App.styles';
import ResultSection from 'components/organisms/ResultSection/ResultSection';
import AppProvider from 'providers/AppProvider';

export const UserContext = React.createContext();
const App = () => {
  const [flyQuotes, setFlyQuotes] = useState([]);
  const [flightInfos, setFlightInfos] = useState();

  return (
    <AppProvider>
      <UserContext.Provider value={{ flightInfos, flyQuotes }}>
        <Wrapper>
          <InputSection setFlyQuotes={setFlyQuotes} setFlightInfos={setFlightInfos} />
          <ResultSection flyQuotes={flyQuotes} flightInfos={flightInfos} />
        </Wrapper>
      </UserContext.Provider>
    </AppProvider>
  );
};

export default App;
