import { Container } from 'react-bootstrap';
import ListPosts from '../components/ListPosts/ListPosts';

const Home = () => {
    return(
      <Container fluid>
        <h1 className="px-2 py-4">
            Post App!
        </h1>

        <ListPosts/>
      </Container>
    )
}
export default Home;