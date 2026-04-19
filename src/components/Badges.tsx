import React from 'react';
import { Card, Row, Col, Tooltip } from 'antd';
import { monthColors } from '../theme';

const badgeIcons = ['🌱', '🌿', '🌲', '🌳', '🌸', '🍎', '🌾', '👑'];

const Badges: React.FC = () => {
  const earnedBadges = 2; // Bu veri ileride API'den gelecek

  return (
    <Card title="🏆 Rozet Koleksiyonum" style={{ marginTop: 24 }}>
      <Row gutter={[16, 16]}>
        {badgeIcons.map((icon, index) => {
          const isEarned = index < earnedBadges;
          return (
            <Col key={index} xs={6} sm={4} md={3}>
              <Tooltip title={isEarned ? `Ay ${index + 1} Rozeti` : 'Kilitli'}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  background: isEarned ? monthColors[index + 1] : '#f0f0f0',
                  opacity: isEarned ? 1 : 0.5,
                  border: isEarned ? 'none' : '2px dashed #d9d9d9',
                  margin: '0 auto'
                }}>
                  {isEarned ? icon : '🔒'}
                </div>
              </Tooltip>
              <div style={{ textAlign: 'center', fontSize: 10, marginTop: 8 }}>Ay {index + 1}</div>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default Badges;
