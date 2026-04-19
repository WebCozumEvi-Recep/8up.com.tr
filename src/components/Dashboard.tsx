import React from 'react';
import { Card, Row, Col, Progress, Statistic, Avatar, Tag, Button } from 'antd';
import { Trophy, UserOutlined } from '@ant-design/icons';
import { monthColors } from '../theme';

const DashboardView: React.FC = () => {
  // Mock veri - ileride API'den gelecek
  const user = {
    name: "Ayşe Yılmaz",
    currentMonth: 3,
    completedMonths: 2,
    totalBadges: 2,
  };

  const progressPercent = (user.completedMonths / 8) * 100;

  return (
    <div style={{ padding: '0 24px 24px 24px' }}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card style={{ 
            background: 'linear-gradient(135deg, #431407 0%, #a16207 100%)', 
            borderRadius: 24, 
            color: '#fff',
            overflow: 'hidden'
          }}>
            <Row align="middle" gutter={[24, 24]}>
              <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                <Avatar size={120} icon={<UserOutlined />} src={user.avatar} style={{ border: '4px solid rgba(255,255,255,0.2)', marginBottom: 16 }} />
                <Button size="small" type="primary" ghost>Resim Yükle</Button>
                <h1 style={{ color: '#fff', marginTop: 16 }}>{user.name}</h1>
              </Col>
              <Col xs={24} md={16}>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: '1.1rem' }}>8UP Kariyer İlerlemesi: Ay {user.currentMonth}</span>
                    <span style={{ fontWeight: 'bold' }}>%{progressPercent}</span>
                  </div>
                  <Progress percent={progressPercent} strokeColor="#fcd34d" railColor="rgba(255,255,255,0.2)" size={['100%', 16]} />
                </div>
                <Row gutter={16}>
                  <Col span={8}>
                    <Statistic title="Kazanılan Rozet" value={user.totalBadges} styles={{ content: { color: '#fcd34d' } }} />
                  </Col>
                  <Col span={8}>
                    <Statistic title="Aktif Ekip" value={12} styles={{ content: { color: '#fff' } }} />
                  </Col>
                  <Col span={8}>
                    <Button type="primary" size="large" style={{ background: '#f59e0b', marginTop: 12 }}>Sertifika Oluştur</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="🏆 Kazanılan Rozetler" variant="borderless">
            <div style={{ fontSize: 56, textAlign: 'center', fontWeight: 'bold', color: '#722ed1' }}>{user.totalBadges} / 8</div>
            <p style={{ textAlign: 'center', margin: 0, color: '#8c8c8c' }}>Daha fazla rozet için görevleri tamamla!</p>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="👥 Ekip Bilgisi" variant="borderless">
            <Statistic title="Doğrudan Ekip Bağlantıları" value={12} suffix="kişi" styles={{ content: { color: '#262626' } }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardView;
