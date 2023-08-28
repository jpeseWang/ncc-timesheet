/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import React, { useState } from 'react'
import Modal from 'react-modal'
import { GeneralStep } from './ProjectSteps/General'
import { TeamStep } from './ProjectSteps/Team'
import { TasksStep } from './ProjectSteps/Tasks'
import { NotificationStep } from './ProjectSteps/Notificatiob'
const steps = [
  {
    id: '01',
    name: 'General',
    status: 'current',
    component: <GeneralStep />
  },
  {
    id: '02',
    name: 'Team',
    status: 'upcoming',
    component: <TeamStep />
  },
  {
    id: '03',
    name: 'Tasks',
    status: 'upcoming',
    component: <TasksStep />
  },
  {
    id: '04',
    name: 'Notification',
    status: 'upcoming',
    component: <NotificationStep />
  }
]
interface ProjectCreateProps {
  isOpen: boolean
  onClose: () => void
}
export const ProjectCreate: React.FC<ProjectCreateProps> = ({
  isOpen,
  onClose
}): JSX.Element => {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const handleSubmit = async (e: any) => {
    e.preventDefault()
  }
  const handleStepClick = (stepIndex: number) => {
    setActiveStepIndex(stepIndex)
  }
  console.log(activeStepIndex)
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className="mx-64 my-0 flex -mt-2">
          <div className="mx-auto max-w-fit px-6 sm:mt-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center -mt-10">
              <h1 className="text-2xl font-semibold leading-7 text-indigo-600">
                Create
              </h1>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                New project
              </p>
              <nav aria-label="Progress">
                <ol
                  role="list"
                  className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0 my-4 -py-4"
                >
                  {steps.map((step, stepIdx) => (
                    <li
                      key={step.name}
                      className="relative md:flex md:flex-1 cursor-pointer"
                    >
                      {
                        // <div
                        //   className="flex items-center px-6 py-4 text-sm font-medium"
                        //   aria-current="step"
                        // >
                        //   <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                        //     <span className="text-indigo-600">{step.id}</span>
                        //   </span>
                        //   <span
                        //     className="ml-4 text-sm font-medium text-indigo-600 "
                        //     onClick={() => handleStepClick(stepIdx)}
                        //   >
                        //     {step.name}
                        //   </span>
                        // </div>

                        <div
                          className="group flex items-center"
                          onClick={() => handleStepClick(stepIdx)}
                        >
                          <span className="flex items-center px-6 py-4 text-sm font-medium">
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                              <span
                                className={`${
                                  stepIdx === activeStepIndex
                                    ? 'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600 text-indigo-600'
                                    : 'text-gray-500 group-hover:text-gray-900'
                                }`}
                              >
                                {step.id}
                              </span>
                            </span>
                            <span
                              className={`${
                                stepIdx === activeStepIndex
                                  ? 'ml-4 text-sm font-medium text-indigo-600'
                                  : 'ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900'
                              }`}
                            >
                              {step.name}
                            </span>
                          </span>
                        </div>
                      }

                      {stepIdx !== steps.length - 1 ? (
                        <>
                          <div
                            className="absolute right-0 top-0 hidden h-full w-5 md:block"
                            aria-hidden="true"
                          >
                            <svg
                              className="h-full w-full text-gray-300"
                              viewBox="0 0 22 80"
                              fill="none"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0 -2L20 40L0 82"
                                vectorEffect="non-scaling-stroke"
                                stroke="currentcolor"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </nav>

              {steps[activeStepIndex].component}
              <div className="flex justify-end mt-8">
                <button
                  className=" rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className="rounded-md bg-indigo-600 px-2.5 py-1.5 mx-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => handleSubmit}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
