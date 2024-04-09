import ContentBlock from '@/components/ContentBlock';
import SubContent from '@/components/SubContent';
import { Typography, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import TableOfContent from '@/components/TableOfContent';
const createData = (criteria, nosql, sql) => {
  return { criteria, nosql, sql };
};

const rows = [
  createData(
    'Data Relationships',
    'Denormalized, nested non-relational structures',
    'Typically normalized, separate relational tables for entities',
  ),
  createData(
    'Data Organization',
    'Schema-less-Documents with field-value pairs in JSON, XML, YAML, or BSON format',
    'Rigid schema predefined-Tables with rows and columns',
  ),
  createData(
    'Data Access',
    'Querying based on document content and indexes',
    'Structured query language (SQL) for table joins',
  ),
];
const tableHeadings = [
  'What is NoSQL?',
  'History and Background',
  'Philosophy',
  'Document Database vs. Traditional SQL Databases',
  'Best Suited Business Problems',
  'References',
];
export default function NoSQL() {
  return (
    <>
      <ContentBlock heading='Document Databases (No SQL)'>
        {' '}
        <TableOfContent tableHeadings={tableHeadings} />
        <SubContent heading='What is NoSQL?' id='1'>
          <Typography gutterBottom>
            Document databases store information in JSON-like documents
            (MongoDB, n.d.; <i>Data modeling with Amazon DocumentDB.</i>, n.d.).
            They are a type of NoSQL database, known for storing data in
            flexible schemas designed to specific data models and scalable for
            modern applications.
          </Typography>
          <Typography gutterBottom>
            Different from relational databases, document databases do not have
            row and columns but scales horizontally (Foote, 2023) with
            filed-value pairs storing in JSON, XML, YAML or BSON format
            documents. Documents that store related information constitute a
            collection. Each document has a unique identifier. They normally
            provide an API or query language for developers to interact with the
            database programmatically.{' '}
          </Typography>
          <Typography gutterBottom>
            Amazon DocumentDB, MongoDB, Cosmos DB, ArangoDB, Couchbase Server
            and Apache CouchDB are popular document databases. Their data
            organization are implemented differently at different level.{' '}
          </Typography>
        </SubContent>
        <SubContent heading='History and Background' id='2'>
          <Typography gutterBottom>
            The term of “NoSQL” was first created in 1998 by Carlo Strozzi when
            introducing his Strozzi NoSQL database. However, it wasn&apos;t
            until 2009 when developer Johan Oskarsson organized an event to
            discuss non-relational databases that NoSQL gained prominence in the
            industry (<i>A timeline of database history</i>, 2023).{' '}
          </Typography>
          <Typography gutterBottom>
            Document databases emerged due to the limitations of relational
            databases, which were not designed to handle the vast amounts of
            data generated by the internet. As workloads grew, traditional SQL
            databases struggled to scale effectively (Kelly, 2022).
          </Typography>
          <Typography gutterBottom>
            In the early 2000s, document-oriented databases like CouchDB and
            MongoDB emerged. CouchDB, released in 2005 by Apache Software
            Foundation, pioneered open-source document databases with its
            JSON-based model and distributed architecture. MongoDB, launched in
            2009 by 10gen (now MongoDB, Inc.), quickly gained popularity for its
            dynamic schemas, horizontal scalability, and support for complex
            data structures, making it well-suited for modern web applications.
          </Typography>
        </SubContent>
        <SubContent heading='Philosophy' id='3'>
          <Typography gutterBottom>
            The philosophy of document databases focusses on flexibility,
            scalability, and agility (Prisma’s Data Guide, n.d.).
          </Typography>
          <Typography component={Box}>
            <ul>
              <li>
                <b>Flexibility</b>: each document’s structure can be defined
                separately and can be changed easily.
              </li>
              <li>
                <b>Scalability</b> offers horizontal scaling as a cost-efficient
                alternative to vertical scaling.
              </li>
              <li>
                <b>Agility</b> offers rapid deployment and minimal maintenance.{' '}
              </li>
            </ul>
          </Typography>
        </SubContent>
        <SubContent
          id='4'
          heading='Document Database vs. Traditional SQL Databases'
        >
          <Typography gutterBottom>
            Though both SQL and document database are effectively methods to
            store and mange data, they are different in terms of data
            relationships, organization, and access of data (Coursera, 2024;
            Smallcombe, 2024).
          </Typography>
        </SubContent>
        {/* Table starts */}
        <TableContainer component={Box} sx={{ minWidth: '100%', px: 5, mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='left' sx={{ fontWeight: 'bold' }}></TableCell>
                <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                  Document Database
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                  SQL Database
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.criteria}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component='th'
                    scope='row'
                    sx={{ fontWeight: 'bold' }}
                  >
                    {row.criteria}
                  </TableCell>
                  <TableCell align='left'>{row.nosql}</TableCell>
                  <TableCell align='left'>{row.sql}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Table ends */}
        {/* Code Examples */}
        <SubContent>
          {' '}
          <Typography gutterBottom>
            Here are two examples of how SQL and NoSQL perform READ and UPDATE
            function. In these examples, queries are sent to read all of data of
            customers that are over 30 years old:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              ml: { sm: 2, md: 5 },
              mb: 5,
            }}
          >
            <Typography sx={{ fontWeight: 'bold', mt: 3 }} gutterBottom>
              SQL Database (e.g., MySQL):
            </Typography>
            <code style={{ color: 'red' }} gutterBottom>
              SELECT * FROM customers WHERE age {`>`} 30;
            </code>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              ml: { sm: 2, md: 5 },
              mb: 5,
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }} gutterBottom>
              NoSQL Database (e.g., MongoDB):
            </Typography>
            <code style={{ color: 'green' }} gutterBottom>
              db.customers.find(&#123; age: &#123; $gt: 30 &#125; &#125;);
            </code>
          </Box>
          <Typography gutterBottom>
            And then to update the status of customer, who ID is 123, to active.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              ml: { sm: 2, md: 5 },
              mb: 5,
            }}
          >
            <Typography sx={{ fontWeight: 'bold', mt: 3 }} gutterBottom>
              SQL Database (e.g., MySQL):
            </Typography>
            <code style={{ color: 'red' }} gutterBottom>
              UPDATE customers SET status = &apos;active&apos; WHERE id = 123;
            </code>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              ml: { sm: 2, md: 5 },
              mb: 5,
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }} gutterBottom>
              NoSQL Database (e.g., MongoDB):
            </Typography>
            <code style={{ color: 'green' }} gutterBottom>
              db.customers.updateOne(&#123; _id: ObjectId(&quot;123&quot;)
              &#125;, &#123; $set: &#123; status: &quot;active&quot; &#125;
              &#125;);
            </code>
          </Box>
          <Typography gutterBottom>
            The examples demonstrate that SQL database use Structured Query
            Language for querying and manipulation, while NoSQL databases use
            various query languages or APIs that are based on JavaScript, JSON,
            or proprietary syntax.
          </Typography>
        </SubContent>
        <SubContent heading='Best Suited Business Problems' id='5'>
          <Typography gutterBottom>
            SQL databases are best suited for business problems involving
            structured data with well-defined relationships (Smallcombe, 2024),
            such as: financial transactions and accounting systems, customer
            relationship management (CRM) systems and inventory management
            systems.{' '}
          </Typography>
          <Typography gutterBottom>
            On the other hand, NoSQL databases are well-suited for business
            problems involving semi-structured or unstructured data and
            requiring high performance and scalability, such as: content
            management systems (CMS), e-commerce platforms and social media
            platforms.{' '}
          </Typography>
        </SubContent>
        <SubContent heading='Referenes' id='6'>
          <Typography variant='body2' component={Box}>
            <ul>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.coursera.org/articles/nosql-vs-sql'
                >
                  Coursera. (2024, March 27).{' '}
                  <i>
                    SQL vs. NoSQL: The Differences Explained + When to Use Each.
                  </i>{' '}
                  Coursera.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://aws.amazon.com/nosql/document/'
                >
                  <i>Data modeling with Amazon DocumentDB.</i> (n.d.). Amazon
                  Web Services, Inc.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.dataversity.net/fundamentals-of-document-databases/'
                >
                  Foote, K. D. (2023, November 29).
                  <i>Fundamentals of Document Databases</i> DATAVERSITY.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.cockroachlabs.com/blog/history-of-databases-distributed-sql/'
                >
                  Kelly, D. (2022, February 24).
                  <i>
                    A brief history of databases: From relational, to NoSQL, to
                    distributed SQL.{' '}
                  </i>{' '}
                  Cockroach Labs.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.mongodb.com/document-databases'
                >
                  MongoDB. (n.d.-a). <i>Document Database - NoSQL.</i>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.mongodb.com/evolved'
                >
                  MongoDB. (n.d.-b). <i>MongoDB Evolved – Version History.</i>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.prisma.io/dataguide/types/document/what-are-document-dbs'
                >
                  Prisma’s Data Guide. (n.d.).{' '}
                  <i>What are document databases? </i>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.quickbase.com/articles/timeline-of-database-history'
                >
                  .<i>A timeline of database history.(2023, August 25)</i>{' '}
                  Quickbase.
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: 'none' }}
                  href='https://www.integrate.io/blog/the-sql-vs-nosql-difference/'
                >
                  Smallcombe, M. (2018, November 29).
                  <i>SQL vs NoSQL: 5 Critical Differences.</i> Integrate.io.
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