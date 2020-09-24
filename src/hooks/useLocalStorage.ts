import { useEffect, useState } from 'react'

const PREFIX = 'codepen-clone-'

export function useLocalStorage(key: string, initialValue: any) {
  const storageKey = PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(storageKey)

    if(jsonValue) return JSON.parse(jsonValue)

    return typeof initialValue === 'function'
      ? initialValue()
      : initialValue
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }, [storageKey, value])

  return [value, setValue]
}
