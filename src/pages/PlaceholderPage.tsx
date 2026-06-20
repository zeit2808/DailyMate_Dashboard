import { Card, Typography } from 'antd';

interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <Card className="dm-card" bordered={false}>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Typography.Paragraph type="secondary">
        Trang này đã được giữ chỗ để phát triển tiếp. Sau này bạn có thể thêm bảng, form, modal và gọi API backend tại đây.
      </Typography.Paragraph>
    </Card>
  );
}
