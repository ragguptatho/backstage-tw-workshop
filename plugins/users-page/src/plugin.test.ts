import { usersPagePlugin } from './plugin';

describe('users-page', () => {
  it('should export plugin', () => {
    expect(usersPagePlugin).toBeDefined();
  });
});
