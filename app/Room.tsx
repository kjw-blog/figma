'use client';

import { ReactNode } from 'react';
import { RoomProvider } from '../liveblocks.config';
import { ClientSideSuspense } from '@liveblocks/react';

// 협업이 이루어지는 가상의 Room 컴포넌트
export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
