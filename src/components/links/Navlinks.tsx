import { Link, useLocation } from "react-router-dom"

type FooterLinkProps = {
    isFooter: boolean
}

const Navlinks = ({ isFooter }: FooterLinkProps) => {
    const { pathname } = useLocation()
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]
    return (
        <>
            {
                links.map((link, id) => {
                    return <Link className={`text-[#011632] ${pathname === link.path ? "font-bold" : "font-normal"} ${isFooter ? "font-normal" : "font-medium"} text-[16px] tracking-wider`} to={link.path} key={id}>{link.name}</Link>
                })
            }
        </>
    )
}
export default Navlinks