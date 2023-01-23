import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inejct, DateTime, Legend, Tooltip, Chart, Category, Inject, ColumnSeries,DataLabel } from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

import { Header } from '../../components'

const Bar = () => {
  return (
    <div className=' m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Inflation Rate in Percantage"/>     
      <ChartComponent
        id="line-chart"
        height='420px'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{border:{width:0}}}
        tooltip={{enable:true}}

      >
        <Inject services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item,index)=>
            <SeriesDirective key={index} {...item}/>
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar