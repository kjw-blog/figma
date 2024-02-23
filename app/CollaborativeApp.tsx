'use client';

import { useOthers } from '../liveblocks.config';

export function CollaborativeApp() {
  const others = useOthers(); // 같은 Room에서 협업하는 사용자 정보를 담은 hook
  const userCount = others.length;

  return <div>There are {userCount} other user(s) online</div>;
}
