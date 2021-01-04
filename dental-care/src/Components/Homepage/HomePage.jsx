import React from 'react';
import { Layout, Menu, Breadcrumb ,} from 'antd';
import {  
  BarChartOutlined,
  HomeOutlined ,
  DollarCircleOutlined, 
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import Home from '../Home/Home.jsx'
import Charges from '../Charges/Charges'
import Appbar from '../Appbar/Appbar'
export default class Homepage extends React.Component{

    render(){
        return(
          <Router>
            <section>
             
            <Appbar /> 
              
                <Layout>
    
    
    <Layout>
    <Sider
      style={{
       
        height: '100vh',
        position: 'fixed',
        
      }}
      theme="light"
    >
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<HomeOutlined  />}>
          Home
          <Link to="/home" />
        </Menu.Item>
        <Menu.Item key="2" icon={<DollarCircleOutlined    />}>
          Charges
          <Link to="/charges" />
        </Menu.Item>
        
        
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>     
    <Content style={{ margin: '0', padding: 24, background: '#fff', minHeight: 0 }}>
            <Route exact path={`/`} component={Home} /> 
          
            <Route path="/home"component={Home}/>
            <Route path="/charges"component={Charges}/>
            


    </Content>
      {/* <Footer style={{ textAlign: 'center' }}> Created by Sudhakar with Love <FaHandHoldingHeart/></Footer> */}
    </Layout>
  </Layout>
  </Layout>
            </section>
            </Router>
        )
    }

}