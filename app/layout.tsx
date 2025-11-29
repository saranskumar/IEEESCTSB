import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "IEEE SCT SB",
  description: "ieee sct sb website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/img/favicon.png" rel="shortcut icon" type="image/x-icon" />

        {/* CSS here */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        <link href="/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/css/themify-icons.css" rel="stylesheet" />
        <link href="/css/nice-select.css" rel="stylesheet" />
        <link href="/css/flaticon.css" rel="stylesheet" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link href="/css/slicknav.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />

        {/* Head Scripts */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js" />
        <Script id="scroll-script" strategy="afterInteractive">
          {`
            $(document).on("scroll", function() {
              var pageTop = $(document).scrollTop();
              var pageBottom = pageTop + $(window).height();
              var tags = $(".tag");
            
              for (var i = 0; i < tags.length; i++) {
                var tag = tags[i];
            
                if ($(tag).position().top < pageBottom) {
                  $(tag).addClass("visible");
                } else {
                  $(tag).removeClass("visible");
                }
              }
            });
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* JS here */}
        <Script src="/js/vendor/modernizr-3.5.0.min.js" strategy="beforeInteractive" />
        {/* Note: Duplicate jQuery in original, keeping for compatibility if needed, but usually one is enough. 
            The one in head is 3.3.1, this is 1.12.4. 
            If things break, we might need to adjust. For now, commenting out the older one to avoid conflicts, 
            or if plugins need it, we might need to be careful. 
            Let's try using the one from head. */}
        {/* <Script src="/js/vendor/jquery-1.12.4.min.js" strategy="beforeInteractive" /> */}

        <Script src="/js/popper.min.js" />
        <Script src="/js/bootstrap.min.js" />
        <Script src="/js/owl.carousel.min.js" />
        <Script src="/js/isotope.pkgd.min.js" />
        <Script src="/js/ajax-form.js" />
        <Script src="/js/waypoints.min.js" />
        <Script src="/js/jquery.counterup.min.js" />
        <Script src="/js/imagesloaded.pkgd.min.js" />
        <Script src="/js/scrollIt.js" />
        <Script src="/js/jquery.scrollUp.min.js" />
        <Script src="/js/wow.min.js" />
        <Script src="/js/nice-select.min.js" />
        <Script src="/js/jquery.slicknav.min.js" />
        <Script src="/js/jquery.magnific-popup.min.js" />
        <Script src="/js/plugins.js" />

        <Script src="/js/jquery.ajaxchimp.min.js" />
        <Script src="/js/jquery.form.js" />
        <Script src="/js/jquery.validate.min.js" />
        <Script src="/js/mail-script.js" />
        <Script src="/js/main.js" />
      </body>
    </html>
  );
}
