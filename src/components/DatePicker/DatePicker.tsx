import React, { useState } from 'react'

const DatePicker = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target
    setSelectedOption(value)
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target
    setInputValue(value)
  }

  console.log(inputValue)

  return (
    <div className="flex">
      <input
        type={selectedOption}
        placeholder="Date of time"
        className="border px-12 outline-none -py-4 border-[#ccc] inline mr-6 rounded my-4"
        value={inputValue}
        onChange={handleInputChange}
      />
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="my-4 border-2 px-6 py-2 rounded-md border-gray-400 inline"
      >
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="quarter">Quarter</option>
        <option value="year">Year</option>
        <option value="alltime">All Time</option>
        <option value="custom">Custom time</option>
      </select>
    </div>
  )
}

export default DatePicker
