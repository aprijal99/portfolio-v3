import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon} from '@radix-ui/react-icons'
import Link from 'next/link'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

export default function Home() {
  return (
    <main>
      <div className='container mx-auto px-5 sm:px-10 py-5 max-w-5xl'>

        {/* Header */}
        <div className='mb-5'>
          <div className='flex justify-between pb-2'>
            <h2 className='text-2xl sm:text-3xl font-black flex-initial'>
              Aprijal Ghiyas S
            </h2>
            <div className='flex space-x-2'>
              <Link href='https://github.com/aprijal99' target='_blank'>
                <Button variant='outline' size='icon'>
                  <GitHubLogoIcon className='scale-125'/>
                </Button>
              </Link>
              <Link href='https://www.linkedin.com/in/aprijalghiyas/' target='_blank'>
                <Button variant='outline' size='icon'>
                  <LinkedInLogoIcon className='scale-125'/>
                </Button>
              </Link>
              <Link href='mailto:aprijalghiyas@gmail.com' target='_blank'>
                <Button variant='outline' size='icon'>
                  <EnvelopeOpenIcon className='scale-125'/>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className='font-bold mb-3 text-center text-lg'>My Profile</div>

        <Card className='flex flex-col md:flex-row overflow-hidden w-full mb-7'>
          <CardContent className='p-5 max-w-96 sm:min-w-80 self-center md:self-start'>
            <img src='/myself.jpg' alt='Aprijal Ghiyas Setiawan' className='w-full rounded-xl'/>
            <CardTitle className='text-center mt-3'>Bandung, West Java, Indonesia</CardTitle>
          </CardContent>
          <CardHeader className='flex-grow p-5 md:pl-0 pt-0 md:pt-5'>
            <div className='text-sm mb-2'>
              A postgraduate student at the Bandung Institute of Technology with a major in Biochemistry,
              who also enjoys programming, especially in its application in the fields of computational chemistry,
              bioinformatics, and data analysis
            </div>

            <CardTitle>Education</CardTitle>
            <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
              <li>Bandung Institute of Technology | Biochemistry | 2023 - Expected 2025</li>
              <li>IPB University | Biochemistry | 2018 - 2022</li>
              <li>Bogor Vocational High School of Chemical Analyst | 2014 - 2018</li>
            </ul>

            <br/>

            <CardTitle>Expertise</CardTitle>
            <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
              <li>Analytical Laboratory Skills</li>
              <li>Computational Chemistry (Molecular Docking, Molecular Dynamics Simulation)</li>
              <li>Bioinformatics and Data Analysis</li>
              <li>Programming</li>
            </ul>
          </CardHeader>
        </Card>

        {/* Biocomputation Projects */}
        <div className='font-bold mb-3 text-center text-lg'>Biocomputation Projects</div>

        <div className='grid grid-rows-none sm:grid-cols-2 gap-3 mb-7'>
          <Card className='w-full overflow-hidden'>
            <CardContent className='p-0'>
              <img src='/docking.jpg' alt='Docking' className='w-full filter-grayscale'/>
            </CardContent>
            <CardHeader>
              <CardTitle>Virtual Screening Program</CardTitle>
              <div className='text-sm mb-2'>
                This program is written in Google Colab to facilitate running docking applications such as AutoDock Vina
                and AutoDock 4,
                leveraging substantial computing resources (CPU and GPU), and enabling virtual screening of thousands of
                compounds
              </div>
              <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
                <li><Link href='https://colab.research.google.com/drive/1_x8DasllUtTbo6Y22lnFqrWD3RQPJpnU' className='underline' target='_blank'>GridBox Validation Program</Link></li>
                <li><Link href='https://colab.research.google.com/drive/12tCNB7uJbxd17zcfT0uz9il5rAsQFWyf' className='underline' target='_blank'>AutoDock Vina Program</Link></li>
                <li><Link href='https://colab.research.google.com/drive/1ex7raJn8rIW7INOSFdvtIWcgfice1Ws5' className='underline' target='_blank'>AutoDock 4 Program</Link></li>
              </ul>
            </CardHeader>
          </Card>

          <Card className='w-full overflow-hidden'>
            <CardContent className='p-0'>
              <img src='/md.jpg' alt='Molecular Dynamics' className='w-full filter-grayscale'/>
            </CardContent>
            <CardHeader>
              <CardTitle>Molecular Dynamic Simulation Program</CardTitle>
              <div className='text-sm mb-2'>
                Molecular Dynamics (MD) simulations using GROMACS require significant GPU resources, and one way to run
                them is within a Google Colab server.
                This program is designed for this purpose, simplifying the execution of the lengthy GROMACS steps
              </div>
              <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
                <li><Link href='https://colab.research.google.com/drive/12q7YFODaT4tOloMg77-sEDQnl3ohep1Q' className='underline' target='_blank'>GROMACS Program</Link></li>
              </ul>
            </CardHeader>
          </Card>

          <Card className='overflow-hidden sm:col-span-2 sm:w-[calc(50%-calc(0.75rem/2))] sm:m-auto'>
            <CardContent className='p-0'>
              <img src='/phylogenetic.jpg' alt='Phylogenetic Tree' className='w-full filter-grayscale'/>
            </CardContent>
            <CardHeader>
              <CardTitle>Phylogenetic Tree Program</CardTitle>
              <div className='text-sm mb-2'>
                DaliLite 5 is a tool for building a phylogenetic tree from protein structures (not just their
                sequences).
                While the program can be run for free on its server, the number of structures that can be submitted is
                limited.
                Therefore, this program is created in Google Colab to leverage DaliLite 5 for a large number of protein
                structures
              </div>
              <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
                <li><Link href='https://colab.research.google.com/drive/1Y6QPLWiZcSFJpA7-Vw7nFQFXaTIg8qvy?usp=sharing' className='underline' target='_blank'>DaliLite 5 Program</Link></li>
              </ul>
            </CardHeader>
          </Card>
        </div>

        {/* Bioinformatics Projects */}
        <div className='font-bold mb-3 text-center text-lg'>Bioinformatics Projects</div>

        <div className='grid grid-rows-none sm:grid-cols-2 gap-3 mb-7'>
          <Card className='w-full overflow-hidden'>
            <CardContent className='p-0'>
              <img src='/scraping.jpg' alt='Scraping' className='w-full filter-grayscale'/>
            </CardContent>
            <CardHeader>
              <CardTitle>Database Scraping Program</CardTitle>
              <div className='text-sm mb-2'>
                Data scraping is performed using Python with the ScraPy and Selenium libraries.
                Some databases that have been automatically scraped include HerbalDB, KNApSAcK, PubChem, UniProt, APD,
                DBAASP, and DRAMP
              </div>
              <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
                <li><Link href='https://github.com/aprijal99/knapsack-scraping' className='underline' target='_blank'>KNApSAcK Scraper (ScraPy)</Link></li>
                <li><Link href='https://github.com/aprijal99/database-scraping' className='underline' target='_blank'>KNApSAcK and HerbalDB Scraper (Selenium)</Link></li>
                <li><Link href='https://github.com/aprijal99/pubchem-uniprot-scraper' className='underline' target='_blank'>PubChem and UniProt Scraper (ScraPy)</Link></li>
                <li><Link href='https://github.com/aprijal99/apd-scraper' className='underline' target='_blank'>APD, DBAASP, and DRAMP Scraper (ScraPy)</Link></li>
              </ul>
            </CardHeader>
          </Card>

          <Card className='w-full overflow-hidden'>
            <CardContent className='p-0'>
              <img src='/plotting.jpg' alt='MD Results Plotting' className='w-full filter-grayscale'/>
            </CardContent>
            <CardHeader>
              <CardTitle>Python for Analyzing MD Results</CardTitle>
              <div className='text-sm mb-2'>
                The results of Molecular Dynamics (MD) simulations using GROMACS or obtained through the VMD program are typically numerical data.
                The process of plotting graphs can be done using Python with the NumPy and Matplotlib libraries
              </div>
              <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
                <li><Link href='https://colab.research.google.com/drive/1psmvwMdlBlxyVRuwraR939GL48mJLFnk' className='underline' target='_blank'>MD Analysis</Link></li>
              </ul>
            </CardHeader>
          </Card>
        </div>

        {/* Web Projects */}
        <div className='font-bold mb-3 text-center text-lg'>Web Projects</div>

        <div className='grid grid-rows-none sm:grid-cols-2 gap-3 mb-7'>
          <Card className='w-full overflow-hidden'>
            <CardContent className='p-0'>
              <img src='/herbalchem.jpg' alt='HerbalChem' className='w-full filter-grayscale'/>
            </CardContent>
            <CardHeader>
              <CardTitle>HerbalChem: Compound Database</CardTitle>
              <div className='text-sm mb-2'>
                This website is a replica of the PubChem compound database. The frontend is built using the Next.js
                framework,
                while the backend follows microservices principles using the Spring Boot framework.
                Elasticsearch is employed as the database to store information about the compounds
              </div>
              <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
                <li><Link href='https://github.com/aprijal99/herbalchem' className='underline' target='_blank'>GitHub Link</Link></li>
              </ul>
            </CardHeader>
          </Card>

          <Card className='w-full overflow-hidden'>
            <CardContent className='p-0'>
              <img src='/ngobrol.png' alt='Ngobrol' className='w-full filter-grayscale'/>
            </CardContent>
            <CardHeader>
              <CardTitle>Ngobrol: Real-Time Messaging Application</CardTitle>
              <div className='text-sm mb-2'>
                An instant messaging application similar to WhatsApp, but without the capability for phone calls.
                Contacts within the app are based on email addresses. Users can create groups and add others to them.
                The frontend is built using the Next.js framework, and the backend is developed with the Spring Boot framework
              </div>
              <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
                <li><Link href='https://github.com/aprijal99/ngobrol-messaging-application' className='underline' target='_blank'>GitHub Link</Link></li>
              </ul>
            </CardHeader>
          </Card>

          <Card className='overflow-hidden sm:col-span-2 sm:w-[calc(50%-calc(0.75rem/2))] sm:m-auto'>
            <CardContent className='p-0'>
              <img src='/virtualica.jpg' alt='Virtualica' className='w-full filter-grayscale'/>
            </CardContent>
            <CardHeader>
              <CardTitle>Virtualica: Video Conference Application</CardTitle>
              <div className='text-sm mb-2'>
                An application for conducting conference calls similar to Google Meet and Zoom. The frontend is built using the Next.js framework,
                and the backend is developed with the Spring Boot framework
              </div>
              <ul className='text-sm my-6 ml-6 list-disc [&>li]:mt-0.5'>
                <li><Link href='https://github.com/aprijal99/virtualica-video-conference' className='underline' target='_blank'>GitHub Link</Link></li>
              </ul>
            </CardHeader>
          </Card>
        </div>

        {/* Programming Skill */}
        <div className='font-bold mb-3 text-center text-lg'>Programming Tools</div>

        <div className='grid grid-rows-none sm:grid-cols-2 gap-3 mb-7'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Multipurpose Programming Language</CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center space-x-5'>
              <ProgrammingLogo logo='/python.svg' name='Python'/>
              <ProgrammingLogo logo='/cpp.svg' name='C++'/>
            </CardContent>
          </Card>

          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Web Programming Language</CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center space-x-7 items-baseline'>
              <ProgrammingLogo logo='/js.svg' name='JavaScript'/>
              <ProgrammingLogo logo='/typescript.svg' name='TypeScript' height='h-9'/>
              <ProgrammingLogo logo='/java.svg' name='Java'/>
            </CardContent>
          </Card>

          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Database</CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center space-x-7 items-baseline'>
              <ProgrammingLogo logo='/mysql.svg' name='MySQL'/>
              <ProgrammingLogo logo='/mariadb.svg' name='MariaDB'/>
              <ProgrammingLogo logo='/mongodb.svg' name='MongoDB'/>
            </CardContent>
          </Card>

          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Web Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='text-sm ml-6 list-disc'>
                <li>Frontend: React.js, Next.js</li>
                <li>Backend: Spring Boot</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Publication */}
        <div className='font-bold mb-3 text-center text-lg'>Publications</div>

        <Card className='w-full'>
          <CardContent>
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-left'>Probing antibacterial drugs for Fusobacterium nucleatum subsp.
                  nucleatum ATCC 25586 targeting UDP-N-acetylglucosamine 1-carboxyltransferase</AccordionTrigger>
                <AccordionContent>
                  <div>Journal of Advanced Pharmaceutical Technology & Research</div>
                  <div>Published on Jul 28, 2023</div>
                  <Link href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10483916' className='underline'
                        target='_blank'>
                    Show publication
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='text-left'>Phosphoenolpyruvate protein phosphotransferase of
                  periodontopathogen Fusobacterium nucleatum: Structural investigation and inhibitor exploration using
                  computational approaches</AccordionTrigger>
                <AccordionContent>
                  <div>RASAYAN Journal of Chemistry</div>
                  <div>Published on Jul 1, 2023</div>
                  <Link href='http://dx.doi.org/10.31788/RJC.2023.1638379' className='underline' target='_blank'>
                    Show publication
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger className='text-left'>Anti-ulceritis activity of various herbal plants and future
                  prospects as cultivated plants</AccordionTrigger>
                <AccordionContent>
                  <div>Jurnal Sains dan Kesehatan</div>
                  <div>Published on Jun 30, 2022</div>
                  <Link href='https://doi.org/10.25026/jsk.v4i3.1046' className='underline' target='_blank'>
                    Show publication
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger className='text-left'>Analisis protein virus chikungunya varian Indonesia untuk desain
                  antivirus dari senyawa bioaktif herbal Indonesia</AccordionTrigger>
                <AccordionContent>
                  <div>IPB University (Undergraduate Thesis)</div>
                  <div>Published on Aug, 2022</div>
                  <Link href='https://repository.ipb.ac.id/handle/123456789/114389' className='underline'
                        target='_blank'>
                    Show publication
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function ProgrammingLogo({logo, name, height = 'h-10'}: { logo: string, name: string, height?: string }) {
  return (
    <div className='flex flex-col space-y-1 align-bottom'>
      <img
        src={logo}
        alt={name}
        className={`${height} self-center`}
      />
      <div className='text-sm text-center'>{name}</div>
    </div>
  )
}