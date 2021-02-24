const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('User should ne Hassan Khan object', () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: 'Hassan',
    lastName: 'Khan',
  });
});

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
  let usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
