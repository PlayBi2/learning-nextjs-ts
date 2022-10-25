import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/Layout/DefaultLayout'
import NoLayout from '../components/Layout/NoLayout'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/swiper.scss'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const layouts = {
  default: DefaultLayout,
  noLayout: NoLayout
};

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
