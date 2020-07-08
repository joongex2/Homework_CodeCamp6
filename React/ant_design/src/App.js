import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Row, Col, Form, Input, Button } from "antd";

function App() {
  // const students = [{
  //   "first_name": "Nona",
  //   "last_name": "St. Hill",
  //   "email": "nsthill0@miitbeian.gov.cn",
  //   "gender": "Female",
  //   "university": "Istanbul Arel University"
  // }, {
  //   "first_name": "Felice",
  //   "last_name": "Wilcocke",
  //   "email": "fwilcocke1@nytimes.com",
  //   "gender": "Male",
  //   "university": "University of Maryland Baltimore County"
  // }, {
  //   "first_name": "Chester",
  //   "last_name": "Ruske",
  //   "email": "cruske2@spotify.com",
  //   "gender": "Male",
  //   "university": "Rafsanjan University of Medical Sciences"
  // }, {
  //   "first_name": "Christye",
  //   "last_name": "Biddy",
  //   "email": "cbiddy3@sakura.ne.jp",
  //   "gender": "Female",
  //   "university": "Universidad Cientifica Latinoamericana de Hidalgo"
  // }, {
  //   "first_name": "Naoma",
  //   "last_name": "Bithell",
  //   "email": "nbithell4@is.gd",
  //   "gender": "Female",
  //   "university": "Kashan University of Medical Sciences"
  // }, {
  //   "first_name": "Adore",
  //   "last_name": "Spaldin",
  //   "email": "aspaldin5@wunderground.com",
  //   "gender": "Female",
  //   "university": "Canisius College"
  // }]

  // const columns = [
  //   {
  //     title: "อีเมล์",
  //     dataIndex: "email"
  //   },
  //   {
  //     title: "เพศ",
  //     dataIndex: "gender"
  //   },
  //   {
  //     title: "ชื่อจริง",
  //     dataIndex: "first_name"
  //   },
  //   {
  //     title: "นามสกุล",
  //     dataIndex: "last_name"
  //   },
  //   {
  //     title: "มหาวิทยาลัย",
  //     dataIndex: "university"
  //   }
  // ]

  const layout = {
    labelCol: { 
      // span: 8 
      xs: 6, sm: 8, md: 10
    },
    wrapperCol: {
      // span: 16
      xs: 18, sm: 16, md: 14
    }
  };

  let onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className="App">
      <Row justify="center">
        <Col xxl={12} xl={14} lg={16} md={20} sm={22} xs={24}>
          {/* <Table bordered columns={columns} dataSource={students} size="small" /> */}
          <Form onFinish={onFinish} {...layout}>
            <Form.Item 
              label="ชื่อ"
              name="name"
              rules={[{required: true, message: "คุณต้องกรอกช่องนี้" }, 
                {max: 6, min: 3, message: "ชื่อต้องอยู่ระหว่าง 3 ถึง 6 ตัวอักษร"}]}
            >
              <Input placeholder="Name"/>
            </Form.Item>
            <Form.Item 
              label="เบอร์โทรศัพท์"
              name="phoneNumber"
              rules={
                [{len: 10, message: "เบอร์โทรศัพท์ของคุณไม่ถูกต้อง"}]
              }
            >
              <Input placeholder="PhoneNumber"/>
            </Form.Item>
            <Form.Item
              label="อีเมล์"
              name="email"
              rules={[
                { required: true, message: "คุณต้องกรอกช่องนี้" },
                { type: 'email', message: "รูปแบบอีเมล์ของคุณไม่ถูกต้อง" }
              ]
              }
            >
              <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item
              label="รหัสผ่าน"
              name="password"
              rules={
                [
                  { required: true, message: "คุณต้องใส่รหัสผ่านด้วย" },
                  { min: 12, max: 24, message: "รหัสผ่านของคุณต้องอยู่ระหว่าง 12 ถึง 24 ตัว"}
                ]
              }
            >
              <Input type="password" placeholder="Password"/>
            </Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
