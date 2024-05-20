import { sample } from 'lodash';
import { faker } from '@faker-js/faker';
import { duration } from '@mui/material';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  status: sample(['active', 'block']),
  role: sample(['Admin', 'Supervisor']),
}));
export const packages = [...Array(3)].map((_, index) => ({
  id: faker.string.uuid(),
  name: sample(['Basic', 'Silver', 'Gold']),
  price: faker.commerce.price(10, 100, 2, '$'), // price between $10 and $100
  duration: sample(['monthly', 'yearly']),
  features: sample([
    ['Feature A', 'Feature B', 'Feature C'],
    ['Feature D', 'Feature E', 'Feature F'],
    ['Feature G', 'Feature H', 'Feature I'],
  ]),
  startDate: faker.date.past().toISOString().split('T')[0], // past date
  endDate: faker.date.future().toISOString().split('T')[0], // future date
  status: sample(['active', 'in-active']),
}));

export const subscribes = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  user_name: faker.person.fullName(),
  user_email: faker.internet.email(),
  name: sample(['Basic', 'Silver', 'Gold']),
  price: faker.commerce.price(10, 100, 2, '$'), // price between $10 and $100
  duration: sample(['monthly', 'yearly']),
  features: sample([
    ['Feature A', 'Feature B', 'Feature C'],
    ['Feature D', 'Feature E', 'Feature F'],
    ['Feature G', 'Feature H', 'Feature I'],
  ]),
  startDate: faker.date.past().toISOString().split('T')[0], // past date
  endDate: faker.date.future().toISOString().split('T')[0], // future date
  status: sample(['active', 'in-active']),
}));
