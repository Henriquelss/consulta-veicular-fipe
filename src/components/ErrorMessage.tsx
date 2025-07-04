import React from 'react';

interface Props {
  message: string;
}

export const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div className="w-full max-w-md bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mt-6" role="alert">
    <strong className="font-bold">Erro: </strong>
    <span className="block sm:inline">{message}</span>
  </div>
);