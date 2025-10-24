'use client';

import React from 'react';
import Image from 'next/image';
import {
  CardGridContainer,
  Card,
  CardImageWrapper,
  CardContent,
  CardIcon,
  CardTitle,
  CardDescription,
  CardMeta,
  CardBadge,
  CardFooter,
} from './CardGridElements';

/**
 * CardGrid Component
 * 
 * A flexible, reusable grid component for displaying cards with images, titles, descriptions, and more.
 * 
 * @param {Object} props
 * @param {Array} props.items - Array of card items to display
 * @param {number} props.columns - Number of columns (2, 3, 4, or 'auto')
 * @param {boolean} props.showImage - Whether to show images
 * @param {boolean} props.showIcon - Whether to show icons
 * @param {boolean} props.compact - Use compact padding
 * @param {string} props.variant - Card variant ('primary' or 'secondary')
 */
const CardGrid = ({
  items = [],
  columns = 'auto',
  showImage = true,
  showIcon = false,
  compact = false,
  variant = 'secondary',
  imageHeight = '200px',
  titleSize = 'medium',
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <CardGridContainer columns={columns}>
      {items.map((item, index) => (
        <Card
          key={item.id || index}
          href={item.href}
          variant={variant}
        >
          {/* Card Image */}
          {showImage && item.imageSrc && (
            <CardImageWrapper height={imageHeight}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt || item.title || ''}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading={index < 4 ? 'eager' : 'lazy'}
              />
            </CardImageWrapper>
          )}

          {/* Card Content */}
          <CardContent compact={compact}>
            {/* Icon */}
            {showIcon && item.icon && (
              <CardIcon aria-hidden="true">{item.icon}</CardIcon>
            )}

            {/* Badge */}
            {item.badge && (
              <div>
                <CardBadge variant={item.badgeVariant || 'default'}>
                  {item.badge}
                </CardBadge>
              </div>
            )}

            {/* Title */}
            {item.title && (
              <CardTitle size={titleSize}>{item.title}</CardTitle>
            )}

            {/* Description */}
            {item.description && (
              <CardDescription>{item.description}</CardDescription>
            )}

            {/* Meta Information */}
            {item.meta && (
              <CardMeta>
                {Array.isArray(item.meta) ? (
                  item.meta.map((metaItem, i) => (
                    <span key={i}>{metaItem}</span>
                  ))
                ) : (
                  <span>{item.meta}</span>
                )}
              </CardMeta>
            )}
          </CardContent>

          {/* Card Footer */}
          {item.footer && (
            <CardFooter>
              {typeof item.footer === 'string' ? (
                <span>{item.footer}</span>
              ) : (
                item.footer
              )}
            </CardFooter>
          )}
        </Card>
      ))}
    </CardGridContainer>
  );
};

export default CardGrid;

// Export individual components for custom usage
export {
  CardGridContainer,
  Card,
  CardImageWrapper,
  CardContent,
  CardIcon,
  CardTitle,
  CardDescription,
  CardMeta,
  CardBadge,
  CardFooter,
};