import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Post = ({id, title, deletePostById}) => {


    return(
        <Card bg="light" text="secondary" className="my-2 mx-auto" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="py-2">{title}</Card.Title>

                <Card.Footer className="py-2 d-flex justify-content-between">
                    <Button>
                        <Link to={`/post/${id}`} style={{"text-decoration": "none"}} className="text-light">
                            Ver
                        </Link>
                    </Button>
                    <Button variant="danger">
                        <Link onClick={(e) => deletePostById(e, id)} style={{"text-decoration": "none"}} className="text-light">
                            Eliminar
                        </Link>
                    </Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default Post;