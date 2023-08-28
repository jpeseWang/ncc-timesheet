export const BillData = [
  {
    id: 1,
    year: 'Billable',
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 'No-Billable',
    userGain: 45677,
    userLost: 345
  }
]

export const WorkHourData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      title: {
        display: true,
        text: 'Users Gained between 2016-2020'
      }
    }
  ]
}
