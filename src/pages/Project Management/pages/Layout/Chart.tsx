/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from 'react'
import { Pie } from 'react-chartjs-2'

interface PieChartProps {
  billData: any
  overtimeData: any
}

export const PieChart: React.FC<PieChartProps> = ({
  overtimeData,
  billData
}) => {
  return (
    <div
      className="chart-container"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <div className="chart-column inline" style={{ flex: 1 }}>
        <Pie
          data={billData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Billable and Non-Billable Hours Tracked'
              }
            }
          }}
        />
      </div>
      <div className="chart-column inline -mt-6" style={{ flex: 1 }}>
        <Pie
          className="mt-6 inline"
          data={overtimeData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Normal and Overtime Hours Tracked'
              }
            }
          }}
        />
      </div>
    </div>
  )
}
