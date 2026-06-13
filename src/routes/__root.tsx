import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "INFYNUX Solutions | Web Development & Software Company in Thiruvarur",
      },
      {
        name: "description",
        content:
          "INFYNUX Solutions provides Web Development, App Development, UI/UX Design, AI Integration and Cloud Solutions in Thiruvarur, Nagapattinam and across Tamil Nadu.",
      },
      {
        name: "keywords",
        content:
          "INFYNUX Solutions, INFYNUX, Web Development Company Thiruvarur, Software Company Thiruvarur, Software Company Nagapattinam, Web Design Company Tamil Nadu, App Development Company, UI UX Design, AI Integration, Cloud Solutions, IT Company Thiruvarur, IT Company Nagapattinam",
      },
      {
        name: "author",
        content: "INFYNUX Solutions",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content:
          "INFYNUX Solutions | Web Development & Software Company in Thiruvarur",
      },
      {
        property: "og:description",
        content:
          "Professional Web Development, App Development, UI/UX Design, AI Integration and Cloud Solutions.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://infynuxsolutions.in",
      },
      {
        property: "og:image",
        content: "https://infynuxsolutions.in/INfynux-Logo.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "INFYNUX Solutions | Web Development & Software Company in Thiruvarur",
      },
      {
        name: "twitter:description",
        content:
          "Professional Web Development, App Development, UI/UX Design, AI Integration and Cloud Solutions.",
      },
      {
        name: "twitter:image",
        content: "https://infynuxsolutions.in/INfynux-Logo.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/INfynux-Logo.png",
      },
      {
        rel: "canonical",
        href: "https://infynuxsolutions.in/",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-914JR0V325"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-914JR0V325');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "INFYNUX Solutions",
              alternateName: "INFYNUX",
              url: "https://infynuxsolutions.in",
              logo: "https://infynuxsolutions.in/INfynux-Logo.png",
              description:
                "INFYNUX Solutions provides Web Development, App Development, UI/UX Design, AI Integration and Cloud Solutions.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Thiruvarur",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              areaServed: [
                "Thiruvarur",
                "Nagapattinam",
                "Tamil Nadu",
                "India"
              ],
              sameAs: [
                "https://www.instagram.com/infynuxsolutions",
                "https://www.linkedin.com/company/infynux"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                availableLanguage: ["English", "Tamil"]
              }
            }),
          }}
        />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareCompany",
      name: "INFYNUX Solutions",
      url: "https://infynuxsolutions.in",
      telephone: "+917010850923",
      image: "https://infynuxsolutions.in/INfynux-Logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thiruvarur",
        addressRegion: "Tamil Nadu",
        addressCountry: "India",
      },
      areaServed: [
        "Thiruvarur",
        "Nagapattinam",
        "Tamil Nadu",
      ],
      sameAs: [
        "https://www.instagram.com/infynuxsolutions",
        "https://www.linkedin.com/company/infynux"
      ]
    }),
  }}
/>

      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { ThemeProvider } from "../components/ThemeProvider";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { BackToTop } from "../components/BackToTop";
import { Toaster } from "sonner";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
        <BackToTop />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0A0A1F",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "#E2E8F0",
            },
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
