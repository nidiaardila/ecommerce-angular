export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
    //propiedades adicionales creadas, no vienen en la API
    quantity:    number;
    subTotal:    number;
}

interface Rating {
    rate:  number;
    count: number;
}
