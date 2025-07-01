import { Suspense } from "react";
import Banner from "@/components/Banner";
import { fetchProducts } from "./actions/products";
import { getUniqueCategories } from "./utils/filters";
import { ClientProductsManager, LoadingSpinner } from "./components";

export default async function OffersPage() {
  const { products, source } = await fetchProducts();

  const categories = getUniqueCategories(products);

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Ofertas especiais
        </h1>

        <Suspense
          fallback={
            <LoadingSpinner message="Carregando produtos..." size="lg" />
          }
        >
          <ClientProductsManager products={products} categories={categories} />
        </Suspense>

        <div className="text-center text-xs text-gray-400 mt-8">
          Dados carregados de: {source}
        </div>
      </main>
    </div>
  );
}
