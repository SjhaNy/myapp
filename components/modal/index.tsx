// components/BottomDrawer.tsx
import React, { useState } from 'react';

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children:React.ReactNode
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ isOpen, onClose, children }) => {
  const drawerClasses = `fixed inset-x-0 bottom-0 p-4 bg-white border-t border-gray-300 transform transition-transform ${
    isOpen ? 'translate-y-0' : 'translate-y-full'
  }`;

  return (
    <div className={drawerClasses}>
      <button onClick={onClose} className="text-gray-500 absolute top-2 right-2">
        Close
      </button>
      {children}
    </div>
  );
};

export default BottomDrawer;
