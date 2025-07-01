"use client";

import { FaFilter, FaTimesCircle } from "react-icons/fa";
import { NumericFormat } from "react-number-format";
import { ProductFiltersProps } from "./types";
import { CustomInputWithIcon } from "./CustomInput";

export default function ProductFilters({
  categories,
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceRangeChange,
  onClearFilters,
}: ProductFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-6 border border-gray-100">
      <div className="flex items-center mb-4 gap-2 text-blue-700 font-semibold text-base">
        <FaFilter className="inline mr-2" />
        Filtros
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Categoria
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange("")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border ${
                selectedCategory === ""
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border capitalize ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Faixa de Preço
          </label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-[180px]">
              <NumericFormat
                value={priceRange.min || ""}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                allowNegative={false}
                decimalScale={2}
                fixedDecimalScale
                placeholder="Mínimo"
                onValueChange={(values) =>
                  onPriceRangeChange({
                    ...priceRange,
                    min: values.floatValue || 0,
                  })
                }
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                customInput={CustomInputWithIcon}
              />
            </div>
            <span className="text-gray-500 font-medium text-sm">até</span>
            <div className="relative flex-1 max-w-[180px]">
              <NumericFormat
                value={priceRange.max || ""}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                allowNegative={false}
                decimalScale={2}
                fixedDecimalScale
                placeholder="Máximo"
                onValueChange={(values) =>
                  onPriceRangeChange({
                    ...priceRange,
                    max: values.floatValue || 0,
                  })
                }
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                customInput={CustomInputWithIcon}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-white border border-gray-300 rounded-lg bg-gray-50 hover:bg-red-600 hover:border-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FaTimesCircle />
            Limpar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}
