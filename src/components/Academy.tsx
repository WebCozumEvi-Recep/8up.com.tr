import React, { useState } from 'react';
import { Card, Row, Col, Modal, Button } from 'antd';
import { PlayCircleOutlined, LockOutlined } from '@ant-design/icons';

const Academy: React.FC<{ unlockedMonth: number }> = ({ unlockedMonth }) => {
  const videos = [
    { month: 1, title: 'Hoşgeldin ve Ürün Eğitimi', url: 'https://example.com/video1' },
    { month: 2, title: 'İletişim Teknikleri', url: 'https://example.com/video2' },
    { month: 3, title: 'Ekip Kurma Stratejileri', url: 'https://example.com/video3' },
  ];

  return (
    <Card title="🎓 8UP Akademi" style={{ marginTop: 24 }}>
      <Row gutter={[16, 16]}>
        {videos.map((vid) => (
          <Col key={vid.month} xs={24} sm={12} md={8}>
            <Card 
              size="small"
              title={`Ay ${vid.month}: ${vid.title}`}
              extra={vid.month <= unlockedMonth ? <PlayCircleOutlined /> : <LockOutlined />}
            >
              {vid.month <= unlockedMonth ? (
                <Button type="primary" block onClick={() => window.open(vid.url, '_blank')}>
                  Videoyu İzle
                </Button>
              ) : (
                <Button disabled block>Kilitli</Button>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Academy;
