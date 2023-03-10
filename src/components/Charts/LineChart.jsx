import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inejct, DateTime, Legend, Tooltip, Chart, Inject, LineSeries } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
  return (
    <ChartComponent
      id="line-chart"
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}

    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=>
          <SeriesDirective key={index} {...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart