import ContentBlock from '@/components/ContentBlock';
import SubContent from '@/components/SubContent';
import { Typography, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Image from 'next/image';
import pic1 from '@/assets/pic1.png';
import pic2 from '@/assets/pic2.png';
import Link from 'next/link';
import TableOfContent from '@/components/TableOfContent';

//functions to create data for tables
const createData1 = (approach, spa, mpa) => {
  return { approach, spa, mpa };
};

const createData2 = (criteria, spa, mpa) => {
  return { criteria, spa, mpa };
};

// Data for tables
const strengths = [
  'Faster loading and responding time',
  'Cross-platform functionality',
  'Better user experience',
  'Flexibility in building feature-rich applications',
  'Fast development and easier code maintenance',
  'Mobile friendly',
  'Better caching capabilities',
];

const weaknesses = [
  'Poor performance of search engine optimization',
  'Security concerns',
  'Lack of scalability',
  'Not friendly for users who disable JavaScript',
  'Hard to track traffic hence site analytics disadvantages',
  'Navigation challenges (back and forward buttons)',
  'Memory leaks when developed with some frameworks',
];

const row1 = [
  createData1(
    'Initial HTML Page Load',
    'Loads a single HTML page initially.',
    'Consists of multiple HTML pages, each representing a distinct view.',
  ),
  createData1(
    'Client-Side Logic',
    'Most of the application logic resides on the client-side.',
    'Server-side rendering is common.',
  ),
  createData1(
    'Frameworks',
    'Utilizes JavaScript frameworks like React, Angular, or Vue.js.',
    'Follows a traditional request-response model.',
  ),
  createData1(
    'Content Updates',
    'Dynamically updates content without full page reloads.',
    'Each user interaction leads to a full page reload.',
  ),
  createData1(
    'Development Complexity',
    'Requires client-side routing and complex state management.',
    'Development process is simpler.',
  ),
  createData1(
    'Advantages',
    'Offers a responsive and fluid user experience.',
    'Simplicity can be advantageous for smaller teams or projects.',
  ),
];

const row2 = [
  createData2(
    'Client-Side Scripting',
    'Relies heavily on client-side scripting for application logic.',
    'Limited client-side scripting required.',
  ),
  createData2(
    'Routing & State Management',
    'Requires implementation of client-side routing and state management.',
    'Follows traditional server-side routing and state management.',
  ),
  createData2(
    'Asynchronous Data Fetching',
    'Involves complex asynchronous data fetching on the client-side.',
    'Data fetching typically handled synchronously on the server-side.',
  ),
  createData2(
    'Application State Handling',
    'Developers need to ensure proper handling of application state.',
    'Application state management is simpler.',
  ),
  createData2(
    'Memory Management',
    'Requires attention to memory management to prevent performance issues.',
    'Memory management concerns are minimized.',
  ),
  createData2(
    'Development Process',
    'More complex development process compared to MPA.',
    'Simpler development process akin to traditional web development.',
  ),
  createData2(
    'Resource Requirements',
    'May require more experienced developers and additional resources.',
    'Can be developed with fewer resources and less expertise.',
  ),
];
const tableHeadings = [
  'What are SPAs',
  'History',
  'Philosophy',
  'How do SPAs work',
  'How do SPAs fundamentally differ from traditional web application development?',
  'Technologies',
  'Strengths and weaknesses',
  'Best suited business problem',
  'References',
];
export default function Spas() {
  return (
    <>
      <ContentBlock heading='Single Page Applications'>
        {' '}
        <TableOfContent tableHeadings={tableHeadings} />
        <SubContent heading='What are SPAs?' id='1'>
          <Typography gutterBottom>
            SPA, Single Page Application, is a website or web application that
            loads the content in a single page and dynamically updates the
            content instead of reloading the whole page, upon user’s request. It
            renders JavaScript code directly in a browser (BasuMallick, 2022),
            therefore it provides a faster initial load time. It is the most
            popular solution for lot of businesses who are after a rich user
            interface with many features (Microsoft Learn, 2023).
          </Typography>
        </SubContent>
        <SubContent heading='History' id='2'>
          <Typography gutterBottom>
            Although the origin of the term of SPA remains controversial, it is
            certain that SPA has solved the challenges which the traditional web
            application, or the MPA (multi-page application) was facing back in
            2000s.{' '}
          </Typography>
          <Typography gutterBottom>
            The timeline below shows the road to SPA (ĆWIK, 2021;Jaman,2019;
            synodus, n.d.; iamprovidence, 2023){' '}
          </Typography>
          {/* Timeline start */}
          <Timeline position='alternate'>
            <TimelineItem>
              <TimelineOppositeContent color='transparent'></TimelineOppositeContent>
              <TimelineSeparator color='transparent'></TimelineSeparator>
              <TimelineContent color='transparent'></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='#F18805'>
                1990s
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6'>MPA dominant era</Typography>
                <Typography variant='body2'>
                  Start to face challenges of data over-processing and complex
                  UI design
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='#D95D39'>
                Early 2000s
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6'>MPA+AJAX pattern </Typography>
                <Typography variant='body2'>
                  Improved the performance of MPAs by allowing updating the
                  content partly.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='#F0A202'>
                2006
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6'> JQuery released </Typography>
                <Typography variant='body2'>
                  laying the groundwork for future SPA frameworks by
                  streamlining UI development and encouraging innovation in data
                  handling techniques.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color='#F0A202'>
                2009
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6'> Backbone.js released </Typography>
                <Typography variant='body2'>
                  Offered lightweight client-side framework to build a SPA
                  easily, but later was complained with heavy workload to code
                  as well as the repetitive code.{' '}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='#D95D39'>
                2010
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6'> AngularJS released </Typography>
                <Typography variant='body2'>
                  bringing in a true workable SPA framework{' '}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='#F1B500'>
                Now
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6'>
                  {' '}
                  SPA is as popuplar as MPA{' '}
                </Typography>
                <Typography variant='body2'>
                  SPA is widely used as solutions for websites that require
                  multiple interactions with the user where the dynamics and
                  smoothness of their operation is crucial.{' '}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='transparent'></TimelineOppositeContent>
              <TimelineSeparator color='transparent'></TimelineSeparator>
              <TimelineContent color='transparent'></TimelineContent>
            </TimelineItem>
          </Timeline>
          {/* Timeline end */}{' '}
        </SubContent>
        <SubContent heading='Philosophy' id='3'>
          <Typography gutterBottom>
            As it is mentioned above, the basic concept of SPA is to load the
            page content in one go and to update the portion on which a user has
            acted. SPA aims to provide users with a fast and seamless experience
            by loading only one web page and dynamically updating it as the user
            interacts with the application.{' '}
          </Typography>
          <Typography gutterBottom>
            Good SPA frameworks provide a set of principles that can be used to
            develop the foundation of a website that meet requirements of a SPA
            (Morozova,2021):{' '}
          </Typography>
          <Typography>
            <ul>
              <li>Comprehensive client navigation support.</li>
              <li>Consistency of data defining.</li>
              <li>
                Caching storage to continuously store working state of client.
              </li>
              <li>
                Initialization load must include all required scripts for the
                application to start.
              </li>
              <li>
                Subsequent modules to the main ones must be loaded on demand.
              </li>
            </ul>
          </Typography>
        </SubContent>
        <SubContent heading='How do SPAs work?' id='4'>
          <Typography gutterBottom>
            Different from MPA which needs to load several web pages and reload
            the whole page when data is updated, SPA automatically rewrite the
            content in one single page.{' '}
          </Typography>

          <Typography gutterBottom>
            Each SPA website initially downloads content from a specific URL,
            including HTML, CSS, and JavaScript assets. When a user interacts
            with the SPA, such as clicking on components, data is fetched from
            the server via an API in JSON format. This data is then used to
            update specific components on the page without requiring a full
            reload (synodus, n.d.).
          </Typography>
        </SubContent>
        {/* figures */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
            my: 7,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Image
              src={pic1}
              alt='how does mpa works'
              width='auto'
              height='auto'
            />
            <Image
              src={pic2}
              alt='how does spa works'
              width='auto'
              height='auto'
            />{' '}
          </Box>
          <Typography
            sx={{ fontStyle: 'italic', mb: 3 }}
            variant='body2'
            color='grey'
          >
            (How single page application differs from traditional web pages.
            Source:
            <Link href='https://www.mindk.com/blog/single-page-applications-the-definitive-guide/'>
              <span style={{ textDecoration: 'underline' }}> mindk</span>
            </Link>
            )
          </Typography>
        </Box>
        <SubContent
          heading='How do SPAs fundamentally differ from traditional web application development?'
          id='5'
        >
          <Typography gutterBottom>
            Because the different lifecycles, SPAs and MPAs are different in
            development approaches (labdotsa, 2023):
          </Typography>
          {/* Table starts */}
          <TableContainer
            component={Box}
            sx={{ minWidth: '100%', px: 5, pb: 3 }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align='left'
                    sx={{ fontWeight: 'bold' }}
                  ></TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Single-Page Application{' '}
                  </TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Multi-Page Application{' '}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row1.map((row) => (
                  <TableRow
                    key={row.approach}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='left'>{row.approach}</TableCell>

                    <TableCell align='left'>{row.spa}</TableCell>
                    <TableCell align='left'>{row.mpa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Table ends */}
          <Typography gutterBottom>
            Therefore, when bring them into development, SPAs are more complex
            to develop than MPAs (Patel, 2024).{' '}
          </Typography>
          {/* Table starts */}
          <TableContainer
            component={Box}
            sx={{ minWidth: '100%', px: 5, pb: 3 }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align='left'
                    sx={{ fontWeight: 'bold' }}
                  ></TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Single-Page Application{' '}
                  </TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Multi-Page Application{' '}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row2.map((row) => (
                  <TableRow
                    key={row.criteria}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='left'>{row.criteria}</TableCell>

                    <TableCell align='left'>{row.spa}</TableCell>
                    <TableCell align='left'>{row.mpa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Table ends */}
        </SubContent>
        <SubContent heading='Technologies' id='6'>
          <Typography gutterBottom>
            With the rapid advancement of Single-Page Applications (SPAs), the
            array of technologies and tools available for their development
            seems boundless. Below, we&apos;ll outline a few examples (
            <i>Single-page application</i>, 2024; ChatGPT, 2024):{' '}
          </Typography>
          <Typography component={Box}>
            <ul>
              <li>
                <b>Document hashes:</b> Used to manage client-side routing
                without requiring server-side configuration.
              </li>
              <li>
                <b>
                  Tools for communication between client-side and server-side
                  components:
                </b>
                <ul>
                  <li>
                    <b>AJAX:</b> Allows the client-side application to make
                    asynchronous requests to the server for JSON or XML data and
                    is commonly used to fetch data from a server without needing
                    to reload the entire page.
                  </li>
                  <li>
                    <b>WebSockets:</b> Enable bidirectional real-time
                    communication between the client and server and are used
                    when real-time, bidirectional communication is required,
                    enabling features like live chat, notifications, and
                    multiplayer gaming.
                  </li>
                  <li>
                    <b>Server-Sent Events (SSEs):</b> Enable servers to push
                    data to the client over a single, long-lived HTTP
                    connection, facilitating real-time updates without the need
                    for client-initiated requests and are used for applications
                    requiring server-initiated updates, such as live news feeds,
                    stock tickers, and social media activity streams.
                  </li>
                </ul>
              </li>
            </ul>
          </Typography>
          <Typography gutterBottom>
            JavaScript Frameworks offer base for creating SPAs with a collection
            of tools and libraries:{' '}
          </Typography>
          <Typography component={Box}>
            <ul>
              <li>
                <b>React.js:</b> Known for its component-based architecture and
                virtual DOM rendering, React.js is highly efficient for building
                large-scale SPAs.
              </li>
              <li>
                <b>Angular:</b> Developed and maintained by Google, Angular
                provides a comprehensive framework for building SPAs with
                features like two-way data binding and dependency injection.
              </li>
              <li>
                <b>Vue.js:</b> Known for its simplicity and ease of integration,
                Vue.js offers reactive data binding and component-based
                architecture like React.js.
              </li>

              <li>
                <b>Routing:</b>
                <ul>
                  <li>
                    <b>React Router:</b> Popular routing library for React.js
                    with declarative routing.
                  </li>
                  <li>
                    <b>Vue Router:</b> Similar to React Router but tailored for
                    Vue.js applications.
                  </li>
                </ul>
              </li>
              <li>
                <b>State Management:</b>
                <ul>
                  <li>
                    <b>Redux:</b> Predictable state container commonly used with
                    React.js.
                  </li>
                  <li>
                    <b>Vuex:</b> Official state management library for Vue.js.
                  </li>
                  <li>
                    <b>RxJS:</b> Reactive programming library commonly used with
                    Angular.
                  </li>
                </ul>
              </li>
              <li>
                <b>Package Managers:</b>
                <ul>
                  <li>
                    <b>npm (Node Package Manager):</b> Default package manager
                    for Node.js, widely used in SPAs.
                  </li>
                  <li>
                    <b>Yarn:</b> Alternative package manager known for faster
                    and more reliable dependency management.
                  </li>
                </ul>
              </li>
              <li>
                <b>Build Tools:</b>
                <ul>
                  <li>
                    <b>Webpack:</b> Popular module bundler used to bundle
                    JavaScript files and other assets.
                  </li>
                  <li>
                    <b>Parcel:</b> Zero-configuration bundler known for
                    simplicity and speed.
                  </li>
                  <li>
                    <b>Rollup:</b> Focuses on producing smaller, faster
                    JavaScript bundles.
                  </li>
                </ul>
              </li>
            </ul>
          </Typography>
        </SubContent>
        <SubContent heading='Strengths and weaknesses' id='7'>
          <Typography gutterBottom>
            SPA has its advantages and drawbacks due to its unique features.
            (Sharma,2022; Adobe Experience, 2023; BasuMallick, 2022; Sharma,
            2022)
          </Typography>
          {/* Table starts */}
          <TableContainer component={Box} sx={{ minWidth: '100%', px: 5 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Strengths
                  </TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Weakensses
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left'>
                    <ul>
                      {strengths.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell align='left'>
                    <ul>
                      {weaknesses.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {/* Table ends */}
        </SubContent>
        <SubContent heading='Best suited business problem' id='8'>
          <Typography gutterBottom>
            Even SPA is newer and integrates numbers of recent concepts,
            principles, and technologies, it is not necessarily a better
            solution than MPA in some cases. SPA is recommended for businesses
            have below requirements (synodus, n.d; Microsoft Learn, 2023;
            Vakhnenko, 2023) :
          </Typography>
          <Typography gutterBottom sx={{ mx: 5 }} component={Box}>
            <ul>
              <li>Expose a rich user interface with many features</li>
              <li>
                SEO is not a necessity (such as closed online communities)
              </li>
              <li>
                Platform that contains a small amount of data or is mainly
                static.
              </li>
              <li>Application mostly working on mobile devices.</li>
              <li>
                Software as a service (SaaS), social networks or corporate
                software.
              </li>
            </ul>
          </Typography>
        </SubContent>
        <SubContent heading='Referenes' id='9'>
          <Typography variant='body2' component={Box}>
            <ul>
              <li>
                <Link
                  href='https://business.adobe.com/blog/basics/learn-the-benefits-of-single-page-apps-spa'
                  style={{ textDecoration: 'none' }}
                >
                  Adobe Experience Cloud Team. (2023, July 19).{' '}
                  <i>
                    Single-page applications (SPAs) — what they are and how they
                    work.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.apriorit.com/white-papers/437-single-page-apps'
                  style={{ textDecoration: 'none' }}
                >
                  Apriorit. (2023, February 14).{' '}
                  <i>
                    What are Single-Page Apps (SPAs): Architecture and
                    Development Benefits.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/choose-between-traditional-web-and-single-page-apps'
                  style={{ textDecoration: 'none' }}
                >
                  Ardalis. (2023, February 25).{' '}
                  <i>
                    Choose between traditional web apps and single page apps.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.spiceworks.com/tech/devops/articles/what-is-single-page-application/'
                  style={{ textDecoration: 'none' }}
                >
                  BasuMallick, C. (2022, October 18).{' '}
                  <i>Pros and Cons of Single-Page Applications.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.mindk.com/blog/single-page-applications-the-definitive-guide/'
                  style={{ textDecoration: 'none' }}
                >
                  Churylov, M. (2023, January 12).{' '}
                  <i>SPA vs MPA: what is better, faster, stronger?</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://kissdigital.com/blog/single-page-application-how-spa-works-and-how-it-differs-from-mpa'
                  style={{ textDecoration: 'none' }}
                >
                  ĆWIK, P. (2021, January 15).{' '}
                  <i>
                    Single-page application: how SPA works and how it differs
                    from MPA.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.techtarget.com/searchapparchitecture/definition/RESTful-API'
                  style={{ textDecoration: 'none' }}
                >
                  Gillis, A. S. (2020, September 22).{' '}
                  <i>REST API (RESTful API).</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://restfulapi.net/'
                  style={{ textDecoration: 'none' }}
                >
                  Gupta, L. (2023, December 11).{' '}
                  <i>What is REST? REST API Tutorial.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://medium.com/@iamprovidence/frontend-side-architecture-evolution-mpa-spa-bd87fa32da8'
                  style={{ textDecoration: 'none' }}
                >
                  Iamprovidence. (2023, June 19).{' '}
                  <i>Frontend side architecture evolution (MPA, SPA).</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://shifat-jaman.medium.com/single-page-application-everything-you-need-to-know-6f00d87e5130'
                  style={{ textDecoration: 'none' }}
                >
                  Jaman, S. (2021, December 10).{' '}
                  <i>
                    Everything you need to know about “Single-page-application.”
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://blog.lab.sa/spa-vs-mpa-in-web-development'
                  style={{ textDecoration: 'none' }}
                >
                  abdotsa. (2023, August 30).{' '}
                  <i>SPA vs MPA in Web Development.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.azoft.com/blog/single-page-application/'
                  style={{ textDecoration: 'none' }}
                >
                  Morozova, Y. (2021, July 29).{' '}
                  <i>What is a single page application (SPA).</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://synodus.com/blog/web-development/single-page-application/'
                  style={{ textDecoration: 'none' }}
                >
                  Nguyen, A. (2024, March 11).{' '}
                  <i>
                    Single Page Application: Definition, Benefit, Architecture.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://chat.openai.com/c/53be706f-2a91-4bf9-bb92-52169c91c7b7'
                >
                  OpenAI.
                  <i>
                    Comparing SPA and MPA Development. Retrieved on 2024,March
                    31.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.spaceotechnologies.com/blog/single-page-application-vs-multi-page-application/'
                  style={{ textDecoration: 'none' }}
                >
                  Patel, B. (2024, January 23).{' '}
                  <i>SPA vs MPA – 8 Key Differences Explained.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.epineda.net/the-rise-single-page-applications/'
                  style={{ textDecoration: 'none' }}
                >
                  Pineda, E. (2022, February 19).{' '}
                  <i>The rise Single Page Applications.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.toobler.com/blog/single-page-application'
                  style={{ textDecoration: 'none' }}
                >
                  Sara Sharma. (2022, August 30).{' '}
                  <i>
                    How to build single-page applications - Pros & Cons
                    explained.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://en.wikipedia.org/wiki/Single-page_application'
                  style={{ textDecoration: 'none' }}
                >
                  Single-page application. (2024, February 20).{' '}
                  <i>Wikipedia.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://agilie.com/blog/single-page-apps-vs-multiple-page-web-apps'
                  style={{ textDecoration: 'none' }}
                >
                  Vakhnenko, H. (2023, March 20).{' '}
                  <i>Single-Page Apps vs Multiple-Page Web Apps.</i>
                </Link>
              </li>
              <li
                style={{
                  marginTop: '2rem',
                  marginBottom: '2rem',
                  listStyleType: 'none',
                }}
              >
                All research was conducted by myself, with ChatGPT offering
                suggestions and guidance throughout the rewording process.
              </li>
            </ul>
          </Typography>
        </SubContent>
      </ContentBlock>
    </>
  );
}
