import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Magnetic, MouseParallax } from "@/components/animations";
import { siteConfig } from "@/lib/config";
import { savePreLaunchEmail } from "../actions/pre-launch";
import { EmailForm } from "@/components/pre-launch/email-form";

export const metadata: Metadata = {
  title: `Coming Soon - ${siteConfig.name}`,
  description: siteConfig.description,
  openGraph: {
    title: `Coming Soon - ${siteConfig.name}`,
    description: siteConfig.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Coming Soon - ${siteConfig.name}`,
    description: siteConfig.description,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ComingSoonPage() {
  const h = await headers();
  const country = h.get("x-vercel-ip-country");
  const city = h.get("x-vercel-ip-city");

  const config = siteConfig.comingSoon(decodeURIComponent(city as string));

  console.info(
    `[Coming Soon] Visitor from ${decodeURIComponent(city as string)}, ${country}`,
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveEmail = async (_prevState: any, formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const result = await savePreLaunchEmail(
      email,
      decodeURIComponent(city as string),
    );
    return result;
  };

  return (
    <MouseParallax
      imageSrc="/images/chuko-cribb-6Uk0ciiAW7g-unsplash.jpg"
      strength={30}
      className="min-h-screen"
    >
      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center p-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-8">
              {/* Badge */}
              <FadeIn delay={0}>
                <Magnetic>
                  <Badge variant="secondary">{config.badge}</Badge>
                </Magnetic>
              </FadeIn>

              {/* Logo/Brand */}
              <FadeIn delay={0.1}>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                  {siteConfig.name}
                </h1>
              </FadeIn>

              {/* Title */}
              <FadeIn delay={0.2}>
                <h2 className="text-3xl font-bold">{config.title}</h2>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn delay={0.3} y={30}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {config.subtitle}
                </p>
              </FadeIn>

              {/* Email Form */}
              <FadeIn delay={0.4} scale={0.95}>
                <div className="max-w-md mx-auto">
                  <Magnetic strength={0.2}>
                    <EmailForm
                      action={saveEmail}
                      placeholder={config.emailPlaceholder}
                      buttonText={config.notifyButton}
                    />
                  </Magnetic>
                </div>
              </FadeIn>

              {/* Features Grid */}
              <FadeIn delay={0.5}>
                <div className="pt-16">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {config.features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <Magnetic key={index} strength={0.15}>
                          <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-card/70 backdrop-blur-md h-full hover:scale-105">
                            <CardContent className="pt-8 text-center space-y-4">
                              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                <Icon className="w-10 h-10 text-primary" />
                              </div>
                              <h3 className="font-bold text-xl">
                                {feature.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {feature.description}
                              </p>
                            </CardContent>
                          </Card>
                        </Magnetic>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>

              {/* Social Links */}
              <FadeIn delay={0.6}>
                <div className="pt-12 flex items-center justify-center gap-6">
                  <Magnetic>
                    <Button
                      asChild
                      size="icon"
                      variant="ghost"
                      className="hover:scale-110 transition-transform"
                    >
                      <Link
                        href={config.socialLinks.twitter}
                        aria-label="Twitter"
                      >
                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Link>
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button
                      asChild
                      size="icon"
                      variant="ghost"
                      className="hover:scale-110 transition-transform"
                    >
                      <Link
                        href={config.socialLinks.instagram}
                        aria-label="Instagram"
                      >
                        <svg
                          className="size-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <line
                            x1="17.5"
                            y1="6.5"
                            x2="17.51"
                            y2="6.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button
                      asChild
                      size="icon"
                      variant="ghost"
                      className="hover:scale-110 transition-transform"
                    >
                      <Link
                        href={config.socialLinks.facebook}
                        aria-label="Facebook"
                      >
                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </Link>
                    </Button>
                  </Magnetic>
                </div>
              </FadeIn>

              {/* Footer */}
              <FadeIn delay={0.7}>
                <div className="text-sm text-muted-foreground">
                  <p>&copy; {siteConfig.footer.copyright}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </MouseParallax>
  );
}
