import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { FeelbackYesNo, PRESET_LIKE_DISLIKE } from "@feelback/react";
import "@feelback/react/styles/feelback.css";
import { Search } from "./components/Search";
//import { Search } from "./components/Search";

const config: DocsThemeConfig = {
  logo: (
    <>
    <svg width="195" height="68" viewBox="0 0 195 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9035 14.07C18.9035 11.8242 20.7305 10 22.9893 10C25.2482 10 27.0751 11.8199 27.0751 14.07V37.9439C27.0751 40.1897 25.2482 42.0139 22.9893 42.0139C20.7348 42.0139 18.9035 40.194 18.9035 37.9439V14.07Z" fill="url(#paint0_linear_1002_133)"/>
    <path d="M0 14.0703C0 11.8202 1.83127 10.0003 4.0858 10.0003C6.34465 10.0003 8.17591 11.8202 8.17159 14.0703V50.828H27.944C30.1899 50.828 32.0141 52.655 32.0141 54.9138C32.0141 57.1727 30.1942 58.9996 27.944 58.9996H4.13444C4.11825 58.9998 4.10204 58.9999 4.0858 58.9999C4.0573 58.9999 4.02888 58.9996 4.00053 58.999C2.95601 58.9814 2.00658 58.5686 1.29505 57.9027C0.498301 57.1603 0 56.1036 0 54.9299V14.0703Z" fill="url(#paint1_linear_1002_133)"/>
    <path d="M41.8944 10C39.6355 10 37.8086 11.8242 37.8086 14.07V37.9439C37.8086 40.194 39.6398 42.0139 41.8944 42.0139C44.1532 42.0139 45.9802 40.1897 45.9802 37.9439V14.07C45.9802 11.8199 44.1532 10 41.8944 10Z" fill="url(#paint2_linear_1002_133)"/>
    <path d="M178.753 33.7849V30.7144L186.899 22.7288C187.678 21.9421 188.327 21.2432 188.846 20.6322C189.366 20.0211 189.755 19.4292 190.015 18.8563C190.275 18.2835 190.405 17.6724 190.405 17.0232C190.405 16.2823 190.236 15.6483 189.9 15.1213C189.564 14.5866 189.102 14.1742 188.514 13.8839C187.926 13.5937 187.258 13.4486 186.509 13.4486C185.738 13.4486 185.062 13.609 184.481 13.9298C183.901 14.2429 183.45 14.6898 183.129 15.2703C182.816 15.8507 182.66 16.542 182.66 17.344H178.615C178.615 15.8546 178.955 14.5599 179.635 13.46C180.315 12.3602 181.25 11.5085 182.442 10.9051C183.641 10.3017 185.016 10 186.566 10C188.14 10 189.522 10.2941 190.714 10.8822C191.905 11.4703 192.83 12.2761 193.486 13.2996C194.151 14.3231 194.483 15.4918 194.483 16.8055C194.483 17.6839 194.315 18.547 193.979 19.3948C193.643 20.2426 193.051 21.1821 192.203 22.2132C191.363 23.2444 190.183 24.4932 188.663 25.9597L184.619 30.0728V30.2332H194.838V33.7849H178.753Z" fill="currentColor"/>
    <path d="M162.644 33.7847V10.3206H166.894V30.2216H177.229V33.7847H162.644Z" fill="currentColor"/>
    <path d="M154.064 10.3206V33.7847H149.917V10.3206H154.064Z" fill="currentColor"/>
    <path d="M138.39 34.1399C137.275 34.1399 136.271 33.9414 135.377 33.5442C134.491 33.1394 133.789 32.5436 133.269 31.7569C132.757 30.9702 132.502 30.0001 132.502 28.8468C132.502 27.8538 132.685 27.0327 133.052 26.3835C133.418 25.7343 133.918 25.2149 134.552 24.8254C135.186 24.4358 135.9 24.1417 136.695 23.9432C137.497 23.7369 138.326 23.588 139.181 23.4963C140.212 23.3894 141.049 23.2939 141.69 23.2099C142.332 23.1183 142.798 22.9808 143.088 22.7975C143.386 22.6065 143.535 22.3124 143.535 21.9153V21.8465C143.535 20.9834 143.279 20.3151 142.767 19.8415C142.255 19.368 141.518 19.1312 140.556 19.1312C139.54 19.1312 138.734 19.3527 138.138 19.7957C137.55 20.2387 137.153 20.7619 136.947 21.3653L133.074 20.8154C133.38 19.7461 133.884 18.8524 134.587 18.1344C135.289 17.4088 136.149 16.8665 137.165 16.5075C138.18 16.1409 139.303 15.9576 140.533 15.9576C141.381 15.9576 142.225 16.0569 143.065 16.2555C143.905 16.4541 144.673 16.7825 145.368 17.2408C146.063 17.6914 146.62 18.3063 147.041 19.0854C147.468 19.8644 147.682 20.8383 147.682 22.0069V33.7848H143.695V31.3673H143.558C143.306 31.8562 142.95 32.3145 142.492 32.7422C142.041 33.1623 141.472 33.5022 140.785 33.7619C140.105 34.0139 139.307 34.1399 138.39 34.1399ZM139.467 31.0924C140.3 31.0924 141.022 30.9282 141.633 30.5997C142.244 30.2636 142.714 29.8206 143.042 29.2707C143.378 28.7208 143.546 28.1212 143.546 27.4719V25.3982C143.416 25.5051 143.195 25.6044 142.882 25.6961C142.576 25.7877 142.232 25.8679 141.851 25.9367C141.469 26.0054 141.091 26.0665 140.716 26.12C140.342 26.1735 140.017 26.2193 139.742 26.2575C139.124 26.3415 138.57 26.479 138.081 26.6699C137.592 26.8609 137.207 27.1282 136.924 27.4719C136.641 27.808 136.5 28.2434 136.5 28.778C136.5 29.5418 136.779 30.1185 137.336 30.5081C137.894 30.8976 138.604 31.0924 139.467 31.0924Z" fill="currentColor"/>
    <path d="M131.794 16.1867V19.3947H121.677V16.1867H131.794ZM124.175 11.9705H128.322V28.4916C128.322 29.0492 128.406 29.4769 128.574 29.7748C128.75 30.0651 128.979 30.2637 129.262 30.3706C129.544 30.4775 129.857 30.531 130.201 30.531C130.461 30.531 130.698 30.5119 130.911 30.4737C131.133 30.4355 131.301 30.4011 131.416 30.3706L132.114 33.6129C131.893 33.6893 131.576 33.7733 131.164 33.865C130.759 33.9567 130.262 34.0101 129.674 34.0254C128.635 34.0559 127.7 33.8994 126.867 33.5557C126.035 33.2043 125.374 32.662 124.885 31.9288C124.404 31.1955 124.167 30.2789 124.175 29.1791V11.9705Z" fill="currentColor"/>
    <path d="M113.608 34.1285C111.844 34.1285 110.32 33.7619 109.037 33.0286C107.761 32.2877 106.78 31.2413 106.092 29.8894C105.405 28.5298 105.061 26.9296 105.061 25.0889C105.061 23.2786 105.405 21.6899 106.092 20.3227C106.787 18.9479 107.757 17.8786 109.002 17.1147C110.247 16.3433 111.71 15.9576 113.39 15.9576C114.475 15.9576 115.498 16.1333 116.461 16.4846C117.431 16.8283 118.286 17.363 119.027 18.0886C119.776 18.8142 120.364 19.7384 120.792 20.8612C121.219 21.9764 121.433 23.3054 121.433 24.8483V26.12H107.009V23.3245H117.458C117.45 22.5301 117.278 21.8236 116.942 21.2049C116.606 20.5786 116.136 20.0859 115.533 19.727C114.937 19.368 114.242 19.1885 113.448 19.1885C112.6 19.1885 111.855 19.3947 111.213 19.8072C110.572 20.212 110.072 20.7466 109.713 21.4111C109.361 22.068 109.182 22.7898 109.174 23.5765V26.0169C109.174 27.0404 109.361 27.9188 109.736 28.652C110.11 29.3776 110.633 29.9352 111.305 30.3247C111.977 30.7066 112.764 30.8976 113.665 30.8976C114.269 30.8976 114.815 30.8136 115.304 30.6455C115.792 30.4699 116.216 30.214 116.575 29.8779C116.934 29.5418 117.206 29.1256 117.389 28.6291L121.261 29.0645C121.017 30.088 120.551 30.9816 119.864 31.7454C119.184 32.5016 118.313 33.0897 117.251 33.5098C116.19 33.9223 114.975 34.1285 113.608 34.1285Z" fill="currentColor"/>
    <path d="M78.6978 10.3206H83.8993L90.8652 27.3229H91.1402L98.1061 10.3206H103.308V33.7847H99.2289V17.6646H99.0112L92.5265 33.716H89.4789L82.9942 17.6302H82.7765V33.7847H78.6978V10.3206Z" fill="currentColor"/>
    <path d="M85.0224 58.9999H78.6655V39.3636H85.2238C87.1478 39.3636 88.8001 39.7567 90.1808 40.5429C91.5615 41.3227 92.6194 42.4445 93.3544 43.9083C94.0959 45.3657 94.4667 47.1139 94.4667 49.153C94.4667 51.1984 94.0927 52.9562 93.3449 54.4264C92.6034 55.8966 91.5295 57.028 90.1233 57.8206C88.717 58.6068 87.0167 58.9999 85.0224 58.9999ZM81.6282 56.4111H84.8594C86.3552 56.4111 87.5984 56.1299 88.5892 55.5674C89.5799 54.9985 90.3214 54.1771 90.8136 53.1033C91.3058 52.023 91.5519 50.7062 91.5519 49.153C91.5519 47.6125 91.3058 46.3053 90.8136 45.2315C90.3278 44.1576 89.6023 43.3426 88.6371 42.7865C87.6719 42.2304 86.4734 41.9523 85.0416 41.9523H81.6282V56.4111Z" fill="currentColor"/>
    <path d="M102.774 59.2972C101.394 59.2972 100.189 58.9808 99.1595 58.3479C98.1304 57.7151 97.3314 56.8298 96.7625 55.692C96.1936 54.5543 95.9092 53.2247 95.9092 51.7034C95.9092 50.1757 96.1936 48.8398 96.7625 47.6956C97.3314 46.5514 98.1304 45.6629 99.1595 45.0301C100.189 44.3973 101.394 44.0809 102.774 44.0809C104.155 44.0809 105.36 44.3973 106.389 45.0301C107.418 45.6629 108.217 46.5514 108.786 47.6956C109.355 48.8398 109.639 50.1757 109.639 51.7034C109.639 53.2247 109.355 54.5543 108.786 55.692C108.217 56.8298 107.418 57.7151 106.389 58.3479C105.36 58.9808 104.155 59.2972 102.774 59.2972ZM102.784 56.8906C103.679 56.8906 104.42 56.654 105.008 56.181C105.596 55.708 106.031 55.0784 106.312 54.2922C106.6 53.506 106.744 52.6398 106.744 51.6938C106.744 50.7542 106.6 49.8913 106.312 49.105C106.031 48.3124 105.596 47.6764 105.008 47.197C104.42 46.7176 103.679 46.4779 102.784 46.4779C101.883 46.4779 101.135 46.7176 100.54 47.197C99.9522 47.6764 99.5143 48.3124 99.2267 49.105C98.9454 49.8913 98.8048 50.7542 98.8048 51.6938C98.8048 52.6398 98.9454 53.506 99.2267 54.2922C99.5143 55.0784 99.9522 55.708 100.54 56.181C101.135 56.654 101.883 56.8906 102.784 56.8906Z" fill="currentColor"/>
    <path d="M117.693 59.2972C116.267 59.2972 115.04 58.9744 114.011 58.3288C112.988 57.6768 112.202 56.7787 111.652 55.6345C111.103 54.4903 110.828 53.18 110.828 51.7034C110.828 50.2077 111.109 48.8877 111.671 47.7435C112.234 46.593 113.027 45.6949 114.049 45.0493C115.072 44.4037 116.277 44.0809 117.664 44.0809C118.783 44.0809 119.78 44.2886 120.656 44.7041C121.531 45.1132 122.238 45.6885 122.774 46.43C123.318 47.1714 123.641 48.0376 123.743 49.0283H120.953C120.799 48.338 120.448 47.7435 119.898 47.245C119.355 46.7464 118.626 46.4971 117.712 46.4971C116.913 46.4971 116.213 46.708 115.612 47.1299C115.018 47.5454 114.554 48.1398 114.222 48.9133C113.89 49.6803 113.723 50.588 113.723 51.6363C113.723 52.7102 113.886 53.637 114.212 54.4168C114.538 55.1967 114.999 55.8007 115.593 56.229C116.194 56.6572 116.9 56.8714 117.712 56.8714C118.255 56.8714 118.747 56.7723 119.189 56.5741C119.636 56.3696 120.01 56.0788 120.31 55.7016C120.617 55.3245 120.831 54.8707 120.953 54.3401H123.743C123.641 55.2925 123.331 56.1427 122.813 56.8906C122.295 57.6384 121.602 58.2265 120.732 58.6548C119.869 59.083 118.856 59.2972 117.693 59.2972Z" fill="currentColor"/>
    <path d="M136.495 47.8682L133.896 48.3284C133.787 47.996 133.615 47.6796 133.378 47.3792C133.148 47.0788 132.835 46.8327 132.439 46.6409C132.042 46.4491 131.547 46.3533 130.953 46.3533C130.141 46.3533 129.463 46.5354 128.92 46.8998C128.377 47.2577 128.105 47.7212 128.105 48.2901C128.105 48.7822 128.287 49.1785 128.651 49.479C129.016 49.7794 129.604 50.0255 130.416 50.2173L132.755 50.7542C134.11 51.0674 135.12 51.55 135.785 52.202C136.45 52.854 136.782 53.7009 136.782 54.7428C136.782 55.6249 136.526 56.4111 136.015 57.1015C135.51 57.7854 134.804 58.3224 133.896 58.7123C132.995 59.1022 131.95 59.2972 130.761 59.2972C129.112 59.2972 127.766 58.9456 126.724 58.2425C125.682 57.533 125.043 56.5262 124.807 55.2222L127.578 54.8004C127.75 55.5227 128.105 56.0692 128.642 56.4399C129.179 56.8043 129.879 56.9864 130.742 56.9864C131.681 56.9864 132.432 56.7915 132.995 56.4016C133.557 56.0053 133.839 55.5227 133.839 54.9538C133.839 54.4935 133.666 54.1068 133.321 53.7936C132.982 53.4804 132.461 53.2439 131.758 53.0841L129.265 52.5376C127.891 52.2244 126.874 51.7258 126.216 51.0418C125.564 50.3579 125.238 49.4918 125.238 48.4435C125.238 47.5741 125.481 46.8135 125.967 46.1615C126.453 45.5095 127.124 45.0013 127.98 44.637C128.837 44.2663 129.818 44.0809 130.924 44.0809C132.515 44.0809 133.768 44.4261 134.682 45.1164C135.596 45.8004 136.2 46.7176 136.495 47.8682Z" fill="currentColor"/>
    <defs>
    <linearGradient id="paint0_linear_1002_133" x1="4.63002e-07" y1="34.5" x2="45.9803" y2="10" gradientUnits="userSpaceOnUse">
    <stop stop-color="#4400E2"/>
    <stop offset="0.421875" stop-color="#F94E6C"/>
    <stop offset="1" stop-color="#FFCB00"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1002_133" x1="4.63002e-07" y1="34.5" x2="45.9803" y2="10" gradientUnits="userSpaceOnUse">
    <stop stop-color="#4400E2"/>
    <stop offset="0.421875" stop-color="#F94E6C"/>
    <stop offset="1" stop-color="#FFCB00"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1002_133" x1="4.63002e-07" y1="34.5" x2="45.9803" y2="10" gradientUnits="userSpaceOnUse">
    <stop stop-color="#4400E2"/>
    <stop offset="0.421875" stop-color="#F94E6C"/>
    <stop offset="1" stop-color="#FFCB00"/>
    </linearGradient>
    </defs>
    </svg>



    </>
  ),
  darkMode: true,
  project: {
    link: 'https://github.com/MetalPay/metal-l2-docs',
  },
  docsRepositoryBase: 'https://github.com/MetalPay/metal-l2-docs/docs/blob/main/',
  footer: {
    text: 'Metal L2 Documentation',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true
  },
  toc: {
    backToTop: true,
    extraContent: () =>
    <>
        <hr className="divider top-divider" />
        <FeelbackYesNo contentSetId="b2983747-797d-4e6e-9ea3-15d59b9c27ce"
            preset={PRESET_LIKE_DISLIKE}
            textQuestion="Is this page useful?"
            textAnswer="Thanks for your feedback :)"
        />
        <hr className="divider" />
    </>
  },
  feedback: {
    content: '❤️ Share general feedback',
    labels: 'user-feedback'
  },
  editLink: {
    text: '✏️ Edit this page on GitHub'
  },
  /*banner: {
    key: 'fp-mainnet-release',
    text: (
      <a href="/builders/notices/sdk-deprecation">
        🎉 We are deprecating the Optimism SDK and migrating all tutorials to use viem/op-stack. Read more →
      </a>
    )
  },*/
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: '%s | Metal L2 Docs'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://docs.metall2.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Metal L2 Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Metal L2 Docs for developers'}
        />
        <meta
          property="og:image"
          content="https://docs.optimism.io/logos/docs-header.png"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content={frontMatter.title || "Optimism Docs"}
        />
        <meta
          name="twitter:description"
          content={frontMatter.description || "Optimism Docs for developers"}
        />
        <meta
          name="twitter:image"
          content="https://docs.optimism.io/logos/docs-header.png"
        />
        <link
          rel="icon"
          href="/img/icons/favicon.ico"
          type="image/x-icon"
        ></link>
      </>
    );
  },
  // https://nextra.site/docs/docs-theme/theme-configuration
  // primaryHue: {
  //   dark:
  //   light:
  // }
};

export default config;
