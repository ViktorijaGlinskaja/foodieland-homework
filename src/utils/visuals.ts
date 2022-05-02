import logo from 'assets/images/logo.svg'
import facebook from 'assets/images/facebook.svg'
import instagram from 'assets/images/instagram.svg'
import twitter from 'assets/images/twitter.svg'
import divider from 'assets/images/divider.svg'
import wings from 'assets/images/chicken-wings.png'
import recipe from 'assets/images/recipe.svg'
import timer from 'assets/images/timer.svg'
import fork from 'assets/images/ForkKnife.svg'


export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
    logo,
    facebook,
    instagram,
    twitter,
    divider,
    wings,
    recipe,
    timer,
    fork,
}