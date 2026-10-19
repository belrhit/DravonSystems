'use client';

import React, { useState, useRef } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { createDOMRenderer, RendererProvider, SSRProvider } from '@fluentui/react-components';
import { renderToStyleElements } from '@griffel/react';

export function FluentClientProvider({ children }: { children: React.ReactNode }) {
  const [renderer] = useState(() => createDOMRenderer());
  const didRenderRef = useRef(false);

  useServerInsertedHTML(() => {
    if (didRenderRef.current) {
      return null;
    }
    didRenderRef.current = true;
    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>{children}</SSRProvider>
    </RendererProvider>
  );
}
