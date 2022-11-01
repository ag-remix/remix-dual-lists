import { json, LoaderFunction } from '@remix-run/node'
import { useFetcher, useLoaderData } from '@remix-run/react'
import statesByCountry from '~/data.json'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const country = url.searchParams.get('country') || 'United States'
  const countries = Object.keys(statesByCountry)
  const states = statesByCountry[country]

  return json({ countries, country, states })
}

export default function Index() {
  const initialData = useLoaderData()
  const fetcher = useFetcher()
  const { countries, country, states } = fetcher.data ?? initialData

  const handleChange = (e) => {
    const params = new URLSearchParams()
    params.set('country', e.target.value)
    fetcher.load(`?index&${params.toString()}`)
  }
  return (
    <div className="m-2">
      <h1 className="text-2xl font-bold">Remix Dual Lists!</h1>
      <div className="flex gap-4">
        <select
          name="country"
          defaultValue={country}
          onChange={handleChange}
          size={10}
        >
          {countries.map((country) => (
            <option>{country}</option>
          ))}
        </select>
        <select name="state" size={10}>
          {states.map((state) => (
            <option>{state}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
