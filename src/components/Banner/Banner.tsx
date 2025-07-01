import { BannerProps } from "./types";
import { BANNER_DEFAULTS } from "./constants";

export default function Banner({
  title = BANNER_DEFAULTS.title,
  subtitle = BANNER_DEFAULTS.subtitle,
  backgroundImage = BANNER_DEFAULTS.backgroundImage,
}: BannerProps) {
  return (
    <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
