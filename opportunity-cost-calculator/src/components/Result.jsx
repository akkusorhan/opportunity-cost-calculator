import React from "react";
import { ResponsiveLine } from '@nivo/line'

function Result({chartData}) {

    return (
      <div className="line-chart-container">

      {chartData === null ? null : 
        
          <ResponsiveLine
          data={chartData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          yFormat=" >-.2f"
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'transportation',
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 0,
              tickPadding: 10,
              tickRotation: 0,
              legend: 'count',
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: 'nivo', }}
          lineWidth={3}
          pointSize={5}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderColor={{ from: 'color', modifiers: [] }}
          pointLabelYOffset={-12}
          enableCrosshair={false}
          useMesh={true}
          legends={[]}
          motionConfig="stiff"
          theme={{
              "textColor": "#FFFFFF", 
              "fontFamily": "poppins",
              
              "tooltip": {
                  "container": {
                      "background": "#212121",
                      "color": "#ffffff", 
                      "fontSize": "12px"
  
                  }}}}
      />
      

    }
    </div>
    )
}

export default Result;