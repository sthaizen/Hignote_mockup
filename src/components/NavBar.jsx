import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import navData from '../data/navData.json';

// ==========================================
// 🎨 UI CONTROLS - ADJUST VALUES BELOW 🎨
// ==========================================
// Controls for the Featured Images in the dropdown menus
const FEATURED_IMAGE_WIDTH = "w-full";       // e.g., "w-full", "w-4/5", "w-[250px]"
const FEATURED_IMAGE_HEIGHT = "h-52";        // e.g., "h-32", "h-40", "h-64", "h-[200px]"

// Controls for the dropdown menu background colors when it pops up
const DROPDOWN_MAIN_BG = "bg-[#f5f3eb]";         // Main section background (left side)
const DROPDOWN_FEATURED_BG = "bg-black/1"; // Featured section background (right side)
// ==========================================

const NewTag = () => (
  <span className="ml-2 text-[9px] font-bold bg-[#111111] text-white px-1.5 py-0.5 rounded uppercase tracking-wider align-middle">
    New
  </span>
);

const NavItem = ({ title, activeMenu, handleMouseEnter, handleMouseLeave, isSwitching, children }) => {
  const isActive = activeMenu === title;
  const menuRef = useRef(null);
  const hasDropdown = !!children;

  useEffect(() => {
    if (!menuRef.current) return;

    if (isActive) {
      gsap.killTweensOf(menuRef.current);
      if (isSwitching) {
        gsap.set(menuRef.current, { autoAlpha: 1, y: 0, display: 'flex' });
      } else {
        gsap.fromTo(menuRef.current,
          { autoAlpha: 0, y: -15, display: 'none' },
          { autoAlpha: 1, y: 0, display: 'flex', duration: 0.3, ease: 'power3.out' }
        );
      }
    } else {
      gsap.killTweensOf(menuRef.current);
      if (isSwitching) {
        gsap.set(menuRef.current, { autoAlpha: 0, y: 0, display: 'none' });
      } else {
        gsap.to(menuRef.current,
          { autoAlpha: 0, y: -10, display: 'none', duration: 0.2, ease: 'power2.in' }
        );
      }
    }
  }, [isActive, isSwitching]);

  return (
    <div
      className="group h-full flex items-center cursor-pointer"
      onMouseEnter={() => handleMouseEnter(title, hasDropdown)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative px-4 py-2 flex items-center justify-center">
        {/* Background Pill */}
        <div className={`absolute inset-0 rounded-full bg-black/10 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

        {/* Rolling Text Container */}
        <div className="relative overflow-hidden text-center">
          <span className={`block text-[14px] font-medium text-black transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] leading-none ${isActive ? '-translate-y-[120%]' : 'group-hover:-translate-y-[120%]'}`}>
            {title}
          </span>
          <span aria-hidden="true" className={`absolute inset-0 flex items-center justify-center text-[14px] font-medium text-black transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] leading-none ${isActive ? 'translate-y-0' : 'translate-y-[120%] group-hover:translate-y-0'}`}>
            {title}
          </span>
        </div>
      </div>
      {children && (
        <div
          ref={menuRef}
          className={`absolute top-[64px] left-0 w-full ${DROPDOWN_MAIN_BG} border-y border-gray-100 cursor-default max-h-[85vh] overflow-y-auto hidden`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  const [menuState, setMenuState] = useState({ active: null, switching: false });
  const [isNavVisible, setIsNavVisible] = useState(true);
  const overlayRef = useRef(null);
  const timeoutRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down: hide nav and close any open menus
        setIsNavVisible(false);
        setMenuState({ active: null, switching: false });
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up: show nav
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (title, hasDropdown = true) => {
    clearTimeout(timeoutRef.current);
    if (hasDropdown) {
      setMenuState((prev) => {
        const isSwitching = prev.active !== null && prev.active !== title;
        return { active: title, switching: isSwitching };
      });
    } else {
      setMenuState({ active: null, switching: false });
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMenuState({ active: null, switching: false });
    }, 50);
  };

  const activeMenu = menuState.active;
  const isSwitching = menuState.switching;

  useEffect(() => {
    gsap.killTweensOf(overlayRef.current);
    if (activeMenu) {
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.2, ease: 'power2.in' });
    }
  }, [activeMenu]);

  return (
    <>
      {/* Background Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-[64px] left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-[90] opacity-0 invisible pointer-events-none"
      />

      <nav className={`fixed top-0 left-0 right-0 z-[100] bg-[#f5f3eb]/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ease-in-out ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between px-10 h-[64px]">
          {/* Left section: Logo and Links */}
          <div className="flex items-center gap-10 h-full">
            {/* Logo */}
            <div className="flex items-center h-full">
              <img src="/logo1.png" alt="Logo" className="h-8 object-contain" />
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 h-full">

              {/* PRODUCTS */}
              <NavItem title={navData.products.title} activeMenu={activeMenu} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isSwitching={isSwitching}>
                <div className="flex w-full">
                  <div className="w-[70%] p-8 flex gap-20">
                    <div className="flex flex-col gap-6 min-w-[200px]">
                      <h3 className="text-gray-400 text-[12px] font-normal uppercase  mb-1">Platform</h3>
                      {navData.products.sections.platform.map((item, idx) => (
                        <div key={idx} className="group/link cursor-pointer">
                          <h4 className="text-[28px] font-medium text-black group-hover/link:text-gray-600 transition-colors">{item.title}</h4>
                          <p className="text-gray-500 text-[13px] ">{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Models</h3>
                      {navData.products.sections.models.map((item, idx) => (
                        <div key={idx} className="group/link cursor-pointer flex items-center">
                          <div>
                            <h4 className="text-[14px] font-medium text-black group-hover/link:text-gray-600 transition-colors">
                              {item.title} {item.isNew && <NewTag />}
                            </h4>
                            <p className="text-gray-400 text-[12px] mt-0.5">{item.description}</p>
                          </div>
                        </div>
                      ))}
                      <div className="group/link cursor-pointer mt-2">
                        <h4 className="text-[14px] font-medium text-black hover:underline">Models Overview →</h4>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Product</h3>
                      {navData.products.sections.productLinks.map((item, idx) => (
                        <a key={idx} href={item.url} className="text-[14px] font-medium text-black hover:text-gray-600 transition-colors">{item.title}</a>
                      ))}
                    </div>
                  </div>
                  <div className={`w-[30%]  ${DROPDOWN_FEATURED_BG} p-8 border-l border-gray-100 flex flex-col `}>
                    <h3 className="text-gray-500 text-xs font-normal mb-6">Featured</h3>
                    <div className="group/feature cursor-pointer flex flex-col gap-3 overflow-hidden">
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        <img src={navData.products.featured.image} alt="Featured" className={`${FEATURED_IMAGE_WIDTH} ${FEATURED_IMAGE_HEIGHT} object-cover group-hover/feature:scale-105 transition-transform duration-500`} />
                      </div>
                      <p className="text-[14px] font-medium leading-relaxed group-hover/feature:text-gray-600 transition-colors">
                        {navData.products.featured.text}
                      </p>
                    </div>
                  </div>
                </div>
              </NavItem>

              {/* SOLUTIONS */}
              <NavItem title={navData.solutions.title} activeMenu={activeMenu} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isSwitching={isSwitching}>
                <div className="flex w-full">
                  <div className="w-[70%] p-8 flex gap-24">
                    <div className="flex flex-col gap-4 min-w-[250px]">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Deploy</h3>
                      {navData.solutions.sections.deploy.map((item, idx) => (
                        <div key={idx} className="group/link cursor-pointer">
                          <h4 className="text-[18px] font-medium text-black group-hover/link:text-gray-600 transition-colors">{item.title}</h4>
                          <p className="text-gray-500 text-[13px] mt-1">{item.description}</p>
                        </div>
                      ))}
                      <div className="group/link cursor-pointer mt-4">
                        <h4 className="text-[14px] font-medium text-black hover:underline">See deployment options →</h4>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">By Industry</h3>
                      {navData.solutions.sections.industries.map((item, idx) => (
                        <a key={idx} href="#" className="text-[14px] font-medium text-black hover:text-gray-600 transition-colors">{item}</a>
                      ))}
                    </div>
                  </div>
                  <div className={`w-[30%] ${DROPDOWN_FEATURED_BG} p-8 border-l border-gray-100 flex flex-col`}>
                    <h3 className="text-gray-500 text-xs font-normal mb-6">Featured</h3>
                    <div className="group/feature cursor-pointer flex flex-col gap-3 overflow-hidden">
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        <img src={navData.solutions.featured.image} alt="Featured" className={`${FEATURED_IMAGE_WIDTH} ${FEATURED_IMAGE_HEIGHT} object-cover group-hover/feature:scale-105 transition-transform duration-500`} />
                      </div>
                      <p className="text-[14px] font-medium leading-relaxed group-hover/feature:text-gray-600 transition-colors">
                        {navData.solutions.featured.text}
                      </p>
                    </div>
                  </div>
                </div>
              </NavItem>

              {/* RESOURCES */}
              <NavItem title={navData.resources.title} activeMenu={activeMenu} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isSwitching={isSwitching}>
                <div className="flex w-full">
                  <div className="w-[70%] p-8 flex gap-24">
                    <div className="flex flex-col gap-4 min-w-[200px]">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Insights</h3>
                      {navData.resources.sections.insights.map((item, idx) => (
                        <div key={idx} className="group/link cursor-pointer">
                          <h4 className="text-[18px] font-medium text-black hover:text-gray-600 transition-colors">{item.title}</h4>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 min-w-[150px]">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">For Developers</h3>
                      {navData.resources.sections.forDevelopers.map((item, idx) => (
                        <a key={idx} href="#" className="text-[14px] font-medium text-black hover:text-gray-600 transition-colors flex items-center">
                          {item.title} {item.external && <span className="ml-1 text-gray-400 text-xs">↗</span>}
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Connect</h3>
                      {navData.resources.sections.connect.map((item, idx) => (
                        <a key={idx} href="#" className="text-[14px] font-medium text-black hover:text-gray-600 transition-colors flex items-center">
                          {item.title} {item.external && <span className="ml-1 text-gray-400 text-xs">↗</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className={`w-[30%] ${DROPDOWN_FEATURED_BG} p-8 border-l border-gray-100 flex flex-col`}>
                    <h3 className="text-gray-500 text-xs font-normal mb-6">Featured</h3>
                    <div className="group/feature cursor-pointer flex flex-col gap-3 overflow-hidden">
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        <img src={navData.resources.featured.image} alt="Featured" className={`${FEATURED_IMAGE_WIDTH} ${FEATURED_IMAGE_HEIGHT} object-cover group-hover/feature:scale-105 transition-transform duration-500`} />
                      </div>
                      <p className="text-[14px] font-medium leading-relaxed group-hover/feature:text-gray-600 transition-colors">
                        {navData.resources.featured.text}
                      </p>
                    </div>
                  </div>
                </div>
              </NavItem>

              {/* BLOG */}
              <NavItem title={navData.blog.title} activeMenu={activeMenu} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isSwitching={isSwitching}>
                <div className="flex w-full">
                  <div className="w-[30%] p-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[20px] font-medium text-black">{navData.blog.info.title}</h4>
                      <p className="text-gray-400 text-[13px] mt-2">{navData.blog.info.description}</p>
                    </div>
                    <a href="#" className="text-[14px] font-medium text-black hover:underline mt-8 block">{navData.blog.info.link}</a>
                  </div>
                  <div className={`w-[70%] ${DROPDOWN_FEATURED_BG} p-8 border-l border-gray-100 grid grid-cols-3 gap-4`}>
                    {navData.blog.articles.map((item, idx) => (
                      <div key={idx} className="group/feature cursor-pointer flex flex-col gap-3">
                        <div className="rounded-lg overflow-hidden border border-gray-200">
                          <img src={item.image} alt="Blog" className={`${FEATURED_IMAGE_WIDTH} ${FEATURED_IMAGE_HEIGHT} object-cover group-hover/feature:scale-105 transition-transform duration-500`} />
                        </div>
                        <p className="text-[13px] font-medium leading-relaxed group-hover/feature:text-gray-600 transition-colors">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </NavItem>

              {/* RESEARCH */}
              <NavItem title={navData.research.title} activeMenu={activeMenu} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isSwitching={isSwitching}>
                <div className="flex w-full">
                  <div className="w-[70%] p-8 flex gap-16">
                    <div className="flex flex-col gap-4 min-w-[200px]">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Research</h3>
                      {navData.research.sections.research.map((item, idx) => (
                        <div key={idx} className="group/link cursor-pointer">
                          <h4 className="text-[20px] font-medium text-black hover:text-gray-600 transition-colors">{item.title}</h4>
                          {item.description && <p className="text-gray-500 text-[13px] mt-1">{item.description}</p>}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Explorations</h3>
                      {navData.research.sections.explorations.map((item, idx) => (
                        <div key={idx} className={`group/link cursor-pointer ${item.isLink ? 'mt-2' : ''}`}>
                          <h4 className={`text-[14px] font-medium text-black ${item.isLink ? 'hover:underline' : 'group-hover/link:text-gray-600 transition-colors'}`}>{item.title}</h4>
                          {item.description && <p className="text-gray-400 text-[12px] mt-0.5">{item.description}</p>}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Initiatives</h3>
                      {navData.research.sections.initiatives.map((item, idx) => (
                        <div key={idx} className="group/link cursor-pointer">
                          <h4 className="text-[14px] font-medium text-black group-hover/link:text-gray-600 transition-colors">{item.title}</h4>
                          <p className="text-gray-400 text-[12px] mt-0.5">{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-gray-400 text-xs font-normal uppercase tracking-wider mb-2">Resources</h3>
                      {navData.research.sections.resourcesLinks.map((item, idx) => (
                        <a key={idx} href="#" className="text-[14px] font-medium text-black hover:text-gray-600 transition-colors flex items-center">
                          {item.title} {item.external && <span className="ml-1 text-gray-400 text-xs">↗</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className={`w-[30%] ${DROPDOWN_FEATURED_BG} p-8 border-l border-gray-100 flex flex-col`}>
                    <h3 className="text-gray-500 text-xs font-normal mb-6">Featured</h3>
                    <div className="group/feature cursor-pointer flex flex-col gap-3 overflow-hidden">
                      <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                        <img src={navData.research.featured.image} alt="Featured" className={`${FEATURED_IMAGE_WIDTH} ${FEATURED_IMAGE_HEIGHT} object-cover group-hover/feature:scale-105 transition-transform duration-500`} />
                      </div>
                      <p className="text-[14px] font-medium leading-relaxed group-hover/feature:text-gray-600 transition-colors">
                        {navData.research.featured.text}
                      </p>
                    </div>
                  </div>
                </div>
              </NavItem>

              {/* COMPANY */}
              <NavItem title="Pricing" activeMenu={activeMenu} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} isSwitching={isSwitching} />

            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-6 h-full">
            <a href="#signin" className="hidden sm:block text-[14px] font-medium text-gray-700 hover:text-black transition-colors">
              Sign In
            </a>
            <div className="relative group/btn">
              {/* SHADOW CONTROL: Adjust translate-y-* (vertical) and translate-x-* (horizontal) to move the glow */}
              <div className="absolute -inset-0.5 translate-y-0 translate-x--0 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 rounded-full blur opacity-0 group-hover/btn:opacity-70 transition duration-500"></div>
              <a href="#demo" className="relative block px-5 py-2 text-[14px] font-medium text-white bg-[#111111] rounded-full hover:bg-black transition-colors">
                Request a demo
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
