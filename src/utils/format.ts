import type { CurrencyCode } from '../types/etsy';

export function truncateTitle(title: string, max: number = 50): string {
    if (title.length <= max) return title;
    return `${title.slice(0, max)}…`;
}

export function formatPrice(currency: CurrencyCode, price: string): string {
    switch (currency) {
        case 'USD':
            return `$${price}`;
        case 'EUR':
            return `€${price}`;
        case 'GBP':
            return `£${price}`;
        default:
            return `${currency} ${price}`;
    }
}

export type StockLevelClass = 'stock-low' | 'stock-medium' | 'stock-high';

export function getStockLevelClass(quantity: number): StockLevelClass {
    if (quantity <= 10) return 'stock-low';
    if (quantity <= 20) return 'stock-medium';
    return 'stock-high';
}

export function formatQuantityLeft(quantity: number): string {
    return `${quantity} left`;
}