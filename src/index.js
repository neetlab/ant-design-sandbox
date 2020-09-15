import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, Typography, Row, Col, Space } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const Vertical = () => {
  return (
    <React.Fragment>
      <Typography.Title level={2}>
        Vertical grid
      </Typography.Title>

      <Col>
        <Row gutter={[0, 12]}>
          <Button>foo</Button>
        </Row> 

        <Row>
          <Button>foo</Button>
        </Row> 
      </Col>
    </React.Fragment>
  )
}

const Horizontal = () => {
  return (
    <React.Fragment>
      <Typography.Title level={2}>Grid</Typography.Title>
      <Row justify="space-around">
        <Col>
          foo
        </Col>

        <Col>
          bar
        </Col>
      </Row>

      <Typography.Title level={2}>Spacing</Typography.Title>
      <Typography.Paragraph>
        sizeとかalignとかいろいろできるけど、justifyは無いみたい
      </Typography.Paragraph>

      <Space size='large'>
        <Typography.Paragraph>foo</Typography.Paragraph>
        <Typography.Paragraph>bar</Typography.Paragraph>
      </Space>
    </React.Fragment>
  );
}

ReactDOM.render(
  <div className="App">
    <Vertical />
    <Horizontal />
  </div>,
  document.getElementById("root")
);
