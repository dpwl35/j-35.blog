import { ReactNode, AnchorHTMLAttributes } from 'react';
import React from 'react';

interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  href: string;
}

export function A({ children, className = 'post-link', href, ...props }: AProps) {
  if (href.startsWith('#')) {
    // 앵커 링크의 경우
    return (
      <a className={`${className}`} href={href} {...props}>
        {children}{' '}
      </a>
    );
  } else if (href.startsWith('/') || href.startsWith('http')) {
    // 내부 링크 및 외부 링크 처리
    return (
      <a
        href={href}
        className={`${className}`}
        {...props}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}{' '}
      </a>
    );
  } else {
    // 기본 반환값 처리
    return (
      <span className={`${className}`} {...props}>
        {children}{' '}
      </span>
    );
  }
}
