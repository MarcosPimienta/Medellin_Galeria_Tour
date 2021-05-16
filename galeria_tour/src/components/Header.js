import { PageHeader, Button, Menu, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  HomeOutlined,
  TeamOutlined,
  SettingOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../index.css';

function Header() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState(true);
  return (
    <div className='site-page-header-ghost-wrapper'>
      <PageHeader
        ghost={false}
        /* onBack={() => window.history.back()}
        title='Title'
        subTitle='This is a subtitle' */
        extra={[
          <Menu
            onClick={() => {
              setCurrent(true);
            }}
            selectedKeys={[current]}
            mode='horizontal'
          >
            <Menu.Item key='home' icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key='us' icon={<TeamOutlined />}>
              About Us
            </Menu.Item>
            <Menu.Item key='shop' icon={<ShopOutlined />}>
              Tours
            </Menu.Item>
            <SubMenu key='SubMenu' icon={<SettingOutlined />} title='Language'>
              <Menu.ItemGroup>
                <Menu.Item key='setting:1'>English</Menu.Item>
                <Menu.Item key='setting:2'>Español</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>,
        ]}
      >
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          /* src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' */
          src='./assets/logo.png'
        />
      </PageHeader>
    </div>
  );
}
export default Header;
