
'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bed, Mail, MapPin, Phone, Quote, Stethoscope, Syringe, User, MessageSquare, Building, HeartPulse } from 'lucide-react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ContactFormInputSchema } from '@/ai/schemas/contact-form';


type Product = {
  icon: React.ReactNode;
  name: string;
  description: string;
  images: string[];
  aiHint: string;
};

const products: Product[] = [
  {
    icon: <Bed className="h-10 w-10 text-primary" />,
    name: 'Modular Operation Theaters',
    description: 'We offer SS 304 Modular Operation Theaters, built to the highest standards for hospital use. Our modular, waterproof designs feature a polished finish, ensuring durability and hygiene. We provide PAN-India service for these state-of-the-art, NABH-compliant OTs.',
    images: [
      '/images/modular-ot.jpg',
      '/images/modular-ot1 (1).jpeg',
      '/images/modular-ot1 (6).jpeg'
    ],
    aiHint: 'operating room',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    name: 'Intensive Care Units (ICU)',
    description: 'We specialize in custom-designed ICU setups that adhere to NABH standards. Our ICUs are equipped with cutting-edge patient monitoring, advanced life support systems, and robust infection control measures for superior patient care.',
    images: [
      '/images/icu-setup (1).jpeg',
      '/images/icu-setup (2).jpeg',
      '/images/icu-setup (3).jpeg'
    ],
    aiHint: 'hospital ICU',
  },
  {
    icon: <Syringe className="h-10 w-10 text-primary" />,
    name: 'Medical Gas Pipelines',
    description: 'Our end-to-end Medical Gas Pipeline System (MGPS) installations adhere to the highest safety standards, including HTM 2022. We ensure a reliable and safe delivery of medical gases like Oxygen, Nitrous Oxide, and more, throughout your healthcare facility.',
    images: [
      '/images/gas-pipeline.jpeg',
      '/images/gas-pipeline (1).jpeg',
      '/images/gas-pipeline (2).jpeg'
    ],
    aiHint: 'medical equipment',
  },
  {
    icon: <Bed className="h-10 w-10 text-primary" />,
    name: 'Hospital Furniture',
    description: 'We supply a complete range of high-quality, durable, and ergonomic furniture for all hospital needs, including patient beds, examination tables, trolleys, and waiting area chairs, designed for comfort and functionality.',
    images: [
      '/images/hospital-furniture (1).jpeg',
      '/images/hospital-furniture (2).jpeg',
      '/images/hospital-furniture (3).jpeg'
    ],
    aiHint: 'hospital furniture',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    name: 'Oxygen Generation Plant',
    description: 'We install reliable and cost-effective on-site oxygen generation plants. Our solutions provide a continuous and autonomous supply of medical-grade oxygen, reducing dependency on external suppliers and ensuring critical care readiness.',
    images: ['/images/gas-pipeline.jpeg'],
    aiHint: 'oxygen plant',
  },
   {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    name: 'Air Conditioning System',
    description: 'We provide specialized HVAC systems designed for healthcare facilities. Our solutions ensure optimal air quality, precise temperature and humidity control, and compliance with standards for operating theatres and critical care areas.',
    images: ['/images/modular-ot.jpg'],
    aiHint: 'air conditioning',
  },
];

const galleryImages = [
    { src: '/images/modular-ot.jpg', alt: 'Operating Theater', aiHint: 'operating theater' },
    { src: '/images/icu-setup (1).jpeg', alt: 'ICU Room', aiHint: 'ICU room' },
    { src: '/images/modular-ot1 (1).jpeg', alt: 'Hospital Corridor', aiHint: 'hospital corridor' },
    { src: '/images/icu-setup (2).jpeg', alt: 'Hospital Interior', aiHint: 'hospital interior' },
    { src: '/images/gas-pipeline (1).jpeg', alt: 'Medical Equipment', aiHint: 'medical equipment' },
    { src: '/images/hospital-furniture (1).jpeg', alt: 'Hospital Exterior', aiHint: 'hospital exterior' },
    { src: '/images/hospital-furniture (2).jpeg', alt: 'Patient Room', aiHint: 'patient room' },
    { src: '/images/modular-ot1 (6).jpeg', alt: 'Modular OT', aiHint: 'modular ot' },
];

const testimonials = [
  {
    quote: "The professionalism and expertise of Genuine Hospi Enterprises were exceptional. They transformed our vision for a modern OT into reality, on time and within budget.",
    name: 'Dr. Anjali Sharma',
    title: 'Chief Surgeon, City General Hospital',
    logo: 'https://www.genuinehospi.com/images/clients/1.png',
    aiHint: 'hospital logo',
  },
  {
    quote: "Their attention to detail in our new ICU wing was remarkable. The quality of work and adherence to NABH standards is commendable. Our facility is now truly world-class.",
    name: 'Mr. Rajeev Mehta',
    title: 'Director, Sunshine Multispeciality Clinic',
    logo: 'https://www.genuinehospi.com/images/clients/2.png',
    aiHint: 'clinic logo',
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Genuine Hospi Logo" width={32} height={32} />
          <span className="font-headline text-2xl font-bold text-foreground">
            Genuine Hospi
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#products" className="transition-colors hover:text-primary">Products</a>
          <a href="#about" className="transition-colors hover:text-primary">About Us</a>
          <a href="#gallery" className="transition-colors hover:text-primary">Gallery</a>
          <a href="#testimonials" className="transition-colors hover:text-primary">Testimonials</a>
        </nav>
        <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90">
          <a href="#contact">Request a Consultation</a>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
       <div aria-hidden="true" className="absolute inset-0 top-0 h-full w-full bg-background bg-dot-primary/20 [mask-image:radial-gradient(ellipse_at_top,transparent_10%,black)]"></div>
      <div className="container mx-auto max-w-7xl px-4 text-center md:px-6 relative">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Building the Future of Healthcare, <span className="text-primary">Together.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Genuine Hospi Enterprises delivers state-of-the-art, NABH-compliant hospital infrastructure. From concept to completion, we are your trusted partner in creating world-class medical facilities.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90">
            <a href="#contact">Request a Consultation</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#products">Explore Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Top Products & Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide comprehensive solutions for modern hospital infrastructure.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-56">
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-56">
                          <Image
                            src={image}
                            alt={`${product.name} - View ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint={product.aiHint}
                            priority={index === 0}
                            loading={index === 0 ? 'eager' : 'lazy'}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              <CardHeader className="flex-row items-center gap-4">
                {product.icon}
                <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4">
                 <p className="font-semibold text-primary">Contact us for details</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Genuine Hospi Enterprises</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Established in 2015, Genuine Hospi Enterprises provides comprehensive hospital setup solutions across India. Our expertise encompasses designing and building ICU and modular OT units that adhere to NABH compliance standards. This includes medical gas pipeline systems, oxygen and nitrous oxide manifolds, and complete plant installations.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our mission is to empower healthcare providers with facilities that enhance patient care, improve safety, and optimize operational efficiency.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/modular-ot1 (1).jpeg"
              alt="Hospital interior"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="hospital interior"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the state-of-the-art facilities we've built.
          </p>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                       <Image src={image.src} alt={image.alt} width={800} height={600} className="w-full h-full object-cover" data-ai-hint={image.aiHint} loading={index === 0 ? 'eager' : 'lazy'} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to have partnered with leading healthcare providers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <CardContent className="p-0">
                <Quote className="h-8 w-8 text-primary/50" />
                <blockquote className="mt-4 text-lg font-medium text-foreground">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="mt-6 flex items-center gap-4 p-0">
                <Avatar>
                  <AvatarImage src={testimonial.logo} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof ContactFormInputSchema>>({
    resolver: zodResolver(ContactFormInputSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormInputSchema>) {
    setIsSubmitting(true);
    try {
      // Create a FormData object to send to FormSubmit
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      if (values.phone) {
        formData.append('phone', values.phone);
      }
      formData.append('message', values.message);

      // Disable captcha for better UX
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/rohitsingh8885882@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: "Thank you for reaching out. We'll get back to you shortly.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send email via FormSubmit');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or a project in mind? Fill out the form or use the contact details below. We're here to help.
            </p>
             <div className="mt-8 space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Head Office</h3>
                        <span>204, St 02, Sanjay Gandhi Nagar, Industrial Area, Jalandhar, 144004, Punjab</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a href="tel:6207507418" className="hover:text-primary">62075 07418 (Main)</a>
                </div>
                 <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a href="tel:9478884840" className="hover:text-primary">94788 84840</a>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a href="mailto:rohitsingh8885882@gmail.com" className="hover:text-primary">rohitsingh8885882@gmail.com</a>
                </div>
             </div>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 12345 67890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us how we can help..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" disabled={isSubmitting} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="w-full hover:bg-accent/90">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="w-full bg-muted py-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Genuine Hospi Logo" width={32} height={32} />
            <span className="font-headline text-2xl font-bold text-foreground">Genuine Hospi</span>
          </a>
          <p className="mt-2 text-muted-foreground">Your partner in building world-class hospitals.</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-headline text-xl font-semibold text-foreground">Contact Information</h3>
          <div className="mt-4 space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
              <div>
                <span className="font-semibold text-foreground">Head Office</span><br/>
                <span>204, st 02, sanjay gandhi nagar, Industrial area jalandhar,144004, Punjab</span>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
              <div>
                <span className="font-semibold text-foreground">Branch Office</span><br/>
                <span>Bazaar, Pachrukhi, Siwan, Bihar 841241</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <a href="tel:6207507418" className="hover:text-primary">62075 07418 (Main)</a>
            </div>
             <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <a href="tel:9478884840" className="hover:text-primary">94788 84840</a>
            </div>
             <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
              <a href="mailto:rohitsingh8885882@gmail.com" className="hover:text-primary">rohitsingh8885882@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 max-w-7xl border-t px-4 pt-6 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {new Date().getFullYear()} Genuine Hospi Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
}
