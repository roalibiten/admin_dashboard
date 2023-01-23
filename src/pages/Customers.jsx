import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective,  Page, Search, Edit, Inject, Toolbar, Selection, Filter, Sort} from "@syncfusion/ej2-react-grids"

import { customersData, contextMenuItems, customersGrid  } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className=' m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete', 'Add']}
        editSettings={{allowDeleting:true, allowEditing:true, allowAdding:true}}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[ Page,  Edit,Search, Toolbar, Selection, Filter, Sort ]} />
      </GridComponent>
    </div>
  )
}

export default Customers