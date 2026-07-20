import { useMemo } from 'react';
import TabThumbnails from './TabThumbnails';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

const Tab = ({ 
  id, 
  title, 
  active, 
  hovered, 
  onHover, 
  onLeave, 
  onThumbnailClick,
  baseGray = '#e2e2e2' 
}) => {
  const isSelected = active;
  const isHovered = hovered && !active;
  const showThumbnails = active || hovered;

  const { bgColor, bgStyle } = useMemo(() => {
    if (isSelected) {
      return { 
        bgColor: 'bg-brand-yellow text-gray-900 shadow-lg', 
        bgStyle: {} 
      };
    }
    
    if (isHovered) {
      return { 
        bgColor: 'text-gray-900 shadow-md', 
        bgStyle: { backgroundColor: '#fae089' } 
      };
    }

    return { 
      bgColor: 'text-gray-500', 
      bgStyle: { backgroundColor: baseGray } 
    };
  }, [isSelected, isHovered, baseGray]);

  return (
    <div 
      className="relative h-full flex flex-col cursor-pointer transition-all duration-300"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <TabThumbnails id={id} show={showThumbnails} onThumbnailClick={onThumbnailClick} />
      <TabHeader id={id} bgColor={bgColor} bgStyle={bgStyle} />
      <TabContent title={title} bgColor={bgColor} bgStyle={bgStyle} />
    </div>
  );
};

export default Tab;