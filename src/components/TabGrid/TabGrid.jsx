import { useState } from 'react';
import { Tab } from '../Tab';
import { useTabConfig, useTabState } from '../../hooks';
import WorkDialog from '../WorkDialog';

const TabGrid = () => {
  const tabs = useTabConfig();
  const {
    hoveredTab,
    activeTab,
    handleTabClick,
    handleTabHover,
    handleTabLeave,
  } = useTabState();
  const [selectedWork, setSelectedWork] = useState(null);

  const handleThumbnailClick = (work) => {
    setSelectedWork(work);
  };

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-[1.15fr_1fr] h-[70vh] w-full max-w-[1400px] mx-auto p-4 pb-0">
        {/* 01 工业生产交互 - col 1, row 1-2 */}
        <div 
          className="relative flex flex-col z-[1]"
          style={{ gridColumn: '1', gridRow: '1 / 3' }}
          onClick={(e) => handleTabClick('01', e)}
        >
          <Tab 
            id="01" 
            title={tabs[0].title} 
            active={activeTab === '01'} 
            hovered={hoveredTab === '01'}
            onHover={() => handleTabHover('01')}
            onLeave={handleTabLeave}
            onThumbnailClick={handleThumbnailClick}
            baseGray="#e8e8e8"
          />
        </div>
        
        {/* 02 跨行业全栈解决方案 - col 2-3, row 1-2 */}
        <div 
          className="relative -ml-2 flex flex-col z-[2]"
          style={{ gridColumn: '2 / 4', gridRow: '1 / 3' }}
          onClick={(e) => handleTabClick('02', e)}
        >
          <Tab 
            id="02" 
            title={tabs[1].title} 
            active={activeTab === '02'} 
            hovered={hoveredTab === '02'}
            onHover={() => handleTabHover('02')}
            onLeave={handleTabLeave}
            onThumbnailClick={handleThumbnailClick}
            baseGray="#e0e0e0"
          />
        </div>

        {/* 03 教育产品 - col 1, row 2 */}
        <div 
          className="relative -mt-[40px] md:-mt-[48px] flex flex-col z-[3]"
          style={{ gridColumn: '1', gridRow: '2' }}
          onClick={(e) => handleTabClick('03', e)}
        >
          <Tab 
            id="03" 
            title={tabs[2].title} 
            active={activeTab === '03'} 
            hovered={hoveredTab === '03'}
            onHover={() => handleTabHover('03')}
            onLeave={handleTabLeave}
            onThumbnailClick={handleThumbnailClick}
            baseGray="#d8d8d8"
          />
        </div>

        {/* 04 技术基础设施 - col 2, row 2 */}
        <div 
          className="relative -ml-2 -mt-[40px] md:-mt-[48px] flex flex-col z-[4]"
          style={{ gridColumn: '2', gridRow: '2' }}
          onClick={(e) => handleTabClick('04', e)}
        >
          <Tab 
            id="04" 
            title={tabs[3].title} 
            active={activeTab === '04'} 
            hovered={hoveredTab === '04'}
            onHover={() => handleTabHover('04')}
            onLeave={handleTabLeave}
            onThumbnailClick={handleThumbnailClick}
            baseGray="#d0d0d0"
          />
        </div>

        {/* 05 AI 相关 - col 3, row 2 */}
        <div 
          className="relative -ml-2 -mt-[40px] md:-mt-[48px] flex flex-col z-[5]"
          style={{ gridColumn: '3', gridRow: '2' }}
          onClick={(e) => handleTabClick('05', e)}
        >
          <Tab 
            id="05" 
            title={tabs[4].title} 
            active={activeTab === '05'} 
            hovered={hoveredTab === '05'}
            onHover={() => handleTabHover('05')}
            onLeave={handleTabLeave}
            onThumbnailClick={handleThumbnailClick}
            baseGray="#c8c8c8"
          />
        </div>
      </div>

      {selectedWork && (
        <WorkDialog work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </>
  );
};

export default TabGrid;
