// export default [{
// 이것도 가능
// }]

import roomImage0 from '@/assets/images/room1.jpg';
import roomImage1 from '@/assets/images/room1.jpg';
import roomImage2 from '@/assets/images/room2.jpg';

var roomData = [
  {
    id: 0,
    title: 'Room 1',
    // image: require('@/assets/images/room0.jpg'),
    // image: '@/assets/images/room0.jpg',
    image: roomImage0,
    content: '1번 방입니다.',
    price: 300000,
  },
  {
    id: 1,
    title: 'Room 2',
    // image: require('@/assets/images/room1.jpg'),
    // image: '@/assets/images/room1.jpg',
    image: roomImage1,
    content: '2번 방입니다.',
    price: 400000,
  },
  {
    id: 2,
    title: 'Room 3',
    // image: require('@/assets/images/room2.jpg'),
    // image: '@/assets/images/room2.jpg',
    image: roomImage2,
    content: '3번 방입니다.',
    price: 500000,
  },
];

export default roomData;
