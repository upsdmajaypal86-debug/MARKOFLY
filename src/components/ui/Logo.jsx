import LogoImg from '../../assets/logo8.png';
import { cn } from '../../lib/utils';

export const Logo = ({
  className,
  imageClassName,
  light = false,
  alt = 'Markofly logo',
}) => {
  return (
    <div className={cn("flex items-center h-full", className)}>
      <img
        src={LogoImg}
        alt={alt}
        loading="eager"
        className={cn(
          // pehle h-10 sm:h-12 tha
          "h-6 sm:h-7 w-auto block object-contain transition-transform duration-300 group-hover:scale-[1.02]",
          light ? "brightness-0 invert opacity-90" : "",
          imageClassName
        )}
      />
    </div>
  );
};