import { useLanguage } from '../context';

const useTabConfig = () => {
  const { t } = useLanguage();

  return [
    { 
      id: '01', 
      title: t.branding, 
      colSpan: 1, 
      rowSpan: 2, 
      baseGray: '#e8e8e8', 
      zIndex: 1,
    },
    { 
      id: '02', 
      title: t.motionDesign, 
      colSpan: 2, 
      rowSpan: 2, 
      baseGray: '#e0e0e0', 
      zIndex: 2, 
      ml: '-ml-2',
    },
    { 
      id: '03', 
      title: t.uiUx, 
      colSpan: 1, 
      rowSpan: 1, 
      baseGray: '#d8d8d8', 
      zIndex: 3, 
      mt: '-mt-[40px] md:-mt-[48px]',
    },
    { 
      id: '04', 
      title: t.graphisme, 
      colSpan: 1, 
      rowSpan: 1, 
      baseGray: '#d0d0d0', 
      zIndex: 4, 
      ml: '-ml-2', 
      mt: '-mt-[40px] md:-mt-[48px]',
    },
    { 
      id: '05', 
      title: t.animation3d, 
      colSpan: 1, 
      rowSpan: 1, 
      baseGray: '#c8c8c8', 
      zIndex: 5, 
      ml: '-ml-2', 
      mt: '-mt-[40px] md:-mt-[48px]',
    },
  ];
};

export default useTabConfig;