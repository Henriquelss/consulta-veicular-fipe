import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center my-6">
    <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
  </div>
);