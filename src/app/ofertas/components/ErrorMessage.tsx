interface ErrorMessageProps {
  error: string;
  fallbackMessage?: string;
}

export default function ErrorMessage({
  error,
  fallbackMessage = "Usando dados de exemplo",
}: ErrorMessageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-600 mb-4">Erro: {error}</p>
        <p className="text-gray-600">{fallbackMessage}</p>
      </div>
    </div>
  );
}
