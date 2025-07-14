import {
  Aptos,
  AptosConfig,
  Network,
  InputViewFunctionData,
} from "@aptos-labs/ts-sdk";
import { CONTRACT_CONFIG } from "./config";

const config = new AptosConfig({
  network: Network.TESTNET,
});
const aptos = new Aptos(config);

const CONTRACT_ADDRESS = CONTRACT_CONFIG.address;
const MODULE_NAME = CONTRACT_CONFIG.moduleName;

export async function getCompositeVolatility(): Promise<string> {
  try {
    const payload: InputViewFunctionData = {
      function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::get_composite_volatility`,
      functionArguments: [],
    };

    const response = await aptos.view({
      payload,
    });

    return response[0] as string;
  } catch (error) {
    console.log("Error getting composite volatility:", error);
    return "0";
  }
}

export function fromContractUnits(
  amount: string,
  decimals: number = 8
): number {
  try {
    return parseInt(amount) / Math.pow(10, decimals);
  } catch (error) {
    console.log("Error converting from contract units:", error);
    return 0;
  }
}
