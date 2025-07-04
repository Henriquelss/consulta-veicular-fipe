

import { useState, useEffect, useCallback } from 'react';
import { fetchBrands, fetchModels, fetchYears, fetchFinalResult } from '../api/vehicleApi';
import type { Brand, Model, Year, FipeInfo } from '../types/vehicle.types';

export const useFipeApi = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [years, setYears] = useState<Year[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [fipeData, setFipeData] = useState<FipeInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBrands = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const brandsData = await fetchBrands();
        setBrands(brandsData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Falha ao carregar as marcas. Tente recarregar a página.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadBrands();
  }, []);

  useEffect(() => {
    if (!selectedBrand) {
      setModels([]);
      setYears([]);
      return;
    }
    const loadModels = async () => {
      setIsLoading(true);
      setError(null);
      setFipeData(null);
      setModels([]);
      setYears([]);
      try {
        const modelsData = await fetchModels(selectedBrand);
        setModels(modelsData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Falha ao carregar os modelos.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadModels();
  }, [selectedBrand]);

  useEffect(() => {
    if (!selectedModel) {
      setYears([]);
      return;
    }
    const loadYears = async () => {
      setIsLoading(true);
      setError(null);
      setFipeData(null);
      setYears([]);
      try {
        const yearsData = await fetchYears(selectedBrand, selectedModel);
        setYears(yearsData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Falha ao carregar os anos.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadYears();
  }, [selectedModel, selectedBrand]);

  const handleBrandChange = useCallback((brandCode: string) => {
    setSelectedBrand(brandCode);
    setSelectedModel('');
    setSelectedYear('');
  }, []);

  const handleModelChange = useCallback((modelCode: string) => {
    setSelectedModel(modelCode);
    setSelectedYear('');
  }, []);

  const handleYearChange = useCallback((yearCode: string) => {
    setSelectedYear(yearCode);
    setFipeData(null);
  }, []);
  
  const handleSearch = useCallback(async () => {
    if (!selectedBrand || !selectedModel || !selectedYear) return;
    
    setIsLoading(true);
    setError(null);
    setFipeData(null);
    try {
      const result = await fetchFinalResult(selectedBrand, selectedModel, selectedYear);
      setFipeData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Não foi possível encontrar o valor para a seleção atual.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [selectedBrand, selectedModel, selectedYear]);

  return {
    brands, models, years, fipeData,
    isLoading, error,
    selectedBrand, selectedModel, selectedYear,
    handleBrandChange, handleModelChange, handleYearChange, handleSearch,
  };
};