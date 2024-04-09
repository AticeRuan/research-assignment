import { Box, Container, Paper, Typography } from '@mui/material';
import ContentBlock from '@/components/ContentBlock';
import SubContent from '@/components/SubContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import Image from 'next/image';
import nextapp1 from '@/assets/nextapp01.PNG';
import nextapp2 from '@/assets/nextapp02.gif';
import nextcode1 from '@/assets/nextjs01.PNG';
import nextcode2 from '@/assets/nextjs02.PNG';
import nextcode3 from '@/assets/nextjs03.PNG';
import nextcode4 from '@/assets/nextjs04.PNG';
import angularcode1 from '@/assets/angular01.PNG';
import angularcode2 from '@/assets/angular02.PNG';
import angularcode3 from '@/assets/angular03.PNG';
import angularcode4 from '@/assets/angular04.PNG';
import angularcode5 from '@/assets/angular05.PNG';
import angularcode6 from '@/assets/angular06.PNG';
import angularcode7 from '@/assets/angular07.PNG';
import angularcode8 from '@/assets/angular08.PNG';
import angularcode9 from '@/assets/angular09.PNG';
import angularcode10 from '@/assets/angular10.PNG';
import angularapp from '@/assets/angularapp01.gif';
import angularapp2 from '@/assets/angularapp02.PNG';
import TableOfContent from '@/components/TableOfContent';

export default function Frameworks() {
  //function generate data for the table
  const createData = (evaluation, nextjs, angular, vue, svelte) => {
    return { evaluation, nextjs, angular, vue, svelte };
  };
  //data for the table
  const rows = [
    createData(
      'Ease of Use',
      "Moderate, simplified with React's syntax",
      'Complex, steep learning curve',
      'Moderate, gentle learning curve',
      'Moderate, but very intuitive',
    ),
    createData(
      'Performance',
      'High, due to server-side rendering',
      'High, thanks to its optimized architecture',
      'High, optimized virtual DOM',
      'High, due to its compiler optimizations',
    ),
    createData(
      'Community Support',
      'Strong, backed by the React community',
      'Strong, backed by Google',
      'Moderate but growing support',
      'Limited but Growing, gaining traction',
    ),
    createData(
      'Learning Curve',
      'Moderate, familiarity with React needed',
      'Steep, requires understanding of TypeScript and complex concepts',
      'Moderate, knowledge of HTML, CSS, and JavaScript sufficient',
      'Moderate, easy to grasp',
    ),
    createData(
      'Popularity',
      'Widely used in the React ecosystem',
      'Widely adopted, especially for enterprise applications',
      'Moderately  used, especially in Asia and among startups',
      'Growing in popularity',
    ),
    createData(
      'Scalability',
      'Highly scalable, used in large-scale applications',
      'Highly scalable, suitable for enterprise-level applications',
      'Highly scalable, widely used in projects of all sizes',
      'Highly scalable, gaining popularity',
    ),
  ];

  const tableHeadings = [
    'Next.js',
    'Angular',
    'Vue.js',
    'Svelte',
    'Evaluation',
    'Recommendation and Examples',
    'Conclusion',
    'References',
  ];
  return (
    <>
      <ContentBlock heading='Frameworks'>
        {' '}
        <TableOfContent tableHeadings={tableHeadings} />
        {/* Intro paragraph */}
        <SubContent>
          <Typography gutterBottom>
            This research will evaluate four JavaScript frameworks: Next.js,
            Angular, Vue.js, and Svelte. I will explain the reasons for choosing
            each framework into this research, along with their features,
            strengths, and weaknesses.
          </Typography>
        </SubContent>
        <SubContent heading='Next.js' id='1'>
          <Typography gutterBottom>
            Next.js is an open source React framework developed by Vercel. It
            offers a series of features out of the box, such as built-in
            routing, server-side rendering and static site generation, built-in
            CSS, etc. It adopts the great capability of React building beautiful
            UI and is also powerful for backend development.
          </Typography>
          <Typography gutterBottom>
            I was firstly attracted by its file-based routing system, which
            allows me to create routes simply by structuring folder tree. Hence
            it is on the list of this research.{' '}
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1 }}
          >
            Key features and benefits
          </Typography>
          <Typography component={Box}>
            <ul>
              <li>
                Allow <b>server-side rendering (SSR)</b> for better performance
                and SEO.
              </li>
              <li>
                <b>Static site generation (SSG)</b> feature pre-renders pages at
                build time. Pages are generated once and served as static HTML.
              </li>
              <li>
                <b>File-system routing</b> provides a simple and intuitive way
                to create routes.
              </li>
              <li>
                Allow creation of <b>API endpoints</b> that reside in the file
                directory.
              </li>
              <li>
                Build-in <b>CSS and Sass support</b> provides convenience to
                style the application without extra packages.
              </li>
              <li>
                <b>Image optimization</b> ensures that images are presented in
                the most efficient format.
              </li>
              <li>
                <b>Automatic code splitting</b> loads website pages in
                dynamically loaded chunks, reducing loading times and
                performance bottlenecks while providing better control over
                files and resources for optimization.
              </li>
            </ul>
            (Rahman, 2023; Nead, 2023; Mittal, 2024)
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1 }}
          >
            Pros and cons
          </Typography>
          <Typography gutterBottom>
            Next.js offers optimized performance through features like SSR and
            SSG, enhancing user experience and SEO. It simplifies development,
            scales efficiently, and integrates well with various tools. However,
            it has a learning curve and only limited to React library, limited
            routing flexibility, and complexity with SSR management. Exporting
            static sites and overhead for small projects are also
            considerations. (Nead, 2023; Mittal, 2024)
          </Typography>
        </SubContent>
        <SubContent heading='Angular' id='2'>
          <Typography gutterBottom>
            Angular is declared as a platform and framework. It is developed and
            maintained by Google. Angular is complete redesign from the same
            team that develop AngularJS (<i>Angular</i>, n.d.), which is one of
            the oldest SPA frameworks. Being one the most popular
            component-based JavaScript frameworks but works differently from
            React is the reason for it being on this research list.{' '}
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1 }}
          >
            Key features and benefits
          </Typography>
          <Typography gutterBottom component={Box}>
            <ul>
              <li>
                <b>Two-way data binding</b> enables synchronizing changes
                between model and view.
              </li>
              <li>
                Developed using <b>TypeScript</b> for enhanced type safety and
                support for various types.
              </li>
              <li>
                Utilizes a <b>component-based architecture</b> for building
                reusable and maintainable components.
              </li>
              <li>
                Implements a <b>dependency injection system</b> for managing
                component services.
              </li>
              <li>
                Offers a set of <b>directives</b> to extend HTML element
                functionality.
              </li>
              <li>
                Simplifies tasks with <b>Angular CLI</b> for application
                creation, component addition, testing, and deployment.
              </li>
              <li>
                Provides robust tools for <b>form handling</b>, including
                template-driven and reactive forms.
              </li>
            </ul>
            (Dhaduk, 2023; Mittal, 2024)
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1 }}
          >
            Pros and cons
          </Typography>
          <Typography gutterBottom>
            As a full-fledged JS framework, Angular is comprehensive enough to
            work without additional libraries for features like routing, state
            management, or form validation. It is famous for its speed and high
            performance in SPA. Features like Angular CLI and IntelliSense
            enhance developer productivity. Developed and maintained by Google,
            Angular ensures regular updates and longevity. It boasts a vast
            ecosystem with numerous tools and components developed by both the
            Angular team and the community.
          </Typography>
          <Typography gutterBottom>
            However, its steep learning curve may be challenges for beginners.
            The complex SPAs may face performance issues. The client-side
            rendering approach may face SEO challenges (The lasted version of
            Angular has introduced SSR and SSG). The upgrade process between
            Angular versions can be complex and time-consuming (Mittal, 2024).
          </Typography>
        </SubContent>
        <SubContent heading='Vue.js' id='3'>
          <Typography gutterBottom>
            Vue.js is a progressive JavaScript Framework. It is easy to
            integrate with other libraries, existing projects and even
            frameworks (Mittal, 2024). It extends a{' '}
            <code>&lt;template&gt;</code> tag to define the structure of a
            component&apos;s HTML template and uses mounted and unmount hook for
            developer to control the component’s lifecycle.{' '}
          </Typography>
          <Typography gutterBottom>
            Vue.js is worth researching because it offers a gentle learning
            curve, excellent performance, and a flexible component-based
            architecture.{' '}
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1 }}
          >
            Key features and benefits
          </Typography>
          <Typography component={Box}>
            <ul>
              <li>
                <b>Reactive and composable view layer:</b> Updates DOM
                efficiently based on application state changes.
              </li>
              <li>
                <b>Component-based architecture:</b> Facilitates code reuse and
                modularity.
              </li>
              <li>
                <b>Declarative rendering:</b> Uses template syntax for clear and
                concise rendering.
              </li>
              <li>
                <b>Two-way data binding:</b> Achieved with &apos;v-model&apos;
                to keep UI synchronized with application state.
              </li>
              <li>
                <b>Transition system:</b> Applies effects when elements,
                components, or properties change, enhancing user experience.
              </li>
              <li>
                <b>Utilization of virtual DOM:</b> Enables efficient
                manipulation of the DOM.
              </li>
              <li>
                <b>Rich ecosystem:</b> Supported by tools like Vue CLI, Vue
                Router, and Vuex for rapid development.
              </li>
              <li>
                <b>Incrementally adoptable:</b> Allows easy integration with
                existing projects and libraries.
              </li>
            </ul>
            (Mittal, 2024)
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1 }}
          >
            Pros and cons
          </Typography>
          <Typography gutterBottom>
            Vue.js has a gentle learning curve, making it accessible to
            developers familiar with HTML, CSS, and JavaScript. Its extensive
            documentation further aids inexperienced developers in getting
            started. Its flexibility and adaptability allows developers to
            structure apps and integrate with other frameworks according to
            their preferences and needs. The lightweight virtual DOM ensures
            efficient UI rendering. Vue.js also has a growing community and rich
            ecosystem.
          </Typography>
          <Typography gutterBottom>
            However, its flexibility may have risks of inconsistency and
            maintenance challenges, particularly in larger teams. Though it is
            growing, Vue.js’ community is still small, resulting in difficulties
            finding problem solutions, particularly for non-English speakers.
            Moreover, as Vue.js lacks support from major companies like Google
            or Meta, it may struggle to provide fast bug fixes expected by
            larger firms. Additionally, the scarcity of experienced Vue.js
            developers in the market affects its adoption rate among developers.
            (Deinma, 2023; Dhaduk, 2024; Mittal, 2024)
          </Typography>
        </SubContent>
        <SubContent heading='Svelte' id='4'>
          <Typography gutterBottom>
            Svelte is a fairly new open-source front-end JavaScript framework.
            It differs from other framework by working as a compiler that takes
            the declarative components and coverts them into efficient
            JavaScript that directly manipulates the DOM when state changes
            (Mittal, 2024; Hungbo,2024), According to Svelte’s documentation
            (n.d.), it offers flexibility and efficiency in web development and
            can be used to build full stack application, to integrated into an
            existing codebase or distribute components as standalone packages.{' '}
          </Typography>
          <Typography gutterBottom>
            According to the 2023 Developer Survey carried out by Stack Overflow
            in May 2023, Svelte is the second admired web framework and
            technology, with only Phoenix leading it, based on 70,637 responses.
            This fact interests me and brings Svelte in the research list.{' '}
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1 }}
          >
            Key features and benefits
          </Typography>
          <Typography component={Box}>
            <ul>
              <li>
                <b>Direct DOM updates:</b> Svelte updates the DOM directly,
                eliminating the overhead of the virtual DOM.
              </li>
              <li>
                <b>Reactive updates:</b> Changes in values are reactively
                updated to the DOM, reducing the need for manual state tracking.
              </li>
              <li>
                <b>Component-based architecture:</b> Promotes code reusability
                and isolation through a component-based approach.
              </li>
              <li>
                <b>Less code:</b> Results in fewer bugs and simplified
                maintenance.
              </li>
              <li>
                <b>Built-in state management:</b> Simplifies state management
                with integrated features.
              </li>
              <li>
                <b>Optimized compilation:</b> Generates highly optimized vanilla
                JavaScript during compilation, leading to faster runtime
                performance and smaller file sizes.
              </li>
              <li>
                <b>Rich motion and transition support:</b> Allows for the
                implementation of complex visual effects with ease.
              </li>
              <li>
                <b>TypeScript support:</b> Supports TypeScript for creating more
                robust and maintainable code.
              </li>
            </ul>
            (Mittal, 2024)
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1 }}
          >
            Pros and cons
          </Typography>
          <Typography gutterBottom>
            Svelte offers several advantages, including faster runtime
            performance due to its elimination of the virtual DOM and optimized
            updates. It results in smaller bundle sizes and simplified state
            management. Its concise syntax reduces the amount of code needed to
            be written and maintained and will be suitable for learning and
            speeding up development. However, it faces challenges such as a
            smaller community and ecosystem compared to more established
            frameworks, fewer job opportunities, and limited built-in features.
            Additionally, its suitability for large-scale applications and the
            need to keep pace with its rapid evolution are factors to consider
            for developers. (Sabyrkulov, 2023; Mittal, 2024)
          </Typography>
        </SubContent>
        <SubContent heading='Evaluation' id='5'>
          <TableContainer component={Box} sx={{ minWidth: '100%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Next.js
                  </TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Angular
                  </TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Vue.js
                  </TableCell>
                  <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                    Svelte
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      component='td'
                      scope='coloum'
                      sx={{ fontWeight: 'bold' }}
                    >
                      {row.evaluation}
                    </TableCell>
                    <TableCell align='left'>{row.nextjs}</TableCell>
                    <TableCell align='left'>{row.angular}</TableCell>
                    <TableCell align='left'>{row.vue}</TableCell>
                    <TableCell align='left'>{row.svelte}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </SubContent>
        <SubContent heading='Recommendation and Examples' id='6'>
          <Typography gutterBottom>
            For developing Single Page Applications (SPAs), Next.js and Angular
            could be the top choices as they are both comprehensive and highly
            scalable. Here is a detailed explanation of the reasons behind these
            choices:
          </Typography>
          <Typography gutterBottom>
            Next.js stands out for its ease of use, high performance, strong
            community support, manageable learning curve, widespread popularity,
            and scalability. With its integration with React, Next.js is
            relatively easy to learn and use for someone who is already familiar
            with React. Additionally, Next.js is SEO-friendly, addressing the
            common issue of poor search engine optimization performance in SPAs.
            The framework benefits from robust community support, providing
            access to a vast array of resources, documentation, and
            community-driven plugins. Notably, I am particularly interested in
            experiencing its built-in CSS for simpler styling and the file-based
            routing system for easier navigation.
          </Typography>
          <Typography gutterBottom>
            On the other hand, Angular offers a comprehensive framework with
            robust features, optimized performance, extensive tooling, and
            strong community support. While Angular has a steeper learning curve
            compared to Next.js, it provides comprehensive documentation,
            tutorials, and a structured learning path to help developers grasp
            its concepts effectively. Angular applications are known for their
            speed and efficiency due to their smart architecture and built-in
            optimizations. I am particularly interested in experiencing its
            features such as two-way data binding and Angular CLI.
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', mt: 2, mb: 1, fontWeight: 'bold' }}
          >
            Scope
          </Typography>
          <Typography gutterBottom>
            In real development environments, these two frameworks each excel in
            specific scenarios where their features are maximally utilized.
            Angular is more suitable for large-scale enterprise applications due
            to its comprehensive feature set and built-in tools for handling
            complex data structures and application logic, while Next.js is
            well-suited for dynamic and content-rich web applications, as it
            provides efficient server-side rendering and seamless client-side
            routing. However, due to the required depth of this conducted
            research, the two frameworks were tested for building a basic
            &quot;Hello world&quot; web app and implementing simple routing to
            explore their capabilities and performance in fundamental scenarios.
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontSize: '1rem', my: 5, fontWeight: 'bold' }}
          >
            Examples
          </Typography>
          {/* Examples starts */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              px: { sm: 10, md: 15, lg: 20 },
            }}
          >
            {/* Hello world examples */}
            <Typography
              gutterBottom
              sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
              textAlign='center'
            >
              &quot;Hello World&quot; web apps
            </Typography>
            <Typography
              gutterBottom
              textAlign='center'
              sx={{ fontSize: '1.5rem' }}
            >
              Next.js
            </Typography>

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
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                It is optional to use JavaScript or TypeScript in Next.js. In
                this example, I go with JavaScript.
              </Typography>
              <Typography color='grey' sx={{ my: 2 }}>
                The Next.js app.js file is simple and is focused on the logic of
                the component, it exports a default function that returns a
                JSX/TSX element. In this case, a simple h1 tag with “Hello
                World!”
              </Typography>
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
                  src={nextcode1}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
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
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                The layout.js is used to define the layout structure of the
                application.
              </Typography>
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
                  src={nextcode2}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mt: 7,
              }}
            >
              <Typography color='grey' sx={{ my: 2 }}>
                In this case, it is a simple layout with a main content area.
              </Typography>
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
                  src={nextapp1}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Typography
              gutterBottom
              textAlign='center'
              sx={{ fontSize: '1.5rem' }}
            >
              Angular
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                The Angular example is a little more complex than the Next.js
                example. The app.component.ts file is the main component file.
                By adding a &quot;title&quot; property to the class, and
                asigning the url to &quot;templateUrl&quot; in the @Component
                decorator to define the url of template file.
              </Typography>
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
                  src={angularcode1}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                Then apply &#123;&#123;&#125;&#125; , the Angular interpolation
                syntax, to use the titil property from the class in the
                app.component.html.
              </Typography>
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
                  src={angularcode2}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              <Typography color='grey' sx={{ my: 2 }}>
                Or just assign the value to the template property in the
                @Component decorator.
              </Typography>

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
                  src={angularcode3}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                Either way, the content is will then displayed in the app.
              </Typography>
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
                  src={angularapp2}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            {/* Routing example */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            ></Box>
            <Typography
              gutterBottom
              sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
              textAlign='center'
            >
              Routing and Navigation
            </Typography>
            <Typography
              gutterBottom
              textAlign='center'
              sx={{ fontSize: '1.5rem' }}
            >
              Next.js
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                In Next.js, the routing system is based on the file system. This
                means that each .js file within the pages directory represents a
                route in the application.
              </Typography>{' '}
              <Typography color='grey' sx={{ my: 2 }}>
                In this example, after creating page1 and page2 folders under
                app folder, and page.js in these two folders, Next.js
                automatically generates two routes for me.
              </Typography>
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
                  src={nextcode4}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                Simply by adding a navigation block in the layout.js file, using
                the Link component for navigation, the routing system is
                implemented.
              </Typography>
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
                  src={nextcode3}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
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
                  src={nextapp2}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Typography
              gutterBottom
              textAlign='center'
              sx={{ fontSize: '2rem' }}
            >
              Angular
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                Setting up the routing in Angular takes more steps than in
                Next.js, including jupming back and forward between servarl
                files. But before start, use the Angular CLI to create three
                components. By using <code>ng generate component</code>, it
                automatically creates a sets of files that a compoent needs for
                me.
              </Typography>
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
                  src={angularcode6}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}></Typography>
              <Typography color='grey' sx={{ my: 2 }}>
                To set up the routes, first, import Routes from the
                @angular/router package and exxport a constant called routes of
                type Routes, assign it &#91; &#93; as the value.
              </Typography>
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
                  src={angularcode4}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                Next, in app.config.ts, configure the app to Angular Router by
                importing the provideRouter function from
                @angular/router,importing routes from the ./app.routes.ts and
                calling the provideRouter function with routes passed in as an
                argument in the providers array.
              </Typography>
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
                  src={angularcode5}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                Then import RouterOutlet from @angular/router and update the
                template for AppComponent by adding &#60;router-outlet &gt; to
                the template. And create a navigation block above the
                router-outlet.
              </Typography>
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
                  src={angularcode9}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                Finally, define the routes in the app.routes.ts file. In
                app.routes.ts, add a route object to the routes array which was
                initialized before. Then define the path and component
                properties of the route object.
              </Typography>
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
                  src={angularcode7}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                mb: 7,
              }}
            >
              {' '}
              <Typography color='grey' sx={{ my: 2 }}>
                And the routes and navigation are implemented in the app.
              </Typography>
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
                  src={angularapp}
                  alt='Examples'
                  width='auto'
                  height='auto'
                />
              </Box>
            </Box>
          </Box>{' '}
          {/* Examples ends */}
        </SubContent>
        <SubContent heading='Conclusion' id='7'>
          <Typography gutterBottom>
            After implementing both Next.js and Angular in a simple SPA design,
            Next.js becomes as the preferred choice over Angular for me.
          </Typography>
          <Typography gutterBottom>
            Firstly, Next.js offers a more straightforward learning curve,
            especially for developers already familiar with React, due to its
            seamless integration with the React ecosystem. This facilitated
            faster development and easier comprehension of the framework&apos;s
            concepts.{' '}
          </Typography>
          <Typography gutterBottom>
            Secondly, Next.js&apos;s file-based routing system proved to be more
            intuitive and flexible compared to Angular&apos;s routing
            mechanisms. This enhanced my productivity and simplifying navigation
            within the application.
          </Typography>
          <Typography gutterBottom>
            Additionally, Next.js introduces its own file conventions. By
            renaming files to{' '}
            <code> page.js, layout.js, error.js, default.js, loading.js,</code>{' '}
            etc., specific functionalities are empowered without the need for
            extensive coding. Alternatively, defining folders differently
            results in distinct file behaviour within the routing system.
          </Typography>
          <Typography gutterBottom>
            Lastly, despite offering a ton of conveniences to developers,
            Next.js performs comparably to Angular. It also has strong community
            support and extensive documentation. This solidifies its position as
            the preferred framework.
          </Typography>
          <Typography gutterBottom>
            {' '}
            Overall, these factors collectively contributed to the decision to
            choose Next.js over Angular for the SPA design implementation.
          </Typography>
        </SubContent>
        <SubContent heading='References' id='8'>
          <Typography variant='body2' component={Box}>
            <ul>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://survey.stackoverflow.co/2023/#technology-admired-and-desired'
                >
                  {' '}
                  <i>2023 Developer Survey.</i>(2023,May).Stack Overflow.
                </Link>
              </li>{' '}
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://angular.dev/tutorials/learn-angular'
                >
                  Angular. (n.d.) <i> Learning Angular</i>.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://en.wikipedia.org/wiki/Angular_(web_framework)'
                >
                  <i>Angular (web framework).</i> In Wikipedia.Retrieved March
                  30, 2024.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://dev.to/hb/react-vs-vue-vs-angular-vs-svelte-1fdm'
                >
                  Boisdequin, H. (2020, November 30).{' '}
                  <i>React vs Vue vs Angular vs Svelte.</i> DEV Community.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://blog.openreplay.com/angular-react-vue--a-three-way-comparison/'
                >
                  Deinma, S. (n.d.).{' '}
                  <i>Angular, React, Vue -- A three-way comparison</i>.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.simform.com/blog/angular-vs-vue/'
                >
                  Dhaduk, H. (2024a, January 30).{' '}
                  <i>Angular vs Vue: Which Framework to Choose in 2024?</i>{' '}
                  Simform - Product Engineering Company.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.simform.com/blog/angular-vs-react/'
                >
                  Dhaduk, H. (2024b, February 2).{' '}
                  <i>
                    Angular vs React: Which to Choose for Your Front End in
                    2024?
                  </i>{' '}
                  Simform - Product Engineering Company.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.djangoproject.com/'
                >
                  <i>Django.</i> (n.d.). Django Project.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://ninetailed.io/blog/svelte-vs-react/'
                >
                  Hungbo, M. (2024, January 4).{' '}
                  <i>
                    Svelte vs. React: Everything You Need to Know About the Two.{' '}
                  </i>
                  ninetailed.io.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://handsontable.com/blog/top-9-javascript-frameworks-in-2024'
                >
                  Mittal, A. (2024, February 8).{' '}
                  <i>Top 9 JavaScript frameworks in 2024 </i>Handsontable Blog -
                  JavaScript Data Grid Component with Spreadsheet Look & Feel.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://stackify.com/angular-vs-angularjs-differences-between-angular-and-angularjs/'
                >
                  Modi, N. (2024, February 28).{' '}
                  <i>
                    Angular vs AngularJS: Differences Between Angular and
                    AngularJS.
                  </i>{' '}
                  Stackify.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://dev.co/next-js/pros-and-cons'
                >
                  Nead, R. (2023, August 15).{' '}
                  <i>Next.js: Unveiling its Advantages and Disadvantages</i>{' '}
                  DEV.co.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.linkedin.com/pulse/choosing-between-express-nextjs-guide-backend-md-shohanur-rahman/'
                >
                  Rahman, M. S. (2023, June 3).{' '}
                  <i>
                    Choosing between Express and Next.js: A guide for backend
                    development.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://maddevs.io/blog/svelte-vs-react/'
                >
                  Sabyrkulov, E. (2023, October 11).{' '}
                  <i>Svelte vs. React: Which to Choose for Your Project? </i>
                  Custom Software Development Company.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://en.wikipedia.org/wiki/Vue.js'
                >
                  <i>Vue.js.</i>In Wikipedia.Retrieved March 30, 2024
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://learn.svelte.dev/tutorial/welcome-to-svelte'
                >
                  <i>Welcome to Svelte • Svelte tutorial.</i> (n.d.).
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
