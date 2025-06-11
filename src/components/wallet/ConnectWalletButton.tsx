import React from 'react';

interface ConnectWalletButtonProps {
  className?: string;
  onClick: () => void;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-lime-500 hover:bg-lime-600 text-black font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;