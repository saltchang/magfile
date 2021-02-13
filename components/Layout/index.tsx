import {
  ReactNode,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getTitle, getArticleDate, MetaData } from '../../lib/getMeta';

import NavBar from '../NavBar';
import SideBar from '../SideBar';
import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.scss';

export const siteTitle = 'Magfile';

const Layout = ({ children }: { children: ReactNode }) => {
  const app = 'app';
  const darkMode = 'dark-mode';
  const lightMode = 'light-mode';
  const defaultSubTitle = '流浪的工程師 ‧ 興趣使然的開發者 ‧ 無情的寫扣機器人';
  const typingStrings = [
    'a Wandering Engineer.',
    'a Developer for Fun.',
    'a Ruthless Coding Robot.',
  ];

  const [appIsInDarkMode, setAppIsInDarkMode] = useState(true);
  const [appClassName, setAppClassName] = useState(`${app} ${lightMode}`);
  const [headerTitle, setHeaderTitle] = useState('');
  const [metaData, setMetaData] = useState(null as MetaData);
  const [subTitle, setSubTitle] = useState('');
  const [isBlogPage, setIsBlogPage] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isSideBarShow, setIsSideBarShow] = useState(false);
  const [navBarEffect, setNavBarEffect] = useState(false);

  const router = useRouter();

  const navbar = useRef() as MutableRefObject<HTMLDivElement>;
  const header = useRef() as MutableRefObject<HTMLDivElement>;
  const footer = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setIsBlogPage(router.asPath.includes('blog'));
    setHeaderTitle(getTitle());
    setMetaData({ date: getArticleDate() } as MetaData);
    setSubTitle(defaultSubTitle);
    const handleRouteChange = () => {
      setHeaderTitle(getTitle());
      setMetaData({ date: getArticleDate() } as MetaData);
    };
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) {
        console.error(`Route to ${url} was cancelled!`);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);

  const setAppScroll = (value: string) => {
    document.body.style.overflow = value;
  };

  const toggleAction = () => {
    setIsSideBarShow(!isSideBarShow);
  };

  const closeSideBar = () => {
    setAppScroll('auto');
    setIsSideBarShow(false);
  };

  useEffect(() => {
    if (isSideBarShow) setAppScroll('hidden');
    else setAppScroll('auto');
  }, [isSideBarShow]);

  const updateSize = () => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );

    if (vw >= 900) {
      closeSideBar();
      setNavBarEffect(true);
    } else {
      setNavBarEffect(false);
    }
    if (footer.current) {
      setFooterHeight(footer.current.clientHeight);
    }
    if (header.current) {
      setHeaderHeight(header.current.clientHeight);
    }
  };

  useEffect(() => {
    if (appIsInDarkMode) setAppIsInDarkMode(true);
    setAppClassName(`${app} ${appIsInDarkMode ? darkMode : lightMode}`);
  }, [appIsInDarkMode]);

  useEffect(() => {
    updateSize();
  });

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <div className={styles.app}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Magfile" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar
        navBarRef={navbar}
        toggleAction={toggleAction}
        hiddenEffect={navBarEffect}
      />
      <SideBar
        show={isSideBarShow}
        toggleAction={toggleAction}
        typingStrings={typingStrings}
      />
      <Header
        headerRef={header}
        headerTitle={headerTitle}
        subTitle={subTitle}
        meta={metaData}
        blog={isBlogPage}
      />
      <main
        className={styles.mainContainer}
        style={{
          minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
        }}
      >
        <div className={styles.mainContent}>{children}</div>
      </main>
      <Footer footerRef={footer} />
    </div>
  );
};

export default Layout;
