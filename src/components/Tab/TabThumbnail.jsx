import { useState } from 'react';
import { useLanguage } from '../../context';

const TabThumbnail = ({ work, position, rotation, zIndex, size = 'default', onClick }) => {
  const { lang } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const sizeClasses = {
    small: 'w-24 h-24 md:w-28 md:h-28',
    default: 'w-28 h-28 md:w-32 md:h-32',
    large: 'w-32 h-32 md:w-36 md:h-36',
  };

  const rotationClasses = {
    '-12': '-rotate-12',
    '-4': '-rotate-3',
    '4': 'rotate-3',
    '6': 'rotate-6',
    '12': 'rotate-12',
  };

  const positions = {
    1: { bottom: '-16px', left: '0' },
    2: { bottom: '-8px', left: '22%' },
    3: { bottom: '-8px', left: '44%' },
    4: { bottom: '-24px', left: '66%' },
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(work);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`absolute ${sizeClasses[size]} cursor-pointer transition-all duration-300`}
      style={{
        bottom: positions[position].bottom,
        left: positions[position].left,
        // 悬停时整卡置顶（行内 z-index 会覆盖 class，必须在这里提权）
        zIndex: hovered ? 30 : zIndex,
      }}
    >
      {/* 悬停浮层：项目简介（放在旋转层外，保持水平） */}
      <div
        className={`pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-52 -translate-x-1/2 ${hovered ? 'block' : 'hidden'}`}
      >
        <div className="rounded-lg bg-gray-900/90 px-3 py-2 text-left shadow-xl backdrop-blur-sm">
          <p className="text-xs font-semibold text-white">{work.title[lang]}</p>
          <p className="mt-1 text-[11px] leading-relaxed text-gray-200">{work.intro?.[lang]}</p>
        </div>
      </div>
      <div
        className={`h-full w-full transition-transform duration-300 ${hovered ? 'scale-110' : ''} ${rotationClasses[rotation]}`}
      >
        <div className={`h-full w-full bg-white transition-shadow duration-300 ${hovered ? 'shadow-2xl' : 'shadow-xl'}`}>
          <img
            src={work.cover}
            alt={work.title?.en || `cover ${position}`}
            className="pointer-events-none h-full w-full object-cover p-2"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TabThumbnail;
