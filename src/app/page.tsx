import Image from 'next/image'
import ConvertValue from './components/ConvertValue'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ConvertValue/>
    </main>
  )
}
