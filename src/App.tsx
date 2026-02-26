import { Listing } from './components/Listing';
import type { EtsyListingItem } from './types/etsy';

import data from './etsy.json';

export function App() {
  // Типизируем импортированный JSON без any:
  const items = data as unknown as EtsyListingItem[];

  return (
    <div className="container">
      <Listing items={items} />
    </div>
  );
}