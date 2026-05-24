import React from 'react';

/**
 * Reusable Buy Now Button
 * Props:
 * - onClick: function to handle click
 * - disabled: boolean to disable button
 * - children: button label (default: 'Buy Now')
 * - className: additional classes
 */
const BuyNowButton = ({ onClick, disabled, children = 'Buy Now', className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full min-w-45 py-3 px-10 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 bg-black text-white border border-black hover:bg-white hover:text-black ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300' : ''} ${className}`}
  >
    {children}
  </button>
);

export default BuyNowButton;
