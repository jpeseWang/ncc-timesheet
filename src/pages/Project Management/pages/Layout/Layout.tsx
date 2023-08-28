/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { PieChart } from './Chart'
import DatePicker from 'react-datepicker'
import { getTimesheetTeams } from '../../services/ProjectServices'
import 'react-datepicker/dist/react-datepicker.css'

Chart.register(CategoryScale)
export const ProjectManagementLayout = (): JSX.Element => {
  const [fetchData2, setFetchData] = useState({})
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState<Date | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      if (startDate !== null && endDate !== null) {
        try {
          const data = await getTimesheetTeams(
            formatDate(startDate),
            formatDate(endDate)
          )
          setFetchData(data)
        } catch (error) {
          console.error(error)
        }
      }
    }
    void fetchData()
  }, [startDate, endDate])

  const BillData = [
    {
      id: 1,
      title: 'Billable',
      data: 12021,
      userLost: 823
    },
    {
      id: 2,
      year: 'No-Billable',
      userGain: 4324,
      userLost: 345
    }
  ]
  const [chartData, setChartData] = useState({
    labels: BillData.map((data) => data.title),
    datasets: [
      {
        label: 'Users Gained ',
        data: BillData.map((data: any) => data.data),
        backgroundColor: ['#50AF95', '#f3ba2f'],
        borderColor: 'none',
        borderWidth: 0
      }
    ]
  })

  const formatDate = (date: any) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const onChange = (dates: any): void => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

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
      {/* <PieChart billData={chartData} /> */}
    </div>
  )
}
