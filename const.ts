import { Ntt } from "@wormhole-foundation/sdk-definitions-ntt";
import { Chain, encoding } from "@wormhole-foundation/sdk";

export type NttContracts = {
  [key in Chain]?: Ntt.Contracts;
};

export const DEVNET_SOL_PRIVATE_KEY = encoding.b58.encode(
  new Uint8Array(
    [2,143,35,20, /*...*/ ])
);
export const DEVNET_ETH_PRIVATE_KEY =
  "0x...."; // your private key

export const TEST_NTT_TOKENS: NttContracts = {
  Solana: {
    token: "FtxgvFVSeGdsEbaBtruY3JxqboBf3F7hMuCV4WAmGxFq",
    manager: "NTTPAi3VbzjANYA9uvGx8RkDxR4ei4pkiRi6U9GsvZ3",
    transceiver: {
      wormhole: "Cv4s4bHypeXBmxceMhwBd57BUg3PqGX7hFEt1AnwAkUK",
    },
  },
  Sepolia: {
    token: "0x08067287F2cd26Ca31b9e7ae9E54d448dC0Bb8dC",
    manager: "0xE6c16E8183e7BDEc5B8E099b0d9Da837591a7258",
    transceiver: { wormhole: "0x6DA850BF572d40A7FE217dd3F23031B05B6279D5" },
  },
};