import * as argon2 from 'argon2';

export async function createHashFromPassword(
  password: string,
): Promise<string> {
  try {
    return await argon2.hash(password);
  } catch (error) {
    throw new Error('could not encrypt password');
  }
}
