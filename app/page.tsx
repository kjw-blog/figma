'use client';

import Live from '@/components/Live';

export default function Home() {
  return (
    <div className="h-[100dvh] w-full flex justify-center items-center text-center">
      <h1 className="text-2xl text-white">Liveblocks Figma Clone</h1>
      <Live />
    </div>
  );
}
