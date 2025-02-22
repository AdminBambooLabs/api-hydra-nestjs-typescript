import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export function createHashFromPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      resolve(bcrypt.hash(password, saltRounds));
    } catch {
      reject('could not encrypt password');
    }
  });
}
