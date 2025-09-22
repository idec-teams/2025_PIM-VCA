import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Pages from "../pages.js";

export function Navbar() {
  const location = useLocation();
  const [openFolders, setOpenFolders] = useState<number[]>([]);
  
  // 确定当前路径所在的菜单组
  useEffect(() => {
    const currentPath = location.pathname;
    
    // 查找当前路径所在的菜单组索引
    const activeMenuIndex = Pages.findIndex((item) => {
      if ("folder" in item && item.folder) {
        return item.folder.some(subItem => subItem.path === currentPath);
      }
      return false;
    });
    
    if (activeMenuIndex !== -1 && !openFolders.includes(activeMenuIndex)) {
      setOpenFolders([...openFolders, activeMenuIndex]);
    }
  }, [location.pathname]);
  
  // 切换菜单展开/收起状态
  const toggleFolder = (index: number) => {
    if (openFolders.includes(index)) {
      setOpenFolders(openFolders.filter(i => i !== index));
    } else {
      setOpenFolders([...openFolders, index]);
    }
  };
  
  return (
    <nav className="text-white w-full">
      <ul className="list-none p-0 m-0 w-full">
        {Pages.map((item, index) => (
          <li key={index} className="w-full">
            {("folder" in item && item.folder) ? (
              <div className="w-full">
                <button
                  onClick={() => toggleFolder(index)}
                  className="w-full border-0 text-white text-lg font-semibold cursor-pointer px-4 py-3 flex items-center justify-between hover:bg-white/20"
                >
                  {item.name}
                  <span className={`ml-2 text-xs transition-transform ${openFolders.includes(index) ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFolders.includes(index) && (
                  <ul className="bg-[#6A3CB0] py-1 w-full">
                    {item.folder.map((subItem, subIndex) => {
                      const isActive = location.pathname === subItem.path;
                      return (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path || ''}
                            className={`block px-8 py-2 text-md text-decoration-none hover:bg-white/20 ${isActive ? 'bg-white/10 font-semibold' : ''}`}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={"path" in item ? (item.path||'') : ''}
                className={`block w-full px-4 py-3 text-lg text-decoration-none font-semibold hover:bg-white/20 ${location.pathname === ("path" in item ? item.path : '') ? 'bg-white/10' : ''}`}
              >
                {"title" in item ? item.title : ''}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
