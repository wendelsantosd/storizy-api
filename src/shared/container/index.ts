import { container } from 'tsyringe';

import { IAuthenticateUserRepository } from '@modules/user/repositories/IAuthenticateUserRepository';
import { ICreateUserRepository } from '@modules/user/repositories/ICreateUserRepository';
import { AuthenticateUserRepository } from '@modules/user/repositories/prisma/authenticateUserRepository';
import { CreateUserRepository } from '@modules/user/repositories/prisma/createUserRepository';
import { EncryptionProvider } from '@shared/providers/encryption/encryption';
import { IEncryptionProvider } from '@shared/providers/encryption/IEncryption';

container.registerSingleton<ICreateUserRepository>(
  'CreateUserRepository',
  CreateUserRepository,
);
container.registerSingleton<IAuthenticateUserRepository>(
  'AuthenticateUserRepository',
  AuthenticateUserRepository,
);
container.registerSingleton<IEncryptionProvider>(
  'EncryptionProvider',
  EncryptionProvider
);