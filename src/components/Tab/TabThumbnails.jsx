import TabThumbnail from './TabThumbnail';

const TabThumbnails = ({ id, show }) => {
  if (!show) return null;

  return (
    <div className="absolute right-4 md:right-12 -top-16 md:-top-20 w-64 h-32 flex items-end justify-center z-0">
      <div className="relative w-full h-full group/covers">
        <TabThumbnail id={id} index={1} rotation="-12" zIndex={0} size="small" />
        <TabThumbnail id={id} index={2} rotation="6" zIndex={10} size="default" />
        <TabThumbnail id={id} index={3} rotation="12" zIndex={0} size="small" />
      </div>
    </div>
  );
};

export default TabThumbnails;