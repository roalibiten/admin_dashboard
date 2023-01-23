import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inejct, DateTime, Legend, Tooltip, Chart, Inject, SplineAreaSeries } from '@syncfusion/ej2-react-charts'

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

import { Header } from '../../components'

const Area = () => {
  return (
    <div className=' m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Inflation Rate in Percantage"/>     
      <ChartComponent
        id="line-chart"
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{border:{width:0}}}
        tooltip={{enable:true}}

      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]}/>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item,index)=>
            <SeriesDirective key={index} {...item}/>
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area