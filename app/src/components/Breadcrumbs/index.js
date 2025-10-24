'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  BreadcrumbNav,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbCurrent,
  BreadcrumbSeparator,
} from './BreadcrumbsElements';

// Helper function to format path segments
const formatSegment = (segment) => {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Breadcrumbs = ({ customLabels = {} }) => {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on homepage
  if (!pathname || pathname === '/') {
    return null;
  }
  
  // Split pathname into segments
  const segments = pathname.split('/').filter(segment => segment);
  
  // Build breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const label = customLabels[segment] || formatSegment(segment);
      return { label, href };
    }),
  ];
  
  return (
    <BreadcrumbNav aria-label="Breadcrumb navigation">
      <BreadcrumbList
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <BreadcrumbItem
              key={item.href}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {!isLast ? (
                <>
                  <BreadcrumbLink
                    href={item.href}
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </BreadcrumbLink>
                  <meta itemProp="position" content={String(index + 1)} />
                  <BreadcrumbSeparator aria-hidden="true" />
                </>
              ) : (
                <>
                  <BreadcrumbCurrent
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.label}
                  </BreadcrumbCurrent>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

export default Breadcrumbs;