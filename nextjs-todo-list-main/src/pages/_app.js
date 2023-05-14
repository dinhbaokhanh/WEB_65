import DefaultLayout from '@/layouts/default';
import AuthLayout from '@/layouts/auth';
import MainLayout from '@/layouts/main';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const LayoutComponent = Component.Layout || DefaultLayout;
  const CheckAuthLayout = Component.isCheckAuth ? AuthLayout : MainLayout
  return (
    <CheckAuthLayout>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </CheckAuthLayout>
  )
}
