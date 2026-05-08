const TabThumbnail = ({ id, index, rotation, zIndex, size = 'default' }) => {
  const sizeClasses = {
    small: 'w-24 h-24 md:w-28 md:h-28',
    default: 'w-28 h-28 md:w-32 md:h-32',
    large: 'w-32 h-32 md:w-36 md:h-36',
  };

  const rotationClasses = {
    '-12': '-rotate-12',
    '6': 'rotate-6',
    '12': 'rotate-12',
  };

  const positions = {
    1: { bottom: '-16px', left: '0' },
    2: { bottom: '-8px', left: '25%' },
    3: { bottom: '-24px', left: '50%' },
  };

  return (
    <a 
      href={`#/work/${id}-${index}`} 
      onClick={(e) => e.stopPropagation()} 
      className={`absolute ${sizeClasses[size]} ${rotationClasses[rotation]} hover:z-20 transition-all duration-300 hover:scale-110`}
      style={{ 
        bottom: positions[index].bottom,
        left: positions[index].left,
        zIndex: zIndex,
      }}
    >
      <div className="w-full h-full bg-white shadow-xl hover:shadow-2xl cursor-pointer">
        <img 
          src={`https://picsum.photos/200/200?random=${id}${index}`} 
          alt={`cover ${index}`} 
          className="w-full h-full object-cover p-2 pointer-events-none" 
        />
      </div>
    </a>
  );
};

export default TabThumbnail;