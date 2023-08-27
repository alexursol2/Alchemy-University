import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SearchTx from '../components/SearchTx'
import TxInfo from '../components/TxInfo';
const TxDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tx = searchParams.get("tx");
  useEffect(() => {
    if(!tx) {
      navigate('/');
    }
  }, []);
  return (
    <React.Fragment>
      <Header/>
      {/* <SearchTx/> */}
      <TxInfo
        tx={tx}
      />
    </React.Fragment>
  )
}

export default TxDetail