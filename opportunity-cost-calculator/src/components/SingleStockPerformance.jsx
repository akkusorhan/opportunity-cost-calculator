import React from "react";
import { ResponsiveLine } from '@nivo/line'


function SingleStockPerformance({symbolList, primaryLineChartDataPoints, amountSaved}) {

    function LineChart(data) {
      return (
        <ResponsiveLine
        data={data.data}
        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        curve="natural"
        yFormat=" >-.2f"
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
            tickPadding: 5,
            tickRotation: 0,
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'category10' }}
        lineWidth={1}
        enablePoints={false}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaOpacity={0}
        enableCrosshair={false}
        useMesh={true}
        legends={[]}
        theme={{
          "textColor": "#FFFFFF", 
          "fontFamily": "poppins",
          "fontSize": "10px",
          
          "tooltip": {
              "container": {
                  "background": "#212121",
                  "color": "#ffffff", 
                  "fontSize": "10px"

              }}}}
    />
      )
    }

    return (
        <>
        {
            primaryLineChartDataPoints.length === symbolList.length ? symbolList.map((item, index) => {


                let symbolListTicker = item.ticker;
                let getLineChartDataPoints = primaryLineChartDataPoints.find(obj => obj.id === symbolListTicker) 
                let lineChartDataPoints = [getLineChartDataPoints]

                let finalPointArray = lineChartDataPoints[0].data
                let finalPoint = finalPointArray[finalPointArray.length - 1].y

                
                
                let investedAmount = amountSaved / symbolList.length
                let totalReturnAmount = finalPoint
                let totalGainAmount = 0;
                let gainOrLoss = "";
                let gainOrLossColor;




                investedAmount >= totalReturnAmount ? totalGainAmount = investedAmount - totalReturnAmount : totalGainAmount = totalReturnAmount - investedAmount;
                finalPoint <= investedAmount ? gainOrLoss = "Loss: -$" : gainOrLoss = "Gain: +$"
                finalPoint <= investedAmount ? gainOrLossColor = "#ff0000" : gainOrLossColor = "#00ff00"
                

    
                return (
                    <span className="individual-stock-result">
                            <div key={item.ticker} className="result-single-stocks-item">
                                <img key={Math.random() * 100} src={`${item.logo}`} />
                                <p key={Math.random() * 100}>${item.ticker}</p>
                            </div>
                        
                        <span className="line-chart"><LineChart className="test" data={lineChartDataPoints}/></span>
                        <div className="result-single-stock-details">
                            <p>Invested: ${investedAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                            <p style={{color: `${gainOrLossColor}`}}>{gainOrLoss}{totalGainAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                        </div>
                    </span>
                    
                )
            }) : null
                

        }
      </>
        
    )
}

export default SingleStockPerformance


/* 
            const symbolListTicker = item.ticker;
            const getlineChartDataPoints = primaryLineChartDataPoints.find(obj => obj.id === symbolListTicker) 
            lineChartDataPoints = [getlineChartDataPoints]
*/