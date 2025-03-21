export type message = {
  file: { link: string; type: "image" | "other", iv: string } | undefined;
  sender: fbUser;
  sessionId: string;
  iv: string;
  text: string;
  signature: string,
  validSignature: boolean,
  sentAt: string;
};

export type normalUser = {
  username: string;
  userId: string;
  keys: {
    [key: string]: {
      keyPair: { publicKey: string, privateKey: string },
      groupKey: string
      signKeys: string
    }
  },
  role: "admin" | "user"
};

export type user = {
  username: string;
  userId: string;
  keys: {
    [key: string]: {
      keyPair: CryptoKeyPair,
      groupKey: CryptoKey | "pending"
      signKeys: CryptoKeyPair
    }
  },
  role: "admin" | "user"
};

export type fbChat = {
  chatName: string;
  createdAt: string;
  users: fbUser[];
  messages: message[];
}

export type fbUser = {
  username: string,
  userId: string,
  publicKey: string,
  groupEncryptedKey: string | "pending",
  publicSignKey: string
  role: "user" | "admin"
}

export type optionalChat = {
  chatName: string;
  sessionId?: string;
  createdAt: string;
  users: fbUser[];
  messages: message[];
};

export type chat = {
  chatName: string;
  sessionId: string;
  createdAt: string;
  users: fbUser[];
  messages: message[];
};
