import React from 'react';

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const HeartIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path fillRule="evenodd" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" clipRule="evenodd" />
    </svg>
);

export const CatIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 2.5l-1.5 2-1.5-2h3zm-6 0l-1.5 2-1.5-2h3zm7.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 4.5c0 1.38 1.12 2.5 2.5 2.5h3c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5h-3c-1.38 0-2.5 1.12-2.5 2.5z" />
    </svg>
);

export const RabbitIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM9.5 3c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6C11 3.67 10.33 3 9.5 3zm5 0c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4C16 3.67 15.33 3 14.5 3zM9 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-3 3a1 1 0 01-2 0v-1a1 1 0 112 0v1z" />
    </svg>
);

export const FoxIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
        <path d="M18.25 3.17c-2.07-1.56-4.59-2.17-7.25-2.17s-5.18.61-7.25 2.17C2.12 4.14 1 6.18 1 8.5c0 4.49 4.01 8.32 9.42 9.34.9.18 1.76.26 2.58.26s1.68-.08 2.58-.26C20.99 16.82 25 12.99 25 8.5c0-2.32-1.12-4.36-2.75-5.33zM9 12.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" transform="scale(0.9) translate(0, 2)" />
    </svg>
);

export const ButterflyIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 2.5c-2.4 0-4.6.93-6.26 2.61L12 12l6.26-6.89C16.6 3.43 14.4 2.5 12 2.5zm0 19c2.4 0 4.6-.93 6.26-2.61L12 12l-6.26 6.89C7.4 21.07 9.6 21.5 12 21.5zM3.11 6.26C2.18 7.92 1.75 9.89 1.75 12s.43 4.08 1.37 5.74L12 12 3.11 6.26zm17.78 0L12 12l8.89 5.74c.93-1.66 1.37-3.63 1.37-5.74s-.43-4.08-1.37-5.74z" />
    </svg>
);

export const OwlIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1-.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zM6.03 4.97a.5.5 0 01.71 0l.71.71a.5.5 0 01-.71.71l-.71-.71a.5.5 0 010-.71zm11.94 0a.5.5 0 01.71.71l-.71.71a.5.5 0 01-.71-.71l.71-.71zM9.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm9 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12 14.5l-2 2h4l-2-2z" />
    </svg>
);

export const UnicornIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M18.69 3.13C16.69 2.1 14.4 1.5 12 1.5s-4.69.6-6.69 1.63C3.61 4.12 2.5 6.16 2.5 8.5c0 4.16 3.6 7.62 8.31 8.41.44.08.88.13 1.32.13.38 0 .76-.03 1.13-.09 5.25-1.06 8.24-5.06 8.24-8.45 0-2.34-1.11-4.38-2.81-5.37zM12 4l1.5 4h-3L12 4zm-3.5 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
);
