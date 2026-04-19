import React, { useState } from 'react';
import { Badge, Drawer, List, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const NotificationBell: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const notifications = [
    { id: 1, text: 'Ay 1 rozetini kazandın! 🎉' },
    { id: 2, text: 'Ekibinden yeni bir kayıt var.' },
  ];

  return (
    <>
      <Badge count={notifications.length} onClick={() => setVisible(true)} style={{ cursor: 'pointer' }}>
        <BellOutlined style={{ fontSize: 20, color: '#fff' }} />
      </Badge>
      <Drawer title="Bildirimler" open={visible} onClose={() => setVisible(false)}>
        {notifications.map((item) => (
          <div key={item.id} style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            {item.text}
          </div>
        ))}
      </Drawer>
    </>
  );
};

export default NotificationBell;
