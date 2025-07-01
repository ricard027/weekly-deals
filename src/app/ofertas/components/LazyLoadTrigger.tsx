import { RefObject } from "react";

interface LazyLoadTriggerProps {
  observerRef: RefObject<HTMLDivElement | null>;
  hasMoreProducts: boolean;
  isLoadingMore: boolean;
}

export default function LazyLoadTrigger({
  observerRef,
  hasMoreProducts,
  isLoadingMore,
}: LazyLoadTriggerProps) {
  if (!hasMoreProducts) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>Você viu todos os produtos disponíveis!</p>
      </div>
    );
  }

  return (
    <div ref={observerRef} className="h-10 flex items-center justify-center">
      <div className="text-gray-500 text-sm">
        {isLoadingMore
          ? "Carregando mais produtos..."
          : "Role para carregar mais produtos"}
      </div>
    </div>
  );
}
