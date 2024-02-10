import React from 'react'
import { Link } from 'react-scroll'
import{logo} from "../../assets/index"
import { navLinksdata } from '../../constants'

const Navbar = () => {
    return ( 
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] cursor-pointer font-titleFont border-b-black">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    {
                        navLinksdata.map(({_id, title, link})=>(
                            <li 
                                className= "text-base font-normal text-black tracking-wide curson-pointer hover:text-designColor duration-300"
                                key={_id}
                                >
                                <Link
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar