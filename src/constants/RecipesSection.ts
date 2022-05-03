export interface Recipe {
    title: string,
    time?: string,
    category?: string,
    img: string,
}

export const RECIPES: Recipe[] = [
    {
        title: 'Big and Juicy Wagyu Beef Cheeseburger',
        time: '30 Minutes',
        category: 'Snack',
        img: 'burger'
    },
    {
        title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
        time: '30 Minutes',
        category: 'Fish',
        img: 'salmon'
    },
    {
        title: 'Strawberry Oatmeal Pancake with Honey Syrup',
        time: '30 Minutes',
        category: 'Breakfast',
        img: 'pancake'
    },
    {
        title: 'Fresh and Healthy Mixed Mayonnaise Salad',
        time: '30 Minutes',
        category: 'Healthy',
        img: 'salad'
    },
    {
        title: 'Chicken Meatballs with Cream Cheese',
        time: '30 Minutes',
        category: 'Snack',
        img: 'meatball'
    },
    {
        title: 'Ad',
        img: 'Ads',
    },
    {
        title: 'Fruity Pancake with Orange & Blueberry',
        time: '30 Minutes',
        category: 'Sweet',
        img: 'fruityPancake'
    },
    {
        title: 'The Best Easy One Pot Chicken and Rice',
        time: '30 Minutes',
        category: 'Snack',
        img: 'chickenRice'
    },
    {
        title: 'The Creamiest Creamy Chicken and Bacon Pasta',
        time: '30 Minutes',
        category: 'Noodles',
        img: 'chickenPasta'
    },
]