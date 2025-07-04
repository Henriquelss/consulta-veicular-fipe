// src/App.tsx
import { VehicleInfoCard } from './components/VehicleInfoCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { VehicleSearchForm } from './components/VehicleSearchForm';
import { useFipeApi } from './hooks/useFipeApi';

function App() {

  const {
    brands,
    models,
    years,
    fipeData,
    isLoading,
    error,
    selectedBrand,
    selectedModel,
    selectedYear,
    handleBrandChange,
    handleModelChange,
    handleYearChange,
    handleSearch,
  } = useFipeApi();


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Consulta de Valor FIPE</h1>
        <p className="text-lg text-gray-600 mt-2">
          Selecione a marca, o modelo e o ano do veículo.
        </p>
      </header>

      <main className="w-full flex flex-col items-center">
        <VehicleSearchForm
          brands={brands}
          models={models}
          years={years}
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          selectedYear={selectedYear}
          onBrandChange={handleBrandChange}
          onModelChange={handleModelChange}
          onYearChange={handleYearChange}
          onSearch={handleSearch}

          isLoading={isLoading && (!selectedBrand || brands.length === 0)}
          isSearching={isLoading && !!selectedBrand}
        />

        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {fipeData && <VehicleInfoCard data={fipeData} />}
      </main>
    </div>
  );
}

export default App;