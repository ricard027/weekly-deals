import { CustomInputProps } from "./types";

export const CustomInputWithIcon = ({
  inputRef,
  ...props
}: CustomInputProps) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <span className="text-gray-500 text-sm">R$</span>
    </div>
    <input
      ref={inputRef}
      {...props}
      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
    />
  </div>
);
