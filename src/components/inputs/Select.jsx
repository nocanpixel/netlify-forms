import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useFormContext } from 'react-hook-form'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const data = [
  {
    id: 1,
    name: 'General questions',
    avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Offsets of organisations',
    avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]


export const SelectDropDown = () => {
  const [selected, setSelected] = useState(data[0]);
  const {setValue} = useFormContext();


  const topicSelected = (e) => {
    setSelected(e);
  }

  useEffect(()=>{
    setValue("topic", selected.name)
  },[selected, setValue])


    return(
      <Listbox value={selected} onChange={(e)=> {topicSelected(e)}} >
      {({ open }) => (
        <>
          <div className='text-sm text-gray-500'>Topic</div>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full h-10 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="block truncate text-sm">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    )
}