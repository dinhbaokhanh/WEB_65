import MainLayout from '@/layouts/main';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
