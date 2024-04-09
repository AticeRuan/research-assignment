import ContentBlock from '@/components/ContentBlock';
import SubContent from '@/components/SubContent';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import TableOfContent from '@/components/TableOfContent';

const tableHeadings = [
  'What is a REST API?',
  'Characteristics of REST',
  'Application in SPAs',
  'Considerations for using REST API as a SPA solution',
  'References',
];

export default function RestApi() {
  return (
    <>
      <ContentBlock heading='Rest APIs'>
        {' '}
        <TableOfContent tableHeadings={tableHeadings} />
        <SubContent heading='What is a REST API?' id='1'>
          <Typography gutterBottom>
            REST, stands for representational state transfer, is an
            architectural style that defines how to build app application
            programming interfaces (APIs), which is a set of rules allow data
            transfer between web applications. (IBM, n.d.; Red Hat, 2019).
          </Typography>
          <Typography gutterBottom>
            REST APIs conform to the principles of REST and is lightweight,
            flexible, and easier to set up. Different from traditional SOAP APIs
            which return messages in XML format, REST APIs response to requests
            with messages in a variety of formats such as HTML, XML, plain text,
            and JSON.
          </Typography>
        </SubContent>
        <SubContent heading='Characteristics of REST' id='2'>
          <Typography variant='body1' gutterBottom>
            To be RESTful, API developers need to follow 6 principles (Gillis,
            2020; Gupta, 2023; IBM, n.d.):
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            sx={{ ml: 5, mr: 8 }}
            component={Box}
          >
            <ol>
              <li>
                <b>Uniform interface</b>: Each piece of data, or resource
                belongs to only one URI and separates from its representation.
                Each resource representation should provide are
                self-descriptive. Hypertext/hypermedia should be available.
              </li>
              <li>
                <b>Client-Server Based</b>: client and server application must
                be completely independent of each other.
              </li>
              <li>
                <b>Stateless client-server communication:</b> Server won’t store
                any states of requests. Each request should include all
                information that is needed to process it.
              </li>
              <li>
                <b>Cacheability</b> : Resources should be cacheable when
                possible. Responses should be labeled as cacheable or
                non-cacheable.
              </li>
              <li>
                <b>Layered system architecture</b>: It allows for an
                architecture composed of multiple layers of servers.
              </li>
              <li>
                <b>Code on demand (optional)</b>: Server can send executable
                code which should only be run on-demand by client.
              </li>
            </ol>
          </Typography>
        </SubContent>
        <SubContent heading='Application in SPAs' id='3'>
          <Typography gutterBottom>
            REST APIs (Representational State Transfer APIs) play a crucial role
            in the development of Single-Page Applications (SPAs) by performing
            communication between the client-side and the server-side
            components. Using REST APIs in SPA development offers several
            benefits (Wójcik, 2015; B, 2023):
          </Typography>
          <Typography gutterBottom sx={{ mx: 5 }} component={Box}>
            <ul>
              <li>
                <b>Uniform Interface:</b> Allows easy interaction with
                third-party systems.
              </li>
              <li>
                <b>Easier Design:</b> Simplifies initial design and
                coordination.
              </li>
              <li>
                <b>Easier Testing & Integration:</b> Facilitates automated
                testing and continuous integration.
              </li>
              <li>
                <b>Better Performance:</b> Provides smoother user experience and
                faster load times.
              </li>
              <li>
                <b>Better Scaling:</b> Enables easy scalability of both server
                and client components.
              </li>
              <li>
                <b>Client-Server Loose Coupling:</b> Allows independent
                development and deployment.
              </li>
              <li>
                <b>Better Code Quality:</b> Leads to cleaner and more
                maintainable codebases.
              </li>
              <li>
                <b>Reusability:</b> Once an API has been created, it can be used
                by multiple clients.
              </li>
            </ul>
          </Typography>
          <Typography gutterBottom>
            RESTful APIs can be used in the development of SPAs for many
            purpose:{' '}
          </Typography>
          <Typography gutterBottom sx={{ ml: 5, mr: 8 }} component={Box}>
            {' '}
            <ul>
              <li>
                Requesting and retrieving data via HTTP functions and performing
                CRUD functions (Cleo, n.d.).
              </li>
              <li>
                Handling authentication and authorization mechanisms to secure
                access to sensitive resources in SPAs (Merge, 2023).
              </li>
              <li>
                Providing a standardized way for SPAs to communicate with
                external services and consume their data or functionality.
              </li>
            </ul>
          </Typography>
        </SubContent>
        <SubContent
          heading='Considerations for using REST API as a SPA solution'
          id='4'
        >
          <Typography gutterBottom>
            Though REST APIs help simplify the development of SPAs beautifully
            when it comes to server-side data communication, they also present
            challenges.
          </Typography>
          <Typography gutterBottom>
            When applying REST APIs in large-scale applications, it may lead to
            over-fetching or under-fetching data. Additionally, managing
            multiple endpoints and versioning can be challenging. With REST
            APIs, multiple requests may be necessary to fetch all the required
            data, resulting in increased latency that can adversely affect the
            user experience. Finally, as REST APIs expose data and functionality
            to external clients, data security becomes a concern (Husar, 2022;
            Roca, 2023; B, 2023)
          </Typography>
          <Typography gutterBottom>
            Therefore, according to Arron. B (2023), it is worth considering the
            following before working with REST API in SPAs:
          </Typography>
          <Typography gutterBottom sx={{ ml: 5, mr: 8 }} component={Box}>
            <ul>
              <li>
                The overall scale of the project: Consider other solutions if
                the API needs to handle a large number of requests.
              </li>
              <li>
                Focus on security: Implement robust authentication and
                authorization measures to protect data.
              </li>
              <li>
                Clear documentation: Maintain concise and accurate documentation
                for better adoption.
              </li>
            </ul>
          </Typography>
        </SubContent>
        <SubContent heading={'References'} id='5'>
          <Typography variant='body2' component={Box}>
            <ul>
              <li>
                <Link
                  href='https://www.linkedin.com/pulse/benefits-challenges-using-restful-apis-aaron-bean/'
                  style={{ textDecoration: 'none' }}
                >
                  B, A. (2023, March 30).{' '}
                  <i>The benefits and challenges of using RESTful APIs.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.cleo.com/blog/blog-knowledge-base-what-is-rest-api'
                  style={{ textDecoration: 'none' }}
                >
                  Cleo. (n.d.). <i>Understanding how to utilize a REST API.</i>
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
                  Gupta, L. (2023, December 11). <i>What is REST?</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.freecodecamp.org/news/how-to-use-rest-api/'
                  style={{ textDecoration: 'none' }}
                >
                  Husar, A. (2022, April 25).{' '}
                  <i>How to Use REST APIs – A Complete Beginner.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.ibm.com/topics/rest-apis'
                  style={{ textDecoration: 'none' }}
                >
                  IBM. (n.d.). <i>What is a REST API?</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.merge.dev/blog/rest-api-authentication'
                  style={{ textDecoration: 'none' }}
                >
                  Merge. (2023, December 20).{' '}
                  <i>A guide to REST API authentication.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.redhat.com/en/topics/integration/whats-the-difference-between-soap-rest'
                  style={{ textDecoration: 'none' }}
                >
                  Red hat. (2019, April 18). <i>REST vs. SOAP.</i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.thepowermba.com/en/blog/rest-api-what-it-is'
                  style={{ textDecoration: 'none' }}
                >
                  Roca, C. (2023, June 8).{' '}
                  <i>
                    REST API: what it is, how it works, advantages and
                    disadvantages.
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href='https://aws.amazon.com/compare/the-difference-between-soap-rest/?nc1=h_ls'
                  style={{ textDecoration: 'none' }}
                >
                  SOAP vs REST - Difference Between API Technologies - AWS.
                  (n.d.).
                </Link>
              </li>
              <li>
                <Link
                  href='https://applandeo.com/blog/single-page-applications-rest-better-dynamic-web-pages/'
                  style={{ textDecoration: 'none' }}
                >
                  Wójcik, P. (2015, November 9).{' '}
                  <i>
                    Why Single-page Applications + REST are better than Dynamic
                    web pages.
                  </i>
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
              </li>{' '}
            </ul>
          </Typography>
        </SubContent>
      </ContentBlock>
    </>
  );
}
