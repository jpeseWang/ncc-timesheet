import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
export const ContentExample = (): JSX.Element => {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
}
