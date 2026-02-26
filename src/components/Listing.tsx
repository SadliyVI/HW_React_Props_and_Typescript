import type { EtsyListingItem } from '../types/etsy';
import {
    formatPrice,
    formatQuantityLeft,
    getStockLevelClass,
    truncateTitle,
} from '../utils/format';

export interface ListingProps {
    items?: EtsyListingItem[];
}

export function Listing({ items = [] }: ListingProps) {
    const filtered = items.filter((item) => item.MainImage?.url_570xN);

    return (
        <div className="product-grid">
            {filtered.map((item) => {
                const title = truncateTitle(item.title, 50);
                const price = formatPrice(item.currency_code, item.price);
                const stockClass = getStockLevelClass(item.quantity);

                return (
                    <a
                        key={item.listing_id}
                        href={item.url}
                        className="product-card"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {item.is_digital ? <span className="digital-badge">Digital</span> : null}

                        {/* <img
                            src={item.MainImage!.url_570xN}
                            alt={item.title}
                            className="product-image"
                        /> */}

                        <img
                            src={item.MainImage!.url_570xN}
                            alt={item.title}
                            className="product-image"
                            referrerPolicy="no-referrer"
                            crossOrigin="anonymous"
                        />

                        <div className="product-info">
                            <h3 className="product-title">{title}</h3>

                            <div className="price-container">
                                <div className="product-price">{price}</div>
                                <span className={`stock-badge ${stockClass}`}>
                                    {formatQuantityLeft(item.quantity)}
                                </span>
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    );
}