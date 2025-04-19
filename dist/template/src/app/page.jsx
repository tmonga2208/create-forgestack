import Navbar from "../components/navbar";
import { ModeToggle } from "../components/theme-button";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (<div className="flex flex-col min-h-screen bg-background">
      <Navbar />   
      <main className="flex-1">
        <section className="container px-4 py-16 md:py-24 lg:py-32 space-y-8 md:space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-10">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-32">
                <Image src="/firebase.png" alt="Firebase Logo" layout="fill" objectFit="contain" priority/>
              </div>
              <span className="text-xl px-3 py-1 font-medium">+</span>
              <div className="relative h-14 w-28">
                <Image src="/image.png" alt="Next.js Logo" layout="fill" objectFit="contain" priority/>
              </div>
            </div>
            
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Welcome to ForgeStack
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A modern fullstack template combining Next.js, Tailwind CSS, and Firebase for rapid application development
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/yourusername/forgestack" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.008C9.52 20.768 9.512 20.058 9.508 19.192C6.726 19.8 6.14 17.782 6.14 17.782C5.684 16.642 5.026 16.334 5.026 16.334C4.132 15.728 5.096 15.74 5.096 15.74C6.084 15.81 6.62 16.758 6.62 16.758C7.5 18.266 8.976 17.83 9.54 17.574C9.63 16.928 9.89 16.492 10.17 16.244C7.96 15.996 5.64 15.152 5.64 11.344C5.64 10.228 6.046 9.314 6.64 8.596C6.54 8.342 6.18 7.406 6.74 6.07C6.74 6.07 7.56 5.806 9.5 7.074C10.3 6.858 11.15 6.75 12 6.746C12.85 6.75 13.7 6.858 14.5 7.074C16.44 5.806 17.26 6.07 17.26 6.07C17.82 7.406 17.46 8.342 17.36 8.596C17.954 9.314 18.36 10.228 18.36 11.344C18.36 15.162 16.036 15.992 13.82 16.236C14.16 16.534 14.48 17.142 14.48 18.062C14.48 19.358 14.46 20.674 14.46 21.008C14.46 21.274 14.64 21.586 15.146 21.49C19.119 20.162 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                  </svg>
                  GitHub Repository
                </Link>
              </Button>
            </div>
          </div>

          <Separator className="my-8"/>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Powerful Features</h2>
              <p className="text-muted-foreground">Everything you need to build modern web applications</p>
            </div>
            
            <Tabs defaultValue="stack" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="stack">Tech Stack</TabsTrigger>
              </TabsList>
              
              <TabsContent value="stack" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                        </svg>
                        Next.js
                      </CardTitle>
                      <CardDescription>React Framework</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Built-in routing, API routes, server components, and optimized rendering strategies.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"/>
                          <line x1="16" y1="8" x2="2" y2="22"/>
                          <line x1="17.5" y1="15" x2="9" y2="15"/>
                        </svg>
                        Tailwind CSS
                      </CardTitle>
                      <CardDescription>Utility-first CSS</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Rapid UI development without leaving your HTML, with shadcn/ui components for consistency.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                          <line x1="4" y1="22" x2="4" y2="15"/>
                        </svg>
                        Firebase
                      </CardTitle>
                      <CardDescription>Backend as a Service</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Authentication, Firestore, Storage, and Functions for a complete backend solution.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <Card className="max-w-4xl mx-auto border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Ready to start building?</h3>
                  <p className="text-muted-foreground">Get your project up and running in minutes.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/docs/getting-started">Get Started</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <footer className="border-t bg-muted/40">
        <div className="container px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="font-semibold">ForgeStack</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ForgeStack. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
      
      <div className="fixed bottom-4 right-4 z-50">
        <ModeToggle />
      </div>
    </div>);
}
