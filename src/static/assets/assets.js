
import profile from "../assets/pankaj.jpeg"
import search_vector from "./search vector.png"
import service from "./service.png"
import what_we_do from "./what we do.png"
import user_home from "./user-home-1.png"
import sell_banner from "./sale-banner.png"

const assets = {
    sell_banner,
    search_vector,
    PROFILE: profile,
    service,
    user_home,
    what_we_do
}

export const navlist = [
    {
        name: "Book Service",
        path: "service"
    },
    {
        name: "Buy",
        path: "buy"
    },
    {
        name: "Sell",
        path: "sell"
    },
    {
        name: "Extended warrenty",
        path: "warrenty"
    },

]
export const profileList = [
    { name: 'My Profile', path: '/profile' },
    { name: 'Track your request', path: 'track-request' },
    { name: 'Your work order', path: 'work-order' },
    { name: 'Quotation', path: 'quotation' },
    { name: 'Invoice', path: 'invoice' },
    { name: 'About Us', path: 'about' },
    { name: 'Contact Us', path: 'contact' },
    { name: 'Logout', path: 'logout' }
];

export default assets