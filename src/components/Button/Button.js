import { useState } from 'react';
import { Button, NavBtn } from './styles';

export const ButtonComponent = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const pressedConnectWallet = async () => {
    if(isConnected) return alert(
      'Conta já conectada: '+walletAddress
    )
    const walletResponse = await connectWallet();
    setIsConnected(walletResponse.connectedStatus);
    setWalletAddress(walletResponse.address);
  }

  const connectWallet = async () => {
    if(window.ethereum) {
      try{
        const address = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });

        const object = {
          connectedStatus: true,
          status: 'Conectado com sucesso',
          address
        }

        return object;

      } catch(err) {
        return {
          connectedStatus: false,
          status: 'Erro ao conectar carteira!'
        }

      }
      }else {
      return {
        connectedStatus: false,
        status: "Metamask não está instalado no navegador!"
      }
    }
  }
  console.log(walletAddress)
  return (
    <>
      <NavBtn>
        <Button onClick={pressedConnectWallet} to="/contact" primary="true">
          {isConnected ? (
            <span>{walletAddress.toString().slice(0, 5) + '...' + walletAddress.toString().slice(38, 42)}</span>
          ) : 'Conectar Carteira'}
        </Button>
      </NavBtn>
    </>
  );
};
