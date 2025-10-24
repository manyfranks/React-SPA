'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  CarouselContainer,
  SlideWrapper,
  SlideImage,
  SlideOverlay,
  SlideContent,
  SlideTitle,
  SlideDescription,
  ProgressBar,
  ProgressFill,
  TwoUpRow,
  TwoUpSlide,
} from './HeroCarouselElements';

/**
 * HeroCarousel Component
 *
 * A flexible, auto-rotating image carousel for hero sections with support for both
 * single-image and two-up (side-by-side) layouts.
 *
 * @param {Object} props
 * @param {Array} props.slides - Array of slide objects with imageSrc, title, description
 * @param {number} props.interval - Rotation interval in milliseconds (default: 6000)
 * @param {boolean} props.showProgress - Show progress bar indicator (default: true)
 * @param {boolean} props.showOverlay - Show gradient overlay and text content (default: true)
 * @param {boolean} props.twoUp - Enable two-up side-by-side layout (default: false)
 * @param {number} props.collapseAt - Breakpoint (px) to collapse two-up to single (default: 640)
 * @param {number} props.heightVh - Height in vh units (overrides aspect-ratio) (default: null)
 * @param {number} props.minHeight - Minimum height in px when using heightVh (default: 240)
 * @param {number} props.maxHeight - Maximum height in px when using heightVh (default: 360)
 *
 * @example
 * // Standard single-image carousel
 * <HeroCarousel slides={slides} interval={6000} />
 *
 * @example
 * // Two-up carousel with custom height (e.g., /services page)
 * <HeroCarousel
 *   slides={slides}
 *   interval={6000}
 *   twoUp={true}
 *   collapseAt={640}
 *   showOverlay={false}
 *   showProgress={false}
 *   heightVh={33}
 *   minHeight={240}
 *   maxHeight={360}
 * />
 */
const HeroCarousel = ({
  slides = [],
  interval = 6000,
  showProgress = true,
  showOverlay = true,
  twoUp = false,
  collapseAt = 640,
  heightVh = null,
  minHeight = 240,
  maxHeight = 360,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const nextImageRef = useRef(null);

  // Preload next image
  const preloadNextImage = useCallback(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    if (slides[nextIndex]?.imageSrc && nextImageRef.current) {
      nextImageRef.current.src = slides[nextIndex].imageSrc;
    }
  }, [currentSlide, slides]);

  // Advance to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  // Setup Intersection Observer to pause when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Handle auto-rotation and progress
  useEffect(() => {
    if (!isVisible || slides.length <= 1) {
      return;
    }

    // Clear existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    // Set up slide rotation
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, interval);

    // Set up progress bar animation (update every 50ms for smooth animation)
    const progressStep = (50 / interval) * 100;
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + progressStep;
      });
    }, 50);

    // Preload next image
    preloadNextImage();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentSlide, interval, isVisible, nextSlide, preloadNextImage, slides.length]);

  // Don't render if no slides
  if (!slides || slides.length === 0) {
    return null;
  }

  // Two-up mode: render side-by-side sliding window
  if (twoUp) {
    const firstIndex = currentSlide;
    const secondIndex = (currentSlide + 1) % slides.length;
    const activeSlides = [slides[firstIndex], slides[secondIndex]];

    return (
      <CarouselContainer
        ref={containerRef}
        role="region"
        aria-label="Image carousel"
        aria-live="polite"
        heightVh={heightVh}
        minHeight={minHeight}
        maxHeight={maxHeight}
      >
        <TwoUpRow collapseAt={collapseAt}>
          {activeSlides.map((slide, idx) => (
            <TwoUpSlide key={idx} collapseAt={collapseAt}>
              <SlideImage
                src={slide.imageSrc}
                alt={slide.title || `Slide ${idx + 1}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {showOverlay && <SlideOverlay />}
              {showOverlay && (slide.title || slide.description) && (
                <SlideContent>
                  {slide.title && <SlideTitle>{slide.title}</SlideTitle>}
                  {slide.description && (
                    <SlideDescription>{slide.description}</SlideDescription>
                  )}
                </SlideContent>
              )}
            </TwoUpSlide>
          ))}
        </TwoUpRow>
        
        {/* Hidden image for preloading next slide */}
        <img
          ref={nextImageRef}
          style={{ display: 'none' }}
          alt=""
          aria-hidden="true"
        />
        
        {/* Progress bar */}
        {showProgress && slides.length > 1 && (
          <ProgressBar aria-hidden="true">
            <ProgressFill progress={progress} />
          </ProgressBar>
        )}
      </CarouselContainer>
    );
  }

  // Standard single-image mode
  return (
    <CarouselContainer
      ref={containerRef}
      role="region"
      aria-label="Image carousel"
      aria-live="polite"
      heightVh={heightVh}
      minHeight={minHeight}
      maxHeight={maxHeight}
    >
      {slides.map((slide, index) => (
        <SlideWrapper
          key={index}
          isActive={index === currentSlide}
          aria-hidden={index !== currentSlide}
        >
          <SlideImage
            src={slide.imageSrc}
            alt={slide.title || `Slide ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {showOverlay && <SlideOverlay />}
          {showOverlay && (slide.title || slide.description) && (
            <SlideContent>
              {slide.title && <SlideTitle>{slide.title}</SlideTitle>}
              {slide.description && (
                <SlideDescription>{slide.description}</SlideDescription>
              )}
            </SlideContent>
          )}
        </SlideWrapper>
      ))}
      
      {/* Hidden image for preloading next slide */}
      <img
        ref={nextImageRef}
        style={{ display: 'none' }}
        alt=""
        aria-hidden="true"
      />
      
      {/* Progress bar */}
      {showProgress && slides.length > 1 && (
        <ProgressBar aria-hidden="true">
          <ProgressFill progress={progress} />
        </ProgressBar>
      )}
    </CarouselContainer>
  );
};

export default HeroCarousel;