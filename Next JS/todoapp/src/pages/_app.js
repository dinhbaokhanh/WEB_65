import MainLayout from '@/layouts/main';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  )
}

const EmptyLayout = (props) => {
  return <>{props.children}</>
}