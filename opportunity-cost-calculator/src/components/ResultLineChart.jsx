import React from "react";

import { ResponsiveLine } from '@nivo/line'

function ResultLineChart({ symbolList, setSymbolList, amountSaved, setAmountSaved, timeHorizon, setTimeHorizon, submissionData, setSubmissionData }) {
  console.log(submissionData)
    return(
      <ResponsiveLine
          data={submissionData}
          margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
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
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 0,
              tickPadding: 10,
              tickRotation: 0,
          }}
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: 'nivo', }}
          lineWidth={1}
          pointSize={3}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderColor={{ from: 'color', modifiers: [] }}
          pointLabelYOffset={-12}
          enableCrosshair={false}
          enableSlices="x"
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
                      "fontSize": "10px"
  
                  }}}}
      />
    )

}

export default ResultLineChart