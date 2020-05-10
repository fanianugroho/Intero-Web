import React from 'react';
import firebase from '../../../firebase';
import {
  Form,
  Input,
  Button,
  Layout,
} from 'antd';
import './buynow.css'

const { Content, Header,Footer } = Layout;


const EditBuy = ({ ticket }) => {
  
  const [newEmail, setEmail] = React.useState()
  const [newName, setName] = React.useState()
  const [newTotalTicket, setTotalTicket] = React.useState()
  const [newChoosenMovie, setChoosenMovie] = React.useState()

  // const [newEmail, setEmail]= React.useState(ticket.newEmail);
  // const [newName, setName]= React.useState(ticket.newName);
  // const [newTotalTicket, setTotalTicket]= React.useState(ticket.newTotalTicket);
  // const [newChoosenMovie, setChoosenMovie]= React.useState(ticket.newChoosenMovie);
  
  // const [showticket, setShowTicket] = React.useState([]);

  // React.useEffect(() => {
  //     const fetchData = async () => {
  //         const db = firebase.firestore()
  //         const data = await db.collection("ticket").get()
  //         setShowTicket(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  //     }
  //     fetchData();
  // }, []);
  

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('ticket').doc(ticket.id).set({...ticket, newEmail,newName,newTotalTicket,newChoosenMovie})
  }

  




  return (
    <Layout style={{padding:'16px auto', background: '#fff'}}>
        <Header style={{background: '#fff'}}>
        <Content style={{padding : '16px auto'}}>
        <Button shape="round"  style={{backgroundColor:'white', margin: '16px auto'}}>
              <h4>Edit Ticket</h4>
        </Button>

      <Form
        style={{padding: '16px auto'}}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
      >
        {/* {showticket.map(ticket => */}
        <Form.Item label="Email" name="email" style={{margin : '16px auto'}}>
          <Input value={newEmail} onChange={(e) => {setEmail(e.target.value)}}/>
        </Form.Item>
        <Form.Item label="Nama" name="name" style={{margin : '16px auto'}}>
          <Input value={newName} onChange={(e) => {setName(e.target.value)}} />
        </Form.Item>
        <Form.Item label="Pilih Film" name="choosenmovie" style={{margin : '16px auto'}}>
          <Input value={newChoosenMovie} onChange={(e) => {setChoosenMovie(e.target.value)}} />
        </Form.Item>
        <Form.Item label="Jumlah Tiket">
          <Input value={newTotalTicket} onChange={(e) => {setTotalTicket(e.target.value)}}/>
        </Form.Item>
        {/* )}  */}
      </Form>
      <a href="/History">
      <Button onClick={onUpdate} type="primary" ghost style={{padding: '16px auto'}}>Update</Button>
      </a>
    </Content>
    <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Kelompok Film ©2020 </Footer>
    </Header>
    </Layout>
  );
};

export default EditBuy;