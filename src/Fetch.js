import { useEffect } from "react";
import { createRoot } from 'react-dom/client'
import Error from './views/Error'
import SemSaldo from "./views/SemSaldo";
import DisplayCliente from "./views/DisplayCliente";

const fetchData = async () => {
  try {
    const response = await fetch("https://api.federalconsig.com.br/api/teste");
    const data = await response.json();
      if(data.msg == "Sem Saldo disponível para consulta.") {
        const rootElement = document.getElementById('root');
        createRoot(rootElement).render(<SemSaldo data={data} />);
      } else{
          const rootElement = document.getElementById('root');
          createRoot(rootElement).render(<DisplayCliente data={data} />);
        }} 
      catch (error) {
        if (error) {
          const rootElement = document.getElementById('root');
          createRoot(rootElement).render(<Error />);
        }
   }
};

const FetchData = () => {
  useEffect(() => {
fetchData()
  }, []);

  return null;
};

export default FetchData;