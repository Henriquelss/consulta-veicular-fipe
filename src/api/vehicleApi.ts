// src/api/vehicleApi.ts

// --- INTERFACES E TIPOS ---
// Definem a "forma" dos dados que vamos receber e passar
import type { Brand, Model, Year, FipeInfo } from '../types/vehicle.types';



const API_BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros";

// --- NOVAS FUNÇÕES EXPORTADAS ---

/**
 * Busca a lista completa de marcas de carros.
 */
export const fetchBrands = async (): Promise<Brand[]> => {
  const response = await fetch(`${API_BASE_URL}/marcas`);
  if (!response.ok) throw new Error("Falha ao buscar as marcas.");
  return response.json();
};

/**
 * Busca os modelos para uma marca específica, usando o código da marca.
 * @param brandCode - O código da marca (ex: "59" para Volkswagen).
 */
export const fetchModels = async (brandCode: string): Promise<Model[]> => {
  if (!brandCode) return [];
  const response = await fetch(`${API_BASE_URL}/marcas/${brandCode}/modelos`);
  if (!response.ok) throw new Error("Falha ao buscar os modelos da marca.");
  const data = await response.json();
  return data.modelos;
};

/**
 * Busca os anos disponíveis para um modelo específico.
 * @param brandCode - O código da marca.
 * @param modelCode - O código do modelo.
 */
export const fetchYears = async (brandCode: string, modelCode: string): Promise<Year[]> => {
  if (!brandCode || !modelCode) return [];
  const response = await fetch(`${API_BASE_URL}/marcas/${brandCode}/modelos/${modelCode}/anos`);
  if (!response.ok) throw new Error("Falha ao buscar os anos do modelo.");
  return response.json();
};

/**
 * Busca o valor FIPE final com todos os códigos.
 * @param brandCode - O código da marca.
 * @param modelCode - O código do modelo.
 * @param yearCode - O código do ano.
 */
export const fetchFinalResult = async (brandCode: string, modelCode: string, yearCode: string): Promise<FipeInfo> => {
  const response = await fetch(`${API_BASE_URL}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`);
  if (!response.ok) throw new Error("Falha ao buscar o resultado final.");
  return response.json();
};