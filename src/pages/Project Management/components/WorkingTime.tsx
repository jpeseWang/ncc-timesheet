/* eslint-disable multiline-ternary */
import { useContext, useEffect } from 'react'
import { UserContext } from '../../authentication/contexts/UserContext'
import { NotPermission } from '../../../components/Error/NoPermission'
export const WorkingTime = (): JSX.Element => {
  const { currentUser, getCurrentUser } = useContext(UserContext)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      await getCurrentUser()
    }
    void fetchData()
  }, [])

  return (
    <div>
      {currentUser != null ? (
        <>
          <main className="px-4 py-8 sm:px-6 lg:flex-auto lg:px-0 lg:py-10">
            <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
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
                <div className="flex-1 border-l ml-6">
                  <div className="ml-8">
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
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline mr-1 pb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Register new Working time
              </button>
            </div>
          </main>
        </>
      ) : (
        <NotPermission />
      )}
    </div>
  )
}
