/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConfigProvider, Layout } from 'antd';
import { peakTheme } from './theme';
import Dashboard from './components/Dashboard';
import ChallengeTimeline from './components/ChallengeTimeline';
import Badges from './components/Badges';
import NotificationBell from './components/NotificationBell';
import Academy from './components/Academy';
import LoginSection from './components/LoginSection';
import { useState } from 'react';

const { Header, Content } = Layout;

export default function App() {
  // Basit bir auth kontrolü (gerçek senaryoda burası Context olacak)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ConfigProvider theme={peakTheme}>
      {isLoggedIn ? (
        <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
          <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#722ed1', padding: '0 24px' }}>
            <h1 style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>8UP - Alyalina Takip</h1>
            <NotificationBell />
          </Header>
          <Content style={{ padding: '24px', maxWidth: 1000, margin: '0 auto', width: '100%' }}>
            <Dashboard />
            <Badges />
            <Academy unlockedMonth={3} />
            <ChallengeTimeline />
          </Content>
          <Button style={{ margin: 20 }} onClick={() => setIsLoggedIn(false)}>Çıkış Yap</Button>
        </Layout>
      ) : (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f2f5' }}>
          <LoginSection />
          <Button onClick={() => setIsLoggedIn(true)} style={{ position: 'absolute', bottom: 20 }}>DEMO: Giriş Yap (Simülasyon)</Button>
        </div>
      )}
    </ConfigProvider>
  );
}
import { Button } from 'antd';
