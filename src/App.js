import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {Navbar, Footer, Sidebar, ThemeSettings} from './components'

import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor} from './pages'

import { useStateContext } from './contexts/ContextProvider';

import './App.css';



function App() {
  const {activeMenu, themeSettings, setThemeSettings,currentColor, currentMode} = useStateContext()

  return (
    <div className={currentMode==="Dark" ? 'dark':''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
            <TooltipComponent content="Settings" position='Top' >
              <button 
                type='button' 
                className=' text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{background:currentColor, borderRadius:'50%'}}
                onClick={()=>setThemeSettings(true)}
              >
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>

          {activeMenu?
            <div className=' w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div>
            :
            <div className=' w-0  dark:bg-secondary-dark-bg'>
              <Sidebar/>
            </div>
          }
          <div className={
            ` dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu? "md:ml-72" : "flex-2 "} 
            `
             }
          >
            <div className=' fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
              <Navbar/>
            </div>

          <div className=' p-2 pt-16 md:pt-0'>
            {themeSettings&&<ThemeSettings/>}
            <Routes>
              {/** Dashboard */}
              <Route path='/admin_dashboard' element={<Ecommerce/>} />
              <Route path='/admin_dashboard/ecommerce' element={<Ecommerce/>} />
              {/** Pages */}
              <Route path='/admin_dashboard/orders' element={<Orders/>} />
              <Route path='/admin_dashboard/employees' element={<Employees/>} />
              <Route path='/admin_dashboard/customers' element={<Customers/>} />
              {/** Apps */}
              <Route path='/admin_dashboard/calendar' element={<Calendar/>} />
              <Route path='/admin_dashboard/kanban' element={<Kanban/>} />
              <Route path='/admin_dashboard/editor' element={<Editor/>} />
              <Route path='/admin_dashboard/color-picker' element={<ColorPicker/>} />
              {/** Charts */}
              <Route path='/admin_dashboard/line' element={<Line/>} />
              <Route path='/admin_dashboard/area' element={<Area/>} />
              <Route path='/admin_dashboard/bar' element={<Bar/>} />
              <Route path='/admin_dashboard/pie' element={<Pie/>} />
              <Route path='/admin_dashboard/financial' element={<Financial/>} />
              <Route path='/admin_dashboard/color-mapping' element={<ColorMapping/>} />
              <Route path='/admin_dashboard/pyramid' element={<Pyramid/>} />
              <Route path='/admin_dashboard/stacked' element={<Stacked/>} />

            </Routes>
          </div>
          </div>


        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
