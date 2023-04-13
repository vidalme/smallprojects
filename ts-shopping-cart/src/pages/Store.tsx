import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";

export default function Store() {
  return (
    <>
      <h2>estou na Store</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
