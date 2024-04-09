import { Box, Paper, Tab, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ContentBlock from '@/components/ContentBlock';
import SubContent from '@/components/SubContent';
import Link from 'next/link';
import TableOfContent from '@/components/TableOfContent';

//function to create data for the table
function createData(sType, advantages, disadvantages) {
  return {
    sType,
    advantages: Array.isArray(advantages) ? advantages : [advantages],
    disadvantages: Array.isArray(disadvantages)
      ? disadvantages
      : [disadvantages],
  };
}
//data for the table
const rows = [
  createData(
    '1-Tier Structure',
    [
      'Having both the client and server on the same system simplifies the setup and reduces costs (Vasav, n.d).',
    ],
    [
      'Any variations in the data or functionality between the two components may require repetitive effort to synchronize or update. (Vasav, n.d).',
    ],
  ),
  createData(
    '2-Tier Structure',
    [
      'Greatest performance environment (Vasav, n.d).',
      'Simple and fast to design, develop, and manage. (Henry, 2022)',
    ],
    [
      'Limited scalability and flexibility.',
      'Clients have direct access to the database, potentially compromising security measures.(Henry, 2022)',
    ],
  ),

  createData(
    '3-Tier Structure',
    [
      "It's relatively straightforward to integrate into the architecture. (Vasav, n.d).",
      'By centralizing data logic and business logic within the middleware layer, it streamlines communication and processing between clients and servers, resulting in improved efficiency and responsiveness. (Vasav, n.d).',
    ],
    ['Implementing middleware can occur potential expenses'],
  ),

  createData(
    'N-Tier Structure',
    [
      'It divides an application into logical layers, which helps in separating responsibilities and managing dependencies.',
      'By distributing components across multiple physical tiers, the it improves scalability.',
      'It offers flexibility in communication patterns.(What Is Client-Server? Definition and FAQs}, n.d)',
    ],
    [
      'Its distributed nature introduces additional network communication between tiers, which can lead to increased latency.',
      'Managing a system with multiple tiers can add complexity to development, deployment, and maintenance processes.(What Is Client-Server? Definition and FAQs, n.d)',
    ],
  ),

  createData(
    'Fat Client',
    [
      'More dependable in case of server failure or network disruptions, as most features are implemented locally (Henry, 2022).',
      'Capable of processing a large amount of data and functioning offline without constant network connectivity (Henry, 2022).',
      'Offers high customizability, giving users more control over applications, data, and programs configured in the system (Thin Clients Vs. Thick Clients: A Comparison, n.d).',
    ],
    [
      'Requires constant maintenance, including security and software updates, as well as hardware repair, which can be costly (Thin Clients Vs. Thick Clients: A Comparison, n.d).',
      'Relies on physical systems, adding complexity and potential points of failure compared to virtualized thin client setups (Thin Clients Vs. Thick Clients: A Comparison, n.d).',
      'Standard hardware and locally installed software may not be as optimized for specific tasks compared to thin clients (Henry, 2022).',
    ],
  ),
  createData(
    'Thin Client',
    [
      'Cost-Effective and Resource Efficiency.',
      'Saves physical office space since virtual systems are managed centrally (Thin Clients Vs. Thick Clients: A Comparison, n.d).',
      'Centralized management of virtual systems provides better security for servers (Thin Clients Vs. Thick Clients: A Comparison, n.d).',
      'Less resource-intensive compared to thick clients, as they do not require constant server communication (Henry, 2022).',
    ],
    [
      'Relies on a connection to a server to operate, making it vulnerable to server failures or poor network connections (Thin Clients Vs. Thick Clients: A Comparison, n.d).',
      'Lack of local storage and processing capabilities means thin clients may not function offline or in areas with poor network coverage (Henry, 2022).',
    ],
  ),
];
//table headings
const tableHeadings = [
  'What is Client-Server Computing?',
  'Use of client-server computing',
  'Why has client-server computing evolved?',
  'Evolving computing services: the impact of client-server computing',
  'Advantages and disadvantages of different client-server architectures',
  'References',
];

export default function ClientServer() {
  return (
    <>
      <ContentBlock heading='Client Server Computing'>
        <TableOfContent tableHeadings={tableHeadings} />

        <SubContent id='1' heading='What is client-server computing?'>
          <Typography gutterBottom>
            Client-server computing is a distributed computing
            model/architecture that divides tasks between servers and clients (
            <i>What Is Client-Server? Definition and FAQs</i>, n.d.).In this
            framework, clients and the server communicate via a request-response
            messaging pattern, client sends request to the server to access a
            service offered by the server, then the server response to the
            client with the resources the service provided (
            <i>Client Server Computing</i>, n.d.). In one client-server model,
            there may be multiple clients and servers.{' '}
          </Typography>
        </SubContent>

        <SubContent id='2' heading='Uses of cldient-server computing'>
          <Typography gutterBottom>
            Client-server model provides a structured approach to designing and
            deploying applications and services in a distributed environment and
            has been widely applied in computer networks and the broader
            information technology industry, including: web applications,
            virtual machine, proxy server, application server, File Transfer
            Protocol (FTP) server, database server, mail server, file server,
            communication application, domain name system server, collaboration
            server, gaming server, streaming services, online banking and
            e-commerce, management and monitoring server, print server, Internet
            of Things, etc.(
            <i>
              What Is Client-Server Networking? Definition, Advantages, and
              Disadvantages
            </i>
            , 2023; <i>What Is Client Server Model? A Comprehensive Overview</i>
            , 2023).
          </Typography>
        </SubContent>

        <SubContent id='3' heading='Why has client-server computing evolved?'>
          <Typography gutterBottom>
            Client-server computing has evolved over time due to various
            technological advancements and changing requirements in the
            computing landscape (Wikibooks, 2019).{' '}
          </Typography>
          <Typography gutterBottom>
            Initially, it involved using mainframes and connecting to dumb
            terminals. As computer technology improved, personal computers
            gained better popularity and affordability. Hence, processing
            demands began to split between personal computers and mainframes.{' '}
          </Typography>
          <Typography gutterBottom>
            With the growth of networks, the limitations of file-sharing
            architectures became obstacles in client-server systems. These
            limitations were addressed by replacing file servers with database
            servers. This architecture reduced network traffic by having the
            database server execute requests for data and return result sets to
            clients.{' '}
          </Typography>
        </SubContent>

        <SubContent
          id='4'
          heading='Evolving computing services: the impact of client-server computing'
        >
          <Typography gutterBottom>
            According to Guynes and Windsor (2011) and{' '}
            <i> What Is Client Server Model? A Comprehensive Overview </i>{' '}
            (2023), client-server computing has significantly improved IT
            service delivery in many ways:{' '}
          </Typography>
          <Typography component={Box}>
            <ul>
              <li>
                <b>Decoupling:</b> The client-server model allows for a
                separation of concerns. Servers and clients take care of their
                own tasks, allowing for a more modular and maintainable system.
              </li>
              <li>
                <b>Scalability:</b> As the client and server model decentralize
                processing power and control, it enables an easier process when
                adding additional clients.
              </li>
              <li>
                <b>Centralized data and resources:</b> It facilitates multi-user
                access to shared databases, centralizing data and allowing
                remote access. This improves user productivity by providing
                access to large databases, printers, and high-speed processors
                on demand.
              </li>
              <li>
                <b>Well-defined data security and assurance standards</b> ensure
                data safety.
              </li>
              <li>
                <b>More efficient and enhanced performance:</b> Client/server
                computing can provide faster response times for CPU-intensive
                applications as the processing is done locally, without
                competing for mainframe CPU time. This local processing also
                reduces network traffic, as only the results of queries are sent
                back to the client, not the full data files.
              </li>
            </ul>
          </Typography>
        </SubContent>

        <SubContent
          id='5'
          heading='Advantages and disadvantages of different client-server architectures'
        ></SubContent>
        {/* Table starts */}
        <TableContainer component={Box} sx={{ minWidth: '100%', px: 5 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell align='left' sx={{ fontWeight: 'bold', pl: 5 }}>
                  Advantages
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 'bold', pl: 5 }}>
                  Disadvantages
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.sType}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component='th'
                    scope='row'
                    sx={{ fontWeight: 'bold' }}
                  >
                    {row.sType}
                  </TableCell>
                  <TableCell align='left'>
                    <ul>
                      {row.advantages.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell align='left'>
                    <ul>
                      {row.disadvantages.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Table ends */}
        <SubContent id='6' heading='References'>
          <Box sx={{ textDecoration: 'none', fontSize: '.8rem' }}>
            <ul>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.tutorialspoint.com/Client-Server-Computing'
                >
                  <i>Client server computing.</i> (n.d.). Tutorialspoint.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://clutejournals.com/index.php/JBER/article/view/935/919'
                >
                  <i>Revisiting Client/Server Computing.</i> Guynes, C. S., &
                  Windsor, J. (2011). Journal of Business & Economics Research,
                  9(1).
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://housingprototypes.org/the-advantages-and-disadvantages-of-a-two-tier-architecture/'
                >
                  <i>
                    The Advantages And Disadvantages Of A Two-Tier Architecture.
                  </i>{' '}
                  Henry. (2022, October 24). Housing Prototypes.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.parallels.cn/tips/thin-clients/vs-thick/'
                >
                  <i>Thin Clients vs. Thick Clients: A Comparison.</i> (2021,
                  October 8).
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.redswitches.com/blog/client-server-architecture/'
                >
                  <i>
                    Client Server Architecture: Types, Examples, & Benefits.
                  </i>{' '}
                  Vasav. (2024, February 26). RedSwitches.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://monovm.com/blog/what-is-client-server-model/#Advantages-and-disadvantages-of-the-client-server-model'
                >
                  <i>What is client server model? A Comprehensive Overview.</i>{' '}
                  (2023, August 17). MonoVM.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.heavy.ai/technical-glossary/client-server'
                >
                  <i>What is Client-Server? Definition and FAQs.</i> (n.d.)
                  HEAVY.AI.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.zenarmor.com/docs/network-basics/what-is-client-server-network'
                >
                  <i>
                    What is Client-Server Networking? Definition, Advantages,
                    and Disadvantages.
                  </i>{' '}
                  (2023, October 4). Zenarmor.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://en.wikibooks.org/wiki/A_Bit_History_of_Internet/Chapter_5_:_Client-Server'
                >
                  <i>A bit history of Internet/Chapter 5: Client-Server.</i>{' '}
                  Wikibooks. (2019, August 12).
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
          </Box>
        </SubContent>
      </ContentBlock>
    </>
  );
}
