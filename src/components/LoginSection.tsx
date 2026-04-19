import React from 'react';
import { Card, Button, Input } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const LoginSection: React.FC = () => {
  return (
    <div style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}>
      <h1 style={{ color: '#722ed1' }}>8UP Çözüm</h1>
      <p>Alyalina.tr hesabınla giriş yaparak performansını ve ekibini takip et.</p>
      <Card>
        <Input placeholder="Alyalina Kullanıcı Adı / API Key" style={{ marginBottom: 16, height: 40 }} />
        <Button type="primary" icon={<LoginOutlined />} block size="large" style={{ background: '#722ed1' }}>
          Alyalina ile Giriş Yap
        </Button>
      </Card>
    </div>
  );
};

export default LoginSection;
