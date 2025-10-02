// components/TypedText.tsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 2000,
  loop = true,
  showCursor = true,
  cursorChar = '|',
  className = '',
}) => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        showCursor,
        cursorChar,
      });
    }

    return () => {
      typedInstance.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop, showCursor, cursorChar]);

  return <span ref={typedRef} className={className}></span>;
};

export default TypedText;