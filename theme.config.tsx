import React from "react";
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { Footer } from "./components/Footer";
import Navigation from "./components/Navigation";
import HeaderLogo from "./components/HeaderLogo";
import ExtraContent from "./components/ExtraContent";
import { Github, Discord } from "./components/Social";

const SITE_ROOT = "https://dochub-beta.vercel.app";

const config: DocsThemeConfig = {
  logo: HeaderLogo,
  navbar: {
    component: Navigation,
    extraContent: (
      <>
        <Github />
        <Discord />
      </>
    ),
  },
  docsRepositoryBase: "https://github.com/C-EO/turbo/blob/main/",
  footer: {
    component: Footer,
  },
  head: () => {
    const { systemTheme = "dark" } = useTheme();
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://dochub.vercel.app' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
      
    return <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'Nitehub Documentation'} />
      <meta property="og:description" content={frontMatter.description || 'The Official Nitehub Documentation.'} />
      <meta property="og:site_name" content="Nitehub Documentation" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nitehub_org" />
      <meta name="twitter:creator" content="@nitehub_org" />
      <link rel="prefetch" href="/repo" as="document"/>
      <link rel="prefetch" href="/repo/docs" as="document"/>
      <link rel="prefetch" href="/pack" as="document"/>
      <link rel="prefetch" href="/pack/docs" as="document"/>
      <link rel="shortcut icon" href={`/images/favicon-${systemTheme}/favicon.ico`}/>
    </>
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    
    if (asPath === '/') {
      return {
        titleTemplate: 'Nitehub Official Documentation'
      } 
    } else if (asPath === '/pack/index') {
        return {
          titleTemplate: 'Nitecel'
        }
    } else if (asPath !== '/pack/index') {
        return {
           titleTemplate: '%s – Nitecel'
        }
    } else if (asPath === '/repo/index' && asPath !== '/repo/index') {
        return {
          titleTemplate: 'Nitehub Documentation'
        }
    } else if (asPath !== '/repo/index') {
        return {
           titleTemplate: '%s – Nitehub Documentation'
        }
    }
  },
  darkMode: true,
  banner: {
    key: "policy-updates",
    text: () => {
      const { locale } = useRouter();
      return (
        <a href={`{SITE_ROOT}/legal/updates`} target="_blank">
          🆕 We have updated our site policies. Read more →
        </a>
      );
    },
    dismissible: true,
  },
  toc: {
    extraContent: ExtraContent,
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
    toggleButton: true,
  },
  feedback: {
    labels: "feedback",
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  direction: "ltr", // Default value is 'ltr'. 'rtl' is for the 'ar' locale only.
  navigation: {
    prev: true,
    next: true,
  }, // Same as 'navigation: true'
};
export default config;
