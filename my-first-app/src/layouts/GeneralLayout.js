import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Layout, Button } from 'antd'
import { GithubOutlined } from "@ant-design/icons";
import MenuTop from '../components/MenuComponents/MenuTop';
import MenuSider from '../components/MenuComponents/MenuSider';
import SignIn from '../pages/Admin/Signin';
import "./GeneralLayout.scss";

export default function GeneralLayout(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  const user=null;
/*const Location = useLocation();*/
if(!user){
  return(
    <>
    <SignIn />
    <Routes>
      <Route path='/admin/login/*' element={<SignIn />} />
    </Routes>
    {/* <Navigate to= {"/admin/Login"} state={{ from: Location }}replace /> */}
    </>
  )
}
  return (
    <div>
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout 
        className='layout-admin'
        style={{ marginLeft: menuCollapsed ? "80px" : "200px"}}
        >
          <Header className='layout-admin__header'>
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className='layout-admin__content'>{children}</Content> 
          <Footer className='layout-admin__footer'>
            <Button type='link' onClick={() => console.log("Github")}>
              <GithubOutlined style={{ fontSize: "17px" }}>UM 2022 Mateo Marin </GithubOutlined>
            </Button>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

