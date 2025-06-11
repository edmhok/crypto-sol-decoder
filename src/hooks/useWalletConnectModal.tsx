import React, { useState, useCallback } from 'react';
import { Modal } from '../components/ui/modal';
import { useModal } from './useModal';

// Chain configurations
const SUPPORTED_CHAINS = {
  ethereum: {
    chainId: '0x1', // 1 in hex
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.infura.io/v3/'],
    blockExplorerUrls: ['https://etherscan.io'],
  },
  polygon: {
    chainId: '0x89', // 137 in hex
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  bsc: {
    chainId: '0x38', // 56 in hex
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
};

// Wallet connection state interface
interface WalletState {
  isConnected: boolean;
  account: string | null;
  chainId: string | null;
  balance: string | null;
}

// Declare ethereum object for TypeScript
declare global {
  interface Window {
    ethereum?: any;
  }
}

// Import wallet icons or use placeholders
const metamaskIcon = 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg';
const walletConnectIcon = 'https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png';
const coinbaseIcon = 'https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png';
const fortmaticIcon = 'https://cryptologos.cc/logos/fortmatic-logo.png';
const portisIcon = 'https://avatars.githubusercontent.com/u/7450663?s=280&v=4';

interface WalletOption {
  name: string;
  icon: string;
  onClick: () => void;
}

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletConnectModal: React.FC<WalletConnectModalProps> = ({ isOpen, onClose }) => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    account: null,
    chainId: null,
    balance: null,
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if MetaMask is installed
  const isMetaMaskInstalled = useCallback(() => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  }, []);

  // Get user's balance
  const getBalance = useCallback(async (account: string) => {
    try {
      if (window.ethereum) {
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [account, 'latest'],
        });
        // Convert from wei to ETH
        const balanceInEth = parseInt(balance, 16) / Math.pow(10, 18);
        return balanceInEth.toFixed(4);
      }
    } catch (error) {
      console.error('Error getting balance:', error);
    }
    return null;
  }, []);

  // Switch or add network
  const switchNetwork = useCallback(async (chainKey: keyof typeof SUPPORTED_CHAINS) => {
    const chainConfig = SUPPORTED_CHAINS[chainKey];
    
    try {
      // Try to switch to the network
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainConfig.chainId }],
      });
    } catch (switchError: any) {
      // If the network doesn't exist, add it
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [chainConfig],
          });
        } catch (addError) {
          console.error('Error adding network:', addError);
          throw new Error(`Failed to add ${chainConfig.chainName} network`);
        }
      } else {
        console.error('Error switching network:', switchError);
        throw new Error(`Failed to switch to ${chainConfig.chainName}`);
      }
    }
  }, []);

  // Connect to MetaMask
  const connectMetaMask = useCallback(async () => {
    if (!isMetaMaskInstalled()) {
      setError('MetaMask is not installed. Please install MetaMask to continue.');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length === 0) {
        throw new Error('No accounts found. Please connect your MetaMask wallet.');
      }

      const account = accounts[0];
      
      // Get current chain ID
      const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      });

      // Get balance
      const balance = await getBalance(account);

      // Update wallet state
      setWalletState({
        isConnected: true,
        account,
        chainId,
        balance,
      });

      // Switch to Ethereum mainnet by default
      if (chainId !== SUPPORTED_CHAINS.ethereum.chainId) {
        try {
          await switchNetwork('ethereum');
        } catch (networkError) {
          console.warn('Could not switch to Ethereum mainnet:', networkError);
        }
      }

      console.log('Successfully connected to MetaMask:', {
        account,
        chainId,
        balance,
      });

      // Close modal on successful connection
      onClose();
    } catch (error: any) {
      console.error('Error connecting to MetaMask:', error);
      setError(error.message || 'Failed to connect to MetaMask');
    } finally {
      setIsConnecting(false);
    }
  }, [isMetaMaskInstalled, getBalance, switchNetwork, onClose]);

  // Connect to WalletConnect (placeholder for now)
  const connectWalletConnect = useCallback(async () => {
    setError('WalletConnect integration coming soon!');
    console.log('WalletConnect connection requested');
  }, []);

  // Connect to Coinbase Wallet (placeholder for now)
  const connectCoinbaseWallet = useCallback(async () => {
    setError('Coinbase Wallet integration coming soon!');
    console.log('Coinbase Wallet connection requested');
  }, []);

  // Generic wallet connection handler
  const handleWalletConnect = useCallback(async (walletName: string) => {
    console.log(`Connecting to ${walletName}...`);
    setError(null);

    switch (walletName) {
      case 'MetaMask':
        await connectMetaMask();
        break;
      case 'WalletConnect':
        await connectWalletConnect();
        break;
      case 'Coinbase Wallet':
        await connectCoinbaseWallet();
        break;
      case 'Fortmatic':
      case 'Portis':
        setError(`${walletName} integration coming soon!`);
        break;
      default:
        setError('Unsupported wallet type');
    }
  }, [connectMetaMask, connectWalletConnect, connectCoinbaseWallet]);

  const walletOptions: WalletOption[] = [
    {
      name: 'MetaMask',
      icon: metamaskIcon,
      onClick: () => handleWalletConnect('MetaMask'),
    },
    {
      name: 'WalletConnect',
      icon: walletConnectIcon,
      onClick: () => handleWalletConnect('WalletConnect'),
    },
    {
      name: 'Coinbase Wallet',
      icon: coinbaseIcon,
      onClick: () => handleWalletConnect('Coinbase Wallet'),
    },
    {
      name: 'Fortmatic',
      icon: fortmaticIcon,
      onClick: () => handleWalletConnect('Fortmatic'),
    },
    {
      name: 'Portis',
      icon: portisIcon,
      onClick: () => handleWalletConnect('Portis'),
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md mx-auto p-0">
      <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {walletState.isConnected ? 'Wallet Connected' : 'Connect to a wallet'}
          </h2>
        </div>
        
        {/* Connection Status */}
        {walletState.isConnected && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-700 dark:text-green-300 font-medium">Connected</span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mb-1">
              Account: {walletState.account?.slice(0, 6)}...{walletState.account?.slice(-4)}
            </p>
            {walletState.balance && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Balance: {walletState.balance} ETH
              </p>
            )}
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {isConnecting && (
          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300 text-sm">Connecting to wallet...</span>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          {walletOptions.map((wallet) => (
            <button
              key={wallet.name}
              onClick={wallet.onClick}
              disabled={isConnecting}
              className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
                isConnecting 
                  ? 'border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 cursor-not-allowed opacity-50'
                  : wallet.name === 'MetaMask' 
                    ? 'border-purple-500 bg-white dark:bg-gray-800 hover:border-purple-600 dark:hover:border-purple-400' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-500 dark:hover:border-purple-500'
              }`}
            >
              <span className={`font-medium ${
                isConnecting 
                  ? 'text-gray-400 dark:text-gray-500'
                  : 'text-gray-900 dark:text-white'
              }`}>
                {wallet.name}
                {wallet.name === 'MetaMask' && !isMetaMaskInstalled() && (
                  <span className="text-xs text-red-500 block">Not installed</span>
                )}
              </span>
              <img 
                src={wallet.icon} 
                alt={`${wallet.name} icon`} 
                className={`h-8 w-8 object-contain ${
                  isConnecting ? 'opacity-50' : ''
                }`} 
              />
            </button>
          ))}
        </div>

        {/* Network Switching Options */}
        {walletState.isConnected && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Switch Network</h3>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(SUPPORTED_CHAINS).map(([key, chain]) => (
                <button
                  key={key}
                  onClick={() => switchNetwork(key as keyof typeof SUPPORTED_CHAINS)}
                  className={`p-2 text-xs rounded-lg border transition-all duration-200 ${
                    walletState.chainId === chain.chainId
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-500'
                  }`}
                >
                  {chain.nativeCurrency.symbol}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-between items-center">
            <span>New to Ethereum?</span>
            <a 
              href="https://ethereum.org/wallets/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 font-medium"
            >
              Learn more about wallets
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

// Hook for using the wallet connect modal
export const useWalletConnectModal = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [globalWalletState, setGlobalWalletState] = useState<WalletState>({
    isConnected: false,
    account: null,
    chainId: null,
    balance: null,
  });

  // Listen for account changes
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected
          setGlobalWalletState({
            isConnected: false,
            account: null,
            chainId: null,
            balance: null,
          });
        } else {
          // User switched accounts
          setGlobalWalletState(prev => ({
            ...prev,
            account: accounts[0],
          }));
        }
      };

      const handleChainChanged = (chainId: string) => {
        setGlobalWalletState(prev => ({
          ...prev,
          chainId,
        }));
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      // Cleanup
      return () => {
        if (window.ethereum.removeListener) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum.removeListener('chainChanged', handleChainChanged);
        }
      };
    }
  }, []);

  // Check if already connected on mount
  React.useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_accounts',
          });
          
          if (accounts.length > 0) {
            const chainId = await window.ethereum.request({
              method: 'eth_chainId',
            });
            
            setGlobalWalletState({
              isConnected: true,
              account: accounts[0],
              chainId,
              balance: null, // Will be fetched when needed
            });
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
        }
      }
    };

    checkConnection();
  }, []);

  // Disconnect function
  const disconnectWallet = useCallback(() => {
    setGlobalWalletState({
      isConnected: false,
      account: null,
      chainId: null,
      balance: null,
    });
  }, []);

  const WalletConnectModalComponent = () => (
    <WalletConnectModal isOpen={isOpen} onClose={closeModal} />
  );

  return {
    isOpen,
    openWalletModal: openModal,
    closeWalletModal: closeModal,
    WalletConnectModalComponent,
    // Expose wallet state and functions
    walletState: globalWalletState,
    disconnectWallet,
    isConnected: globalWalletState.isConnected,
    account: globalWalletState.account,
    chainId: globalWalletState.chainId,
    balance: globalWalletState.balance,
  };
};

export default WalletConnectModal;