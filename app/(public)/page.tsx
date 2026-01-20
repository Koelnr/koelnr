import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, ScrollReveal, Parallax } from "@/components/animations";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <FadeIn>
          <div className="text-center space-y-8">
            <FadeIn delay={0}>
              <Badge className="mb-4" variant="outline">
                {siteConfig.tagline}
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {siteConfig.hero.title.split("Koelnr")[0]}
                <span className="text-primary">{siteConfig.name}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3} y={30}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                {siteConfig.hero.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.6} scale={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8">
                  {siteConfig.hero.primaryCTA}
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  {siteConfig.hero.secondaryCTA}
                </Button>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-background">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {siteConfig.features.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteConfig.features.subtitle}
          </p>
        </div>

        <ScrollReveal stagger={0.2} childSelector=".reveal-item">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.features.items.map((feature, index) => (
              <Card
                key={index}
                className="reveal-item border-2 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Car Wash Animation Section */}
      <Parallax className="relative overflow-hidden py-32 bg-linear-to-br from-primary/10 to-primary/25">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {siteConfig.carCare.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {siteConfig.carCare.description}
              </p>
              <ul className="space-y-4">
                {siteConfig.carCare.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src={siteConfig.carCare.imageUrl}
                alt={siteConfig.carCare.imageAlt}
                fill
                className="car-image w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="wash-bubble absolute top-10 right-10 w-16 h-16 bg-primary/30 rounded-full blur-xl"></div>
              <div className="wash-bubble absolute top-20 right-32 w-12 h-12 bg-primary/40 rounded-full blur-lg"></div>
              <div className="wash-bubble absolute top-32 right-20 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="wash-bubble absolute bottom-20 left-10 w-14 h-14 bg-primary/35 rounded-full blur-lg"></div>
              <div className="wash-bubble absolute bottom-32 left-24 w-10 h-10 bg-primary/30 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {siteConfig.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteConfig.pricing.subtitle}
          </p>
        </div>

        <ScrollReveal stagger={0.15} childSelector=".reveal-item">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Tier 1: Premium Subscription */}
            <Card className="reveal-item relative border-4 border-primary shadow-xl">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                {siteConfig.pricing.tiers.premium.badge}
              </Badge>
              <CardHeader className="space-y-4">
                <CardTitle className="text-3xl">
                  {siteConfig.pricing.tiers.premium.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {siteConfig.pricing.tiers.premium.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold">
                    {siteConfig.pricing.tiers.premium.currency}
                    {siteConfig.pricing.tiers.premium.price}
                  </span>
                  <span className="text-muted-foreground">
                    /{siteConfig.pricing.tiers.premium.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Separator />
                <div className="space-y-4">
                  {siteConfig.pricing.tiers.premium.features.map(
                    (feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl">✓</span>
                        <div>
                          <p className="font-semibold">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {feature.detail}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground italic">
                  {siteConfig.pricing.tiers.premium.exclusions}
                </p>
                <Button size="lg" className="w-full text-lg">
                  {siteConfig.pricing.tiers.premium.cta}
                </Button>
              </CardContent>
            </Card>

            {/* Tier 2: On-Demand Quick Wash */}
            <Card className="reveal-item border-2">
              <CardHeader className="space-y-4">
                <CardTitle className="text-3xl">
                  {siteConfig.pricing.tiers.onDemand.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {siteConfig.pricing.tiers.onDemand.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold">
                    {siteConfig.pricing.tiers.onDemand.currency}
                    {siteConfig.pricing.tiers.onDemand.price}
                  </span>
                  <span className="text-muted-foreground">
                    /{siteConfig.pricing.tiers.onDemand.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Separator />
                <div className="space-y-4">
                  {siteConfig.pricing.tiers.onDemand.features.map(
                    (feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl">✓</span>
                        <div>
                          <p className="font-semibold">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {feature.detail}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                  <Badge variant="secondary" className="mt-4">
                    {siteConfig.pricing.tiers.onDemand.badge}
                  </Badge>
                </div>
                <Separator />
                <Button size="lg" variant="outline" className="w-full text-lg">
                  {siteConfig.pricing.tiers.onDemand.cta}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tier 3: À La Carte Add-Ons */}
            <Card className="reveal-item border-2">
              <CardHeader className="space-y-4">
                <CardTitle className="text-3xl">
                  {siteConfig.pricing.tiers.alaCarte.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {siteConfig.pricing.tiers.alaCarte.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">
                    {siteConfig.pricing.tiers.alaCarte.currency}
                    {siteConfig.pricing.tiers.alaCarte.priceRange}
                  </span>
                  <span className="text-muted-foreground">
                    /{siteConfig.pricing.tiers.alaCarte.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Separator />
                <div className="space-y-3">
                  {siteConfig.pricing.tiers.alaCarte.services.map(
                    (service, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="font-semibold">{service.name}</span>
                        <Badge variant="outline">
                          {siteConfig.pricing.tiers.alaCarte.currency}
                          {service.price}
                        </Badge>
                      </div>
                    ),
                  )}
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  {siteConfig.pricing.tiers.alaCarte.note}
                </p>
                <Button size="lg" variant="outline" className="w-full text-lg">
                  {siteConfig.pricing.tiers.alaCarte.cta}
                </Button>
              </CardContent>
            </Card>

            {/* Tier 4: B2B Corporate */}
            <Card className="reveal-item border-2 bg-muted">
              <CardHeader className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {siteConfig.pricing.tiers.corporate.badge}
                </Badge>
                <CardTitle className="text-3xl">
                  {siteConfig.pricing.tiers.corporate.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {siteConfig.pricing.tiers.corporate.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">
                    {siteConfig.pricing.tiers.corporate.currency}
                    {siteConfig.pricing.tiers.corporate.priceRange}
                  </span>
                  <span className="text-muted-foreground">
                    /{siteConfig.pricing.tiers.corporate.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Separator />
                <div className="space-y-4">
                  {siteConfig.pricing.tiers.corporate.features.map(
                    (feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl">✓</span>
                        <div>
                          <p className="font-semibold">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {feature.detail}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <Separator />
                <Button size="lg" className="w-full text-lg">
                  {siteConfig.pricing.tiers.corporate.cta}
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {siteConfig.process.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {siteConfig.process.subtitle}
            </p>
          </div>

          <ScrollReveal stagger={0.15} childSelector=".reveal-item">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {siteConfig.process.steps.map((step) => (
                <div
                  key={step.number}
                  className="reveal-item text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            {siteConfig.cta.title}
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            {siteConfig.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary">
              {siteConfig.cta.primaryButton}
            </Button>
            <Button size="lg" variant="outline">
              {siteConfig.cta.secondaryButton}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
