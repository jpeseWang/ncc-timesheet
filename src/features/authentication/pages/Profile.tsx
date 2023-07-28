/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Switch } from '@headlessui/react'
import { NotPermission } from '../../../layouts/Error/NotPermission'
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

const secondaryNavigation = [
  { name: 'General', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Plan', href: '#', icon: CubeIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Team members', href: '#', icon: UsersIcon, current: false }
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export function Profile(): JSX.Element {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const { currentUser, getCurrentUser } = useContext(UserContext)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      await getCurrentUser()
    }
    void fetchData()
  }, [])
  return (
    <>
      <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
        {currentUser != null ? (
          <>
            <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
              <nav className="flex-none px-4 sm:px-6 lg:px-0">
                <ul
                  role="list"
                  className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
                >
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-50 text-indigo-600'
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-indigo-600'
                              : 'text-gray-400 group-hover:text-indigo-600',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
              <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                <div>
                  <ul
                    role="list"
                    className="mt-0 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                  >
                    <li key={currentUser.name}>
                      <img
                        className="mx-auto h-56 w-56 rounded-full"
                        src={currentUser.avatarFullPath}
                        alt=""
                      />
                      <p className="text-sm leading-6 text-gray-600">
                        {currentUser.level}
                      </p>
                      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                        ID: {currentUser.id}
                      </h3>
                    </li>
                  </ul>

                  <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                    <div className="pt-6 sm:flex">
                      <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                        Full name
                      </dt>
                      <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                        <div className="text-gray-900">
                          {currentUser.surname}
                        </div>
                        <button
                          type="button"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Update
                        </button>
                      </dd>
                    </div>
                    <div className="pt-6 sm:flex">
                      <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                        Email address
                      </dt>
                      <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                        <div className="text-gray-900">
                          {currentUser.emailAddress}
                        </div>
                        <button
                          type="button"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Update
                        </button>
                      </dd>
                    </div>
                    <div className="pt-6 sm:flex">
                      <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                        Title
                      </dt>
                      <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                        <div className="text-gray-900">
                          Human Resources Manager
                        </div>
                        <button
                          type="button"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Update
                        </button>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-col sm:flex-row">
                  <div className="flex-1 ">
                    <div>
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Working time
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Your current working time.
                      </p>
                      <p className="text-sm font-semibold leading-6 text-indigo-600 ">
                        Morning
                      </p>
                      <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6 ">
                        <div className="pt-6 sm:flex">
                          <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-4">
                            Start Morning Time
                          </dt>
                          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-900">
                              {currentUser.morningStartAt}
                            </div>
                          </dd>
                        </div>
                        <div className="pt-6 sm:flex">
                          <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                            End Morning Time
                          </dt>
                          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-900">
                              {currentUser.morningEndAt}
                            </div>
                          </dd>
                        </div>
                        <div className="pt-6 sm:flex">
                          <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                            Morning Working Time
                          </dt>
                          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-900">
                              {currentUser.morningWorking}
                            </div>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="flex-1 border-l -ml-6">
                    <div className="ml-4">
                      <div className="flex">
                        <p className="text-sm font-semibold mt-14 leading-6 text-indigo-600 hover:text-indigo-500">
                          Afternoon
                        </p>
                      </div>
                      <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                        <div className="pt-6 sm:flex">
                          <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                            Start Afternoon Time
                          </dt>
                          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-900">
                              {currentUser.afternoonStartAt}
                            </div>
                          </dd>
                        </div>
                        <div className="pt-6 sm:flex">
                          <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                            End Afternoon Time
                          </dt>
                          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-900">
                              {currentUser.afternoonEndAt}
                            </div>
                          </dd>
                        </div>
                        <div className="pt-6 sm:flex">
                          <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                            Afternoon Working Time
                          </dt>
                          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-900">
                              {currentUser.afternoonWorking}
                            </div>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Language and dates
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Choose what language and date format to use throughout your
                    account.
                  </p>

                  <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                    <div className="pt-6 sm:flex">
                      <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                        Language
                      </dt>
                      <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                        <div className="text-gray-900">English</div>
                        <button
                          type="button"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Update
                        </button>
                      </dd>
                    </div>
                    <div className="pt-6 sm:flex">
                      <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                        Date format
                      </dt>
                      <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                        <div className="text-gray-900">DD-MM-YYYY</div>
                        <button
                          type="button"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Update
                        </button>
                      </dd>
                    </div>
                    <Switch.Group as="div" className="flex pt-6">
                      <Switch.Label
                        as="dt"
                        className="flex-none pr-6 font-medium text-gray-900 sm:w-64"
                        passive
                      >
                        Automatic timezone
                      </Switch.Label>
                      <dd className="flex flex-auto items-center justify-end">
                        <Switch
                          checked={automaticTimezoneEnabled}
                          onChange={setAutomaticTimezoneEnabled}
                          className={classNames(
                            automaticTimezoneEnabled
                              ? 'bg-indigo-600'
                              : 'bg-gray-200',
                            'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              automaticTimezoneEnabled
                                ? 'translate-x-3.5'
                                : 'translate-x-0',
                              'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </dd>
                    </Switch.Group>
                  </dl>
                </div>
              </div>
            </main>
            {/* here */}
          </>
        ) : (
          <NotPermission />
        )}
      </div>
    </>
  )
}
