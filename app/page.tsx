'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import { Moon, Sun, Github, Linkedin, Mail, MapPin, Newspaper } from 'lucide-react'
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
    <div className={`min-h-screen flex flex-col ${inter.className} ${darkMode ? 'dark' : ''}`}>
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
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
          <p className="text-muted-foreground">
            Innovative and detail-oriented Senior Frontend Developer with 7+ years of experience in creating 
            responsive and accessible web applications. Proficient in modern JavaScript frameworks and committed 
            to delivering high-quality, user-centric solutions. Passionate about mentoring junior developers and 
            staying at the forefront of web technologies.
          </p>
        </section>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="skills">
            <AccordionTrigger>Skills</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Node.js', 'Git', 'Responsive Design', 'UI/UX', 'Performance Optimization', 'Agile Methodologies', 'RESTful APIs', 'GraphQL', 'Jest', 'Cypress'].map((skill) => (
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
                  <p className="text-sm text-muted-foreground">TechCorp Inc. | 2020 - Present</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Led the development of the company's flagship web application using React and Next.js, resulting in a 30% increase in user engagement</li>
                    <li>Improved application performance by 40% through code optimization and implementation of lazy loading techniques</li>
                    <li>Mentored a team of 5 junior developers, conducting regular code reviews and knowledge sharing sessions</li>
                    <li>Implemented a component library that reduced development time for new features by 25%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground">WebSolutions LLC | 2018 - 2020</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Developed and maintained 10+ client websites using JavaScript, HTML, and CSS, consistently meeting project deadlines</li>
                    <li>Collaborated with UX designers to implement responsive and accessible user interfaces, improving overall user satisfaction by 35%</li>
                    <li>Integrated third-party APIs and services to enhance website functionality, including payment gateways and social media platforms</li>
                    <li>Optimized website load times, achieving an average improvement of 50% across all projects</li>
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
                  <p className="text-sm text-muted-foreground">Tech University | 2020 - 2022</p>
                  <p className="text-sm">Thesis: "Optimizing React Applications for Performance and Accessibility"</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University of Technology | 2014 - 2018</p>
                  <p className="text-sm">Minor: User Experience Design</p>
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
                          <h4 className="font-semibold">Best Web Application Award</h4>
                          <p className="text-sm text-muted-foreground">TechCorp Annual Innovation Contest | 2023</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Outstanding Contributor</h4>
                          <p className="text-sm text-muted-foreground">React Community Recognition | 2022</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">1st Place, Hackathon</h4>
                          <p className="text-sm text-muted-foreground">City Tech Week | 2021</p>
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
                          <h4 className="font-semibold">AWS Certified Developer - Associate</h4>
                          <p className="text-sm text-muted-foreground">Amazon Web Services | 2023</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Google Professional Cloud Developer</h4>
                          <p className="text-sm text-muted-foreground">Google Cloud | 2022</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Certified Scrum Master (CSM)</h4>
                          <p className="text-sm text-muted-foreground">Scrum Alliance | 2021</p>
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
                          <h4 className="font-semibold">Advanced React Patterns</h4>
                          <p className="text-sm text-muted-foreground">Frontend Masters | 2023</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">Web Accessibility</h4>
                          <p className="text-sm text-muted-foreground">Udacity | 2022</p>
                        </li>
                        <li>
                          <h4 className="font-semibold">GraphQL Fundamentals</h4>
                          <p className="text-sm text-muted-foreground">Apollo GraphQL | 2021</p>
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
                  <h3 className="font-semibold">E-commerce Platform Revamp</h3>
                  <p className="text-sm">Led a team of 3 developers to rebuild a client's e-commerce platform using React, Next.js, and Stripe, resulting in a 25% increase in conversion rates and 40% faster page load times.</p>
                </div>
                <div>
                  <h3 className="font-semibold">AI-Powered Task Management App</h3>
                  <p className="text-sm">Developed a responsive task management application with React and Firebase, integrating GPT-3 for smart task categorization and priority suggestions, leading to a 50% improvement in user productivity.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Accessibility Audit Tool</h3>
                  <p className="text-sm">Created an open-source browser extension that helps developers identify and fix accessibility issues in real-time, garnering over 10,000 active users within the first month of release.</p>
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
            {darkMode ? 'Light Mode' : 'Dark Mode'}
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