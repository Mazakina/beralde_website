export interface ProductsProps {
    id: string;
    name: string;
    description: string;
    image_path: string;
    sub_types: string[];
    type: string;
    available: boolean; // Changed to camelCase
}

export class ProductMapper {
    static fromDatabase(data: ProductsProps) {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            imagePath: data.image_path,
            type: data.type,
            subTypes: data.sub_types,
            available: data.available // Map database field to camelCase
        };
    }
}