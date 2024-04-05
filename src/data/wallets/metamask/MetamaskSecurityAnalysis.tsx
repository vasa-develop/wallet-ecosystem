import Figure from '@/components/Figure';
import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

export default function MetamaskSecurityAnalysis() {
  return (
    <div className="flex flex-col gap-2">
      <Title level={4}>Key Management</Title>
      <Figure src="/wallets/metamask/metamask_key_management.png" />
      <p>
        Metamask allows users to use a password to access the key stored in the
        user’s local browser’s storage.
      </p>
      <p>
        In case of mobile wallet users can use a password OR biometrics to
        access the key stored in the user’s device.
      </p>
      <p>
        More info on{' '}
        <Link
          className="underline"
          href="https://www.wispwisp.com/index.php/2020/12/25/how-metamask-stores-your-wallet-secret/"
        >
          how MetaMask stores your wallet secret?
        </Link>
      </p>
      <Title level={4}>Account Management</Title>
      <ul className="list-disc pl-4">
        <li>EOA ✅</li>
        <li>
          SCA ⚠️ (not supported natively, but could be supported using{' '}
          <Link
            className="underline"
            href="https://metamask.io/news/developers/aa-snap-democratizing-account-abstraction/"
          >
            AA snap
          </Link>{' '}
          plugin)
        </li>
      </ul>
      <Title level={4}>Processes</Title>
      <p>
        For each case, check, how this works and some benchmarks on cost and
        time used to perform the operation.
      </p>
      <Title level={5}>Key generation</Title>
      <Figure src="/wallets/metamask/secp256k1_key_generation.png" />
      <p>
        A random number selected from the secp256k1 elliptic curve serves as the
        private key. This key is then multiplied by a predefined point on the
        curve to generate the public key. The Ethereum address is derived from
        the last 20 bytes of the hashed public key. The &apos;seed phrase&apos;
        is usually introduced for human-readable backup, enabling the
        deterministic derivation of private and public keys.
      </p>
      <Title level={5}>Transaction process</Title>
      <Figure src="/wallets/metamask/secp256k1_trx_sig.png" />
      <p>
        Signing Transactions: A transaction, containing details such as nonce(a
        sequential number), amount, gas price, and recipient address, is signed
        using the private key. This process, involving the ECDSA, a digital
        signature algorithm that uses elliptic curve cryptography and adopts
        secp256k1 as the curve, generates a signature consisting of values (r,
        s, v). The signature and the original transaction are then broadcast on
        the network.
      </p>
      <Figure src="/wallets/metamask/eth_trx_verification.png" />
      <p>
        Verifying Transactions: Once a transaction reaches Ethereum nodes, it
        undergoes a validation process in the node&apos;s mempool. To verify the
        signer, the nodes use the signature and hashed transaction to derive the
        sender&apos;s public key and confirm the transaction&apos;s authenticity
        by matching the derived address with the sender&apos;s.
      </p>
      <Title level={5}>Account Recovery process</Title>
      <p>
        Users are suggested to maintain a secure back up of the seed
        phrase/private key(s) in order to recover their account if needed. If a
        user loses their private key/seed phrase, then they cannot recover their
        account.
      </p>
      <Title level={5}>Migrating from another wallet</Title>
      <ul className="list-disc pl-4">
        <li>Seed phrase import supported (seed format supported: 12/24)</li>
        <li>Private key import supported</li>
        <li>Hierarchical deterministic (HD) address derivation</li>
      </ul>
      <Title level={5}>Migrating to another wallet</Title>
      <p>
        You can export your private key/seed phrase and import that to any other
        compatible wallet.
      </p>
    </div>
  );
}
