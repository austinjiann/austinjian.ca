import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  items: Array<{ label: string; id: string }>;
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const checkActiveSection = () => {
      if (window.scrollY < 100) {
        setActiveId(items[0]?.id || '');
        return;
      }

      let closestSection = items[0]?.id || '';
      let closestDistance = Infinity;

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100); // Distance from 100px from top
          if (distance < closestDistance && rect.top < window.innerHeight * 0.6) {
            closestDistance = distance;
            closestSection = item.id;
          }
        }
      }
      setActiveId(closestSection);
    };

    checkActiveSection();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          setActiveId(mostVisible.target.id);
        }
      },
      { 
        rootMargin: '-20% 0px -35% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    // Add scroll listener to handle edge cases
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveId(items[0]?.id || '');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        left: 'calc(50% + 375px + 3rem)', 
        top: '150px',
        width: '200px',
        display: 'none', 
      }}
      className="toc-sidebar"
    >
      <style>
        {`
          @media (min-width: 1300px) {
            .toc-sidebar {
              display: block !important;
            }
          }
        `}
      </style>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ 
          color: '#666', 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          marginBottom: '16px',
          fontWeight: 600
        }}>
          Contents
        </li>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '12px' }}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              style={{
                textDecoration: 'none',
                color: activeId === item.id ? '#fff' : '#888',
                fontSize: '0.9rem',
                transition: 'color 0.2s ease',
                display: 'block',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = activeId === item.id ? '#fff' : '#888'}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
