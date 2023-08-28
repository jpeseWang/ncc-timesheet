import { WorkingTime } from '../../components/WorkingTime'

export const MyWorkingTime = (): JSX.Element => {
  return (
    <>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        My working time
      </p>
      <WorkingTime />
    </>
  )
}
