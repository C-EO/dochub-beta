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
  docsRepositoryBase: "https://github.com/C-EO/dochub-beta/blob/main/",
  footer: {
    component: Footer,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { systemTheme = "dark" } = useTheme();
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
      <link rel="apple-touch-icon" sizes="180x180" href={`/images/favicon-${systemTheme}/apple-touch-icon.png`}/>
      <link rel="icon" type="image/png" sizes="32x32" href={`/images/favicon-${systemTheme}/favicon-32x32.png`}/>
      <link rel="icon" type="image/png" sizes="16x16" href={`/images/favicon-${systemTheme}/favicon-16x16.png`}/>
      <link rel="mask-icon" href={`/images/favicon-${systemTheme}/safari-pinned-tab.svg`} color="#000000"/>
      <link rel="shortcut icon" href={`/images/favicon-${systemTheme}/favicon.ico`}/>
      <link rel="shortcut icon" href={`/images/favicon-${systemTheme}/favicon.ico`}/>
      <link rel="prefetch" href="/repo" as="document"/>
      <link rel="prefetch" href="/repo/docs" as="document"/>
      <link rel="prefetch" href="/pack" as="document"/>
      <link rel="prefetch" href="/pack/docs" as="document"/>
    </>
  },
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();

    let section = "Nitehub Official Documentation";
    
    if (router?.pathname.startsWith("/pack")) {
      section = "Nitecel";
    }
    if (router?.pathname.startsWith("/repo")) {
      section = "Nitehub Documentation";
    }

    const defaultTitle = frontMatter.overrideTitle || section;

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – ${section}`,
    };
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
