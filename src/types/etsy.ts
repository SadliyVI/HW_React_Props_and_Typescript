export type CurrencyCode = string;

export interface EtsyMainImage {
    url_570xN: string;
}

export interface EtsyListingItem {
    listing_id: number;
    url: string;
    MainImage?: EtsyMainImage;
    title: string;
    currency_code: CurrencyCode;
    price: string;
    quantity: number;
    is_digital?: boolean;
}