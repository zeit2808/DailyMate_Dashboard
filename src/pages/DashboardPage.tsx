import { ArrowUpOutlined, CrownOutlined, DollarOutlined, RobotOutlined, ShopOutlined, StarFilled, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Progress, Row, Space, Statistic, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { categoryShares, chartColors, kpiCards, partners, recentUsers, tokenUsage, trafficData } from '../mocks/dashboard';
import type { Partner, RecentUser } from '../types/dashboard';

const kpiIcons = [<TeamOutlined />, <ShopOutlined />, <RobotOutlined />, <UserOutlined />];

function statusColor(status: string) {
  if (status === 'Active') return 'success';
  if (status === 'Away') return 'warning';
  if (status === 'Under Review') return 'error';
  return 'default';
}

const userColumns: ColumnsType<RecentUser> = [
  { title: 'User ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name', render: (name) => <strong>{name}</strong> },
  { title: 'Location', dataIndex: 'location', key: 'location' },
  { title: 'Activity', dataIndex: 'activity', key: 'activity' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => <Tag color={statusColor(status)}>{status}</Tag> },
];

const partnerColumns: ColumnsType<Partner> = [
  { title: 'Partner Name', dataIndex: 'name', key: 'name', render: (name) => <strong>{name}</strong> },
  { title: 'Category', dataIndex: 'category', key: 'category', render: (category) => <Tag color="orange">{category}</Tag> },
  { title: 'Rating', dataIndex: 'rating', key: 'rating', render: (rating) => <Space><StarFilled style={{ color: '#F0A96B' }} />{rating}</Space> },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => <Tag color={statusColor(status)}>{status}</Tag> },
];

export function DashboardPage() {
  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <Row gutter={[16, 16]}>
        {kpiCards.map((item, index) => (
          <Col xs={24} sm={12} xl={6} key={item.label}>
            <Card className="dm-card" bordered={false}>
              <Space align="start" style={{ width: '100%', justifyContent: 'space-between' }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, display: 'grid', placeItems: 'center', color: item.color, background: `${item.color}18`, fontSize: 22 }}>
                  {kpiIcons[index]}
                </div>
                <Tag color="green" icon={<ArrowUpOutlined />}>{item.change}</Tag>
              </Space>
              <Statistic value={item.value} title={item.label} valueStyle={{ color: '#2C1A0E', fontFamily: 'Plus Jakarta Sans', fontWeight: 800, marginTop: 12 }} />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} xl={15}>
          <Card className="dm-card" bordered={false} title="Traffic Last 7 Days" extra={<Typography.Text type="secondary">Active users & sessions</Typography.Text>}>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={trafficData} margin={{ top: 8, right: 16, left: -12, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,94,60,0.12)" />
                <XAxis dataKey="day" tick={{ fill: '#8B6E52' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#8B6E52' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#FFFCF5', border: '1px solid rgba(139,94,60,0.14)', borderRadius: 12 }} />
                <Line type="monotone" dataKey="users" stroke="#D4622A" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="sessions" stroke="#F0A96B" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} xl={9}>
          <Card className="dm-card" bordered={false} title="Recommendation Distribution" extra={<Typography.Text type="secondary">By category</Typography.Text>}>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={categoryShares} dataKey="value" nameKey="name" cx="50%" cy="45%" innerRadius={58} outerRadius={92} paddingAngle={3}>
                  {categoryShares.map((item, index) => <Cell key={item.name} fill={chartColors[index]} />)}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} contentStyle={{ background: '#FFFCF5', border: '1px solid rgba(139,94,60,0.14)', borderRadius: 12 }} />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} xxl={13}>
          <Card className="dm-card dm-table-card" bordered={false} title="Recent Users" extra={<Button type="link">View all</Button>}>
            <Table rowKey="id" columns={userColumns} dataSource={recentUsers} pagination={false} scroll={{ x: 760 }} />
          </Card>
        </Col>

        <Col xs={24} xxl={11}>
          <Card className="dm-card dm-table-card" bordered={false} title="Partners" extra={<Button type="link">View all</Button>}>
            <Table rowKey="name" columns={partnerColumns} dataSource={partners} pagination={false} scroll={{ x: 620 }} />
          </Card>
        </Col>
      </Row>

      <Card bordered={false} style={{ borderRadius: 20, background: 'linear-gradient(135deg, #2C1A0E 0%, #5C3317 100%)', boxShadow: '0 4px 24px rgba(44,26,14,0.2)' }}>
        <Row gutter={[24, 24]} align="middle" justify="space-between">
          <Col xs={24} lg={16}>
            <Typography.Text style={{ color: '#C4A882' }}>AI Token Management</Typography.Text>
            <Typography.Title level={3} style={{ color: '#FFFCF5', marginTop: 4, marginBottom: 14 }}>
              {tokenUsage.usedTokens} tokens used this month
            </Typography.Title>
            <Row gutter={[24, 12]}>
              <Col><Statistic title={<span style={{ color: '#C4A882' }}>Budget</span>} value={tokenUsage.budget} valueStyle={{ color: '#FFFCF5', fontSize: 18 }} /></Col>
              <Col><Statistic title={<span style={{ color: '#C4A882' }}>Used</span>} value={tokenUsage.used} valueStyle={{ color: '#FFFCF5', fontSize: 18 }} /></Col>
              <Col><Statistic title={<span style={{ color: '#C4A882' }}>Remaining</span>} value={tokenUsage.remaining} valueStyle={{ color: '#FFFCF5', fontSize: 18 }} /></Col>
            </Row>
            <Progress percent={tokenUsage.percent} showInfo={false} strokeColor={{ from: '#F0A96B', to: '#D4622A' }} trailColor="rgba(255,252,245,0.16)" style={{ maxWidth: 420, marginTop: 20 }} />
            <Typography.Text style={{ color: '#C4A882' }}>{tokenUsage.percent}% of monthly budget used</Typography.Text>
          </Col>
          <Col xs={24} lg="auto">
            <Button type="primary" size="large" icon={<DollarOutlined />}>Manage Budget</Button>
          </Col>
        </Row>
      </Card>
    </Space>
  );
}
