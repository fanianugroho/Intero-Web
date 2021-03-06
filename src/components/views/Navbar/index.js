import React ,{ Component} from 'react';
import { Menu, Layout} from 'antd';
import { Link } from 'react-router-dom';
import './navbar.css'
import {
  PlayCircleTwoTone ,
  RightCircleTwoTone,
  CopyrightCircleTwoTone,
  CreditCardTwoTone,
  PlusCircleTwoTone ,
  InfoCircleTwoTone ,
} from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;



class Navbar extends Component {
  state = {
    current: 'nowshowing',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  
  render () {
    return (
      <Layout>
        <Header style={{background: '#fff'}}>
        <div>
        <Menu mode="horizontal">
          <Menu.Item key="nowshowing" >
        <PlayCircleTwoTone twoToneColor="#eb2f96"/>
            <Link to="/">Now Showing</Link> 
          </Menu.Item>
          <Menu.Item key="upcoming">
        <RightCircleTwoTone twoToneColor="#eb2f96"/>
          <Link to="/upcoming">Upcoming</Link>
          </Menu.Item>
        <SubMenu
          title={
            <span className="ticket">
              <CreditCardTwoTone twoToneColor="#eb2f96" />
              Ticket
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="ticket">
            <PlusCircleTwoTone twoToneColor="#eb2f96"/>
              <Link to="/buyNow">
                  Buy Now
              </Link>
            </Menu.Item>
            <Menu.Item key="">
            <InfoCircleTwoTone twoToneColor="#eb2f96"/>
              <Link to="/history">
                  History
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="about">
        <CopyrightCircleTwoTone twoToneColor="#eb2f96" />
          <Link to="/aboutUs">
            About Us
          </Link>
        </Menu.Item>
      </Menu>
      </div>
      </Header>
      </Layout>
        );
        }
  }


export default Navbar;
