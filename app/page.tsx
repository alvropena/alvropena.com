'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import { Moon, Sun, Github, Linkedin, Mail, MapPin, Newspaper, Download, Twitter, Link } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen flex flex-col w-full md:w-1/2 mx-auto ${inter.className} ${darkMode ? 'dark' : ''}`}>
      <header className="py-8 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Alvaro Peña</h1>
          <p className="text-xl text-muted-foreground mb-4">Senior Frontend Developer</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> San Francisco, CA
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Mail className="w-3 h-3" /> me@alvropena.com
            </Badge>
          </div>
          
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="skills">
            <AccordionTrigger>Skills</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                {['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adipiscing', 'Elit', 'Tempor', 'Incididunt', 'Labore', 'Dolore', 'Magna', 'Aliqua'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="experience">
            <AccordionTrigger>Work Experience</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground">Lorem Ipsum Inc. | 2020 - Present</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground">Dolor Sit LLC | 2018 - 2020</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>Sunt in culpa qui officia deserunt mollit anim id est laborum</li>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
                    <li>Quis autem vel eum iure reprehenderit qui in ea voluptate</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="education">
            <AccordionTrigger>Education</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Master of Science in Web Engineering</h3>
                  <p className="text-sm text-muted-foreground">Lorem University | 2020 - 2022</p>
                  <p className="text-sm">Thesis: &ldquo;Lorem ipsum dolor sit amet consectetur&ldquo;</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Ipsum University | 2014 - 2018</p>
                  <p className="text-sm">Minor: Lorem Ipsum Design</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="achievements">
            <AccordionTrigger>Achievements and Certifications</AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="awards">
                  <AccordionTrigger>Awards</AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                      <ul className="space-y-4">
                        <li>
                          <h4 className="font-semibold">Lorem Ipsum Award</h4>
                          <p className="text-sm text-muted-foreground">Dolor Annual Innovation | 2023</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Outstanding Lorem</h4>
                          <p className="text-sm text-muted-foreground">Ipsum Community Recognition | 2022</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">1st Place, Lorem</h4>
                          <p className="text-sm text-muted-foreground">Dolor Tech Week | 2021</p>
                        </li>
                      </ul>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="certifications">
                  <AccordionTrigger>Certifications</AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                      <ul className="space-y-4">
                        <li>
                          <h4 className="font-semibold">Lorem Certified Developer</h4>
                          <p className="text-sm text-muted-foreground">Ipsum Services | 2023</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Dolor Professional Developer</h4>
                          <p className="text-sm text-muted-foreground">Sit Cloud | 2022</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Certified Amet Master</h4>
                          <p className="text-sm text-muted-foreground">Consectetur Alliance | 2021</p>
                        </li>
                      </ul>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="courses">
                  <AccordionTrigger>Courses</AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                      <ul className="space-y-4">
                        <li>
                          <h4 className="font-semibold">Advanced Lorem Patterns</h4>
                          <p className="text-sm text-muted-foreground">Ipsum Masters | 2023</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Dolor Accessibility</h4>
                          <p className="text-sm text-muted-foreground">Sit Academy | 2022</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Amet Fundamentals</h4>
                          <p className="text-sm text-muted-foreground">Consectetur Learning | 2021</p>
                        </li>
                      </ul>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="projects">
            <AccordionTrigger>Projects</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Lorem</h3>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Ipsum</h3>
                  <p className="text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Dolor</h3>
                  <p className="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Button variant="outline" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem] mr-2" /> : <Moon className="h-[1.2rem] w-[1.2rem] mr-2" />}            
          </Button>          
          <Button variant="outline" size="icon">            
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>            
          </Button>
          <Button variant="outline" size="icon">            
              <Linkedin className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">LinkedIn</span>            
          </Button>
          <Button variant="outline" size="icon">              
              <Twitter className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Twitter</span>            
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Download Resume</span>
          </Button>
          <Button variant="outline">
            <a href="https://example.com/newsletter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Newspaper className="h-[1.2rem] w-[1.2rem]" />
              Newsletter
            </a>
          </Button>
        </div>
      </footer>
    </div>
  )
}