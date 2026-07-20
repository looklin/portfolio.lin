import TabThumbnail from './TabThumbnail';
import { portfolioCategories } from '../../config/portfolioData';

const TabThumbnails = ({ id, show, onThumbnailClick }) => {
  if (!show) return null;

  const category = portfolioCategories.find((cat) => cat.id === id);
  if (!category) return null;

  // PC 端布局展示最多 3 个作品封面
  const works = category.works.slice(0, 3);

  const rotations = ['-12', '6', '12'];
  const zIndices = [0, 10, 0];
  const sizes = ['small', 'default', 'small'];

  return (
    <div className="absolute right-4 md:right-12 -top-16 md:-top-20 w-64 h-32 flex items-end justify-center z-0">
      <div className="relative w-full h-full group/covers">
        {works.map((work, idx) => (
          <TabThumbnail 
            key={work.id}
            work={work}
            position={idx + 1}
            rotation={rotations[idx]}
            zIndex={zIndices[idx]}
            size={sizes[idx]}
            onClick={onThumbnailClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TabThumbnails;
