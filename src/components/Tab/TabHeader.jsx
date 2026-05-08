const TabHeader = ({ id, bgColor, bgStyle }) => {
  return (
    <div 
      className={`h-10 md:h-12 w-[120px] md:w-[160px] transition-colors duration-300 rounded-tl-md relative z-10 ${bgColor}`}
      style={{ 
        clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 100%, 0 100%)',
        ...bgStyle
      }}
    >
      <span className="font-mono text-xs md:text-sm font-bold pl-4 pt-2 block">{id}</span>
    </div>
  );
};

export default TabHeader;