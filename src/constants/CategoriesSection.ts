export interface Category {
    title: string;
    color: string;
    src: string;
}

export const CATEGORIES: Category[] = [
    {
        title: 'Breakfast',
        color: 'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)',
        src: 'breakfast'
    },
    {
        title: 'Vegan',
        color: 'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);',
        src: 'vegan'
    },
    {
        title: 'Meat',
        color: 'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%);',
        src: 'meat'
    },
    {
        title: 'Dessert',
        color: 'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);',
        src: 'dessert'
    },
    {
        title: 'Lunch',
        color: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
        src: 'lunch'
    },
    {
        title: 'Chocolate',
        color: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
        src: 'chocolate'
    },
]