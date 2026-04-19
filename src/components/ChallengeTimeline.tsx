import React from 'react';
import { Timeline, Card, Tag } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, LockOutlined } from '@ant-design/icons';
import { monthColors } from '../theme';

const months = [
  { name: 'Tohum', tasks: ['4 Kayıt', '3000 TL'] },
  { name: 'Filiz', tasks: ['4 Kayıt', '3000 TL'] },
  { name: 'Fidan', tasks: ['4 Kayıt', '3000 TL'] },
  { name: 'Ağaç', tasks: ['4 Kayıt', '3000 TL'] },
  { name: 'Çiçek', tasks: ['4 Kayıt', '3000 TL'] },
  { name: 'Meyve', tasks: ['4 Kayıt', '3000 TL'] },
  { name: 'Hasat', tasks: ['4 Kayıt', '3000 TL'] },
  { name: 'Zirve', tasks: ['4 Kayıt', '3000 TL', 'Final'] },
];

const ChallengeTimeline: React.FC = () => {
  const currentMonth = 3;

  const timelineItems = months.map((month, index) => {
    const monthNum = index + 1;
    const status = monthNum < currentMonth ? 'completed' : monthNum === currentMonth ? 'current' : 'locked';

    return {
      key: monthNum,
      color: status === 'completed' ? '#52c41a' : status === 'current' ? monthColors[monthNum] : '#d9d9d9',
      icon: status === 'completed' ? <CheckCircleOutlined /> : status === 'current' ? <ClockCircleOutlined /> : <LockOutlined />,
      content: (
        <div style={{ paddingBottom: 16 }}>
          <span style={{ fontWeight: 600 }}>{`Ay ${monthNum}: ${month.name}`}</span>
          {status === 'current' && <Tag color="processing" style={{ marginLeft: 8 }}>Şu an</Tag>}
          <div style={{ fontSize: 12, color: '#8c8c8c', marginTop: 4 }}>
            Görevler: {month.tasks.join(', ')}
          </div>
        </div>
      ),
    };
  });

  return (
    <Card title="🏆 8 Aylık Zirve Yolculuğun" style={{ marginTop: 24 }}>
      <Timeline items={timelineItems} />
    </Card>
  );
};

export default ChallengeTimeline;
