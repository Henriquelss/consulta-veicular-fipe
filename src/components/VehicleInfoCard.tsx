import React from 'react';

import type { FipeInfo } from '../types/vehicle.types';

interface Props {
  data: FipeInfo;
}

export const VehicleInfoCard: React.FC<Props> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md mt-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.Modelo}</h2>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600">
        <p><span className="font-semibold">Marca:</span></p><p>{data.Marca}</p>

        <p><span className="font-semibold">Ano:</span></p><p>{data.AnoModelo}</p>

        <p><span className="font-semibold">Combustível:</span></p><p>{data.Combustivel}</p>

        <p><span className="font-semibold">Código FIPE:</span></p><p>{data.CodigoFipe}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <p className="text-lg text-gray-500">Valor FIPE ({data.MesReferencia})</p>

        <p className="text-3xl font-bold text-blue-600">{data.Valor}</p>
      </div>
    </div>
  );
};