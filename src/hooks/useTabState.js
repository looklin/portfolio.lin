import { useState, useCallback } from 'react';

const useTabState = () => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = useCallback((tabId, e) => {
    e.stopPropagation();
    setActiveTab(prev => prev === tabId ? null : tabId);
  }, []);

  const handleTabHover = useCallback((tabId) => {
    setHoveredTab(tabId);
  }, []);

  const handleTabLeave = useCallback(() => {
    setHoveredTab(null);
  }, []);

  const handleMainClick = useCallback(() => {
    setActiveTab(null);
  }, []);

  return {
    hoveredTab,
    activeTab,
    handleTabClick,
    handleTabHover,
    handleTabLeave,
    handleMainClick,
  };
};

export default useTabState;