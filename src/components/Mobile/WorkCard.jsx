const WorkCard = ({ cover, title, onClick }) => {
  return (
    <div 
      className="flex-shrink-0 w-40 sm:w-44 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-2">
        <img 
          src={cover} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <p className="text-xs text-gray-700 font-medium line-clamp-2">{title}</p>
    </div>
  );
};

export default WorkCard;
