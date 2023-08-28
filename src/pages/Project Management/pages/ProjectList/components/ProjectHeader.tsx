/* eslint-disable @typescript-eslint/space-before-function-paren */
import React, { useState } from 'react'
import { ProjectCreate } from '../../ProjectCreateUpdate/ProjectCreate'
export const ProjectHeader = (): JSX.Element => {
  const [modalIsOpen, setIsOpen] = useState(false)
  // function openModal (): void {
  //   setIsOpen(true)
  // }

  function closeModal(): void {
    setIsOpen(false)
  }
  return (
    <div className="">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Manage Projects
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Have an overview of your daily tasks, request new project and day off.
        </p>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              setIsOpen(true)
            }}
          >
            Create new project
          </button>
        </div>
      </div>
      <div className="sm:col-span-2 mt-4">
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Active projects
        </label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="status" className="sr-only">
              Task status
            </label>
            <select
              id="status"
              name="status"
              className="h-full rounded-md border-0 bg-transparent bg-none py-0 px-4 text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>Active Projects</option>
              <option>Inactive Projects</option>
              <option>All Projects</option>
            </select>
          </div>
          <input
            type="text"
            name="project"
            id="project"
            placeholder="Search project by project or client name"
            autoComplete="text"
            className="block w-full rounded-md border-0 px-3.5 py-2 pl-44 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      {modalIsOpen && <ProjectCreate isOpen={true} onClose={closeModal} />}
    </div>
  )
}
