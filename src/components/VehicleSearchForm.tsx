

import React from 'react';
import type { Brand, Model, Year } from '../types/vehicle.types';

interface Props {
  brands: Brand[];
  models: Model[];
  years: Year[];
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  onBrandChange: (brandCode: string) => void;
  onModelChange: (modelCode: string) => void;
  onYearChange: (yearCode: string) => void;
  onSearch: () => void;
  isLoading: boolean;
  isSearching: boolean;
}

export const VehicleSearchForm: React.FC<Props> = ({
  brands, models, years,
  selectedBrand, selectedModel, selectedYear,
  onBrandChange, onModelChange, onYearChange,
  onSearch, isLoading, isSearching
}) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-wrap -mx-3 mb-6 gap-y-4">

        <div className="w-full md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Marca
          </label>
          <select
            value={selectedBrand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            disabled={isLoading || brands.length === 0}
          >
            <option value="">{isLoading ? 'Carregando...' : 'Selecione'}</option>
            {brands.map(brand => (
              <option key={brand.codigo} value={brand.codigo}>{brand.nome}</option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Modelo
          </label>
          <select
            value={selectedModel}
            onChange={(e) => onModelChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            disabled={!selectedBrand || models.length === 0}
          >
            <option value="">Selecione</option>
            {models.map(model => (
              <option key={model.codigo} value={model.codigo}>{model.nome}</option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Ano
          </label>
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            disabled={!selectedModel || years.length === 0}
          >
            <option value="">Selecione</option>
            {years.map(year => (
              <option key={year.codigo} value={year.codigo}>{year.nome}</option>
            ))}
          </select>
        </div>
      </div>


      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
        disabled={!selectedYear || isSearching}
      >
        {isSearching ? 'Consultando...' : 'Consultar Valor FIPE'}
      </button>
    </form>
  );
};