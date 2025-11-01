import React from 'react'
import { topMenu } from '../../constant/Demodata'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'
import type { Resubment } from '../../AllTypes/AuthInterface'

const FrontNav: React.FC = () => {
  const [resubItem, setResubItem] = React.useState<{ [key: string]: Resubment[] }>({})

  return (
    <section className="mt-5">
      <section className='max-w-[1536px] mx-auto'>
        <nav className='grid grid-cols-12 items-center'>

          {/* Logo */}
          <div className='col-span-2 flex items-center  justify-center mix-blend-difference'>
            <img src='/images/whitelogo.png' className='h-10 w-30 ' alt='logo' />
          </div>

          {/* Menu */}
          <div className='col-span-8 flex items-center justify-center'>
            <menu className='bg-white/20 backdrop-blur-sm px-5 rounded-lg w-full'>
              <ul className='flex gap-9 items-center justify-center py-4'>
                {topMenu.map((item, idx) => (
                  <li key={idx} className={`relative ${item.accordion ? 'group' : ''}`}>

                    {/* Main Menu Link */}
                    <Link
                      to={item.href || "/"}
                      className='flex font-nexa-bold justify-center items-center gap-1 hover:text-primary transition-all text-white font-medium'
                    >
                      {item.title}
                      {item.accordion && <ChevronDown className='w-5 h-5 ml-1 transition-transform group-hover:rotate-180' />}
                    </Link>

                    {/* Main Dropdown */}
                    {item.accordion && item.pages && (
                      <ul className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                     translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out
                                     bg-gray-800 border border-gray-700 shadow-xl rounded-md px-5 py-2 z-50 min-w-[200px] whitespace-nowrap">
                        {item.pages.map((subItem, subIdx) => (
                          <li 
                            key={subIdx} 
                            className="relative"
                            onMouseEnter={() => {
                              if (subItem.accordion) {
                                setResubItem({ [subItem.anchor]: subItem.resubmenu || [] })
                              }
                            }}
                            onMouseLeave={() => setResubItem({})}
                          >
                            {/* Sub Menu Link */}
                            <Link
                              to={subItem.href}
                              className='flex justify-between items-center gap-1 block py-2 text-white font-medium hover:text-primary transition-all'
                            >
                              {subItem.anchor}
                              {subItem.accordion && <ChevronRight className='w-4 h-4 ml-2' />}
                            </Link>

                            {/* Sub-Sub Menu */}
                            {subItem.accordion && resubItem[subItem.anchor] && (
                              <ul className="absolute top-0 left-full bg-gray-700 border border-gray-600 shadow-2xl rounded-md px-3 py-2 z-[60] min-w-[180px] whitespace-nowrap">
                                {resubItem[subItem.anchor].map((resub: Resubment, resubIdx: number) => (
                                  <li key={resubIdx}>
                                    <Link
                                      to={resub.href}
                                      className='block py-1 text-white hover:text-primary transition-all'
                                    >
                                      {resub.anchor}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}

                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </menu>
          </div>

          {/* Contact Button */}
          <div className="col-span-2 flex items-center justify-center pr-5">
            <Link
              to='/contact'
              className='px-6 rounded-lg py-3 hover:bg-white/20 backdrop-blur-sm ring-primary ring-1 bg-primary text-white transition-colors'
            >
              Contact Us
            </Link>
          </div>

        </nav>
      </section>
    </section>
  )
}

export default FrontNav
