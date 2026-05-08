const TabContent = ({ title, bgColor, bgStyle }) => {
  return (
    <div 
      className={`flex-1 transition-colors duration-300 p-6 pl-8 flex flex-col justify-start rounded-tr-md rounded-br-md rounded-bl-md -mt-1 relative z-10 ${bgColor}`}
      style={bgStyle}
    >
      <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl whitespace-nowrap mt-8">{title}</h2>
    </div>
  );
};

export default TabContent;