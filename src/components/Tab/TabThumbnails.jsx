import TabThumbnail from './TabThumbnail';
import { portfolioCategories } from '../../config/portfolioData';

const TabThumbnails = ({ id, show, onThumbnailClick }) => {
  if (!show) return null;

  const category = portfolioCategories.find((cat) => cat.id === id);
  if (!category) return null;

  // PC 端布局展示最多 4 个作品封面
  const works = category.works.slice(0, 4);

  const rotations = ['-12', '-4', '4', '12'];
  // 从左到右依次压在前一张上，保证 4 张封面都有可见部分（第 3 张不能被 2、4 完全遮住）
  const zIndices = [0, 10, 5, 4];
  const sizes = ['small', 'default', 'small', 'small'];

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
