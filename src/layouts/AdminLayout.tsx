import { BellOutlined, DashboardOutlined, LineChartOutlined, MenuFoldOutlined, MenuUnfoldOutlined, RobotOutlined, SearchOutlined, SettingOutlined, ShopOutlined, TeamOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Input, Layout, Menu, Space, Typography } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppLogo } from '../components/AppLogo';

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: '/dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: '/users', icon: <TeamOutlined />, label: 'Users' },
  { key: '/partners', icon: <ShopOutlined />, label: 'Partners' },
  { key: '/ai-tokens', icon: <RobotOutlined />, label: 'AI Token Mgmt' },
  { key: '/analytics', icon: <LineChartOutlined />, label: 'Analytics' },
  { key: '/settings', icon: <SettingOutlined />, label: 'Settings' },
];

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/users': 'Users',
  '/partners': 'Partners',
  '/ai-tokens': 'AI Token Management',
  '/analytics': 'Analytics',
  '/settings': 'Settings',
};

const currentDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}).format(new Date());

export function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle = pageTitles[location.pathname] || 'DailyMate Admin';

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={232}
        collapsed={collapsed}
        trigger={null}
        breakpoint="lg"
        collapsedWidth={72}
        style={{ borderRight: '1px solid rgba(139,94,60,0.1)', position: 'sticky', top: 0, height: '100vh' }}
      >
        <div style={{ height: 72, display: 'flex', alignItems: 'center', padding: collapsed ? '0 18px' : '0 20px', borderBottom: '1px solid rgba(139,94,60,0.1)' }}>
          <AppLogo collapsed={collapsed} />
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ border: 0, padding: '14px 8px' }}
        />
      </Sider>

      <Layout>
        <Header style={{ height: 72, padding: '0 24px', borderBottom: '1px solid rgba(139,94,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Space size={16}>
            <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed((value) => !value)} />
            <div className="dm-header-copy">
              <Typography.Title level={3} className="dm-page-title">{pageTitle}</Typography.Title>
              <p className="dm-subtitle">{currentDate}</p>
            </div>
          </Space>

          <Space size={14}>
            <Input className="dm-desktop-only" prefix={<SearchOutlined />} placeholder="Search..." style={{ width: 220, background: '#FFFCF5' }} />
            <Badge count={3} size="small">
              <Button shape="circle" icon={<BellOutlined />} />
            </Badge>
            <Avatar style={{ background: '#EDE0CC', color: '#2C1A0E', fontWeight: 800 }}>DM</Avatar>
          </Space>
        </Header>

        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
