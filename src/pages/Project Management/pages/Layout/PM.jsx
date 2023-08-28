/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { PieChart } from './Chart'
import DatePicker from 'react-datepicker'
import { getTimesheetTeams } from '../../services/ProjectServices'
import 'react-datepicker/dist/react-datepicker.css'

Chart.register(CategoryScale)

export const PM = () => {
  const formatDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  const [hoursTracked, setHoursTracked] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState()
  const [billData, setBillData] = useState([])
  const [overtimeData, setOvertimeData] = useState([])
  const [isData, SetIsData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (startDate !== null && endDate !== null) {
        try {
          const data = await getTimesheetTeams(
            formatDate(startDate),
            formatDate(endDate)
          )
          const billableHours = data.billable / 60
          const nonBillableHours = data.nonBillable / 60
          const hourTracked = data.hoursTracked / 60
          const normalWorkingHours = data.normalWorkingHours / 60
          const overtimeBillable = data.overtimeBillable / 60
          const overtimeNonBillable = data.overtimeNonBillable / 60
          const updatedBillData = [
            {
              id: 1,
              title: 'Billable',
              userGain: billableHours
            },
            {
              id: 2,
              title: 'No-Billable',
              userGain: nonBillableHours
            }
          ]
          const updatedOvertimeData = [
            {
              id: 1,
              title: 'Normal Working Hours',
              userGain: normalWorkingHours
            },
            {
              id: 2,
              title: 'Overtime Billable',
              userGain: overtimeBillable
            },
            {
              id: 3,
              title: 'Overtime Non-Billable',
              userGain: overtimeNonBillable
            }
          ]
          setBillData(updatedBillData)
          setOvertimeData(updatedOvertimeData)
          setHoursTracked(hourTracked)

          const updatedChartData = {
            labels: updatedBillData.map((data) => data.title),
            datasets: [
              {
                label: 'Hours',
                data: updatedBillData.map((data) => data.userGain),
                backgroundColor: ['#50AF95', '#f3ba2f'],
                borderColor: 'none',
                borderWidth: 0,
                hoverOffset: 4
              }
            ]
          }
          const updatedOvertimeChartData = {
            labels: updatedOvertimeData.map((data) => data.title),
            datasets: [
              {
                label: 'Hours',
                data: updatedOvertimeData.map((data) => data.userGain),
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                borderColor: 'none',
                borderWidth: 0,
                hoverOffset: 4
              }
            ]
          }

          setChartBillData(updatedChartData)
          setChartOvertimeData(updatedOvertimeChartData)
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetchData()
  }, [startDate, endDate])

  const [chartBillData, setChartBillData] = useState({
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  })
  const [chartOvertimeData, setChartOvertimeData] = useState({
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  })

  return (
    <div>
      <p className="mx-10 my-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Hours Tracked
      </p>

      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <p className="mx-60 my-6 text-xl font-bold tracking-tight text-gray-600 sm:text-lg">
        Total: {hoursTracked} hours
      </p>
      <PieChart billData={chartBillData} overtimeData={chartOvertimeData} />

      {isData && 'No data for this period'}
    </div>
  )
}
