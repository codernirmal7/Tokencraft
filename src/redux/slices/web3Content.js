import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers, Contract } from "ethers";
import craftTokenStakingContractAbi from "@contractAbi/CraftTokenStaking.json";
import dragonCraftTokenStakingContractAbi from "@contractAbi/CraftTokenStaking.json";
import craftTokenContractAbi from "@contractAbi/CarftToken.json";
import dragonCraftTokenContractAbi from "@contractAbi/DragonCarftToken.json";
import tokenSwapContractAbi from "@contractAbi/TokenSwap.json";
import usdtTokenContractAbi from "@contractAbi/UsdtToken.json";


const initialState = {
    accountInfo: {
        provider: null,
        selectedAccount: null,
        chainId: null,
        craftTokenStakingContract: null,
        dragonCraftTokenStakingContract: null,
        craftTokenContract: null,
        dragonCraftTokenContract: null,
        stakingContract: null,
        tokenSwapContract: null,
        usdtTokenContract: null,
        signer: null,
      },
      isWalletConnected : false,
      loading: false,
      error: null,
};

const connectWallet = createAsyncThunk(
    "web3Content/connectWallet",
    async () => {
      try {
        if (!window.ethereum) {
          console.log("MetaMask is not installed");
          throw new Error("MetaMask is not installed");
        }
  
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const chainIdHex = await window.ethereum.request({
          method: "eth_chainId",
        });
        const chainId = parseInt(chainIdHex, 16);
        const selectedAccount = accounts[0];
  
        if (!selectedAccount) {
          throw new Error("No Ethereum account available");
        }
  
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
  
        const craftTokenStakingAddress =
          "0x76DB889C60e8e60AE664A982E9777E81FDC21893";
        const dragonCraftTokenStakingAddress =
          "0x57E391C529bE209Dff687CdBbb02B35CF0f38d88";

          const craftTokenAddress =
          "0x40686A81647D9b18f9399c8b4Ba5FF45f45aB943";
        const dragonCraftTokenAddress =
          "0x1bFbcA7dC3C1b847C74433416a91d0Db98fD3198";

        const tokenSwapContractAddress =
          "0xC94bF82e151cd79179bE5A300fc0457139AC4064";

          const usdtTokenContractAddress =
          "0x60EDdBF1eD7F27aaF2ea17D2b1d1d9D97A764eF5";

  
        const craftTokenStakingContract = new Contract(
            craftTokenStakingAddress,
            craftTokenStakingContractAbi,
            signer
        );

        const dragonCraftTokenStakingContract = new Contract(
            dragonCraftTokenStakingAddress,
            dragonCraftTokenStakingContractAbi,
          signer
        );

        const craftTokenContract = new Contract(
            craftTokenAddress,
            craftTokenContractAbi,
            signer
        );
        
        const dragonCraftTokenContract = new Contract(
            dragonCraftTokenAddress,
            dragonCraftTokenContractAbi,
            signer
        );

        const tokenSwapContract = new Contract(
          tokenSwapContractAddress,
          tokenSwapContractAbi,
          signer
      );

      const usdtTokenContract = new Contract(
        usdtTokenContractAddress,
        usdtTokenContractAbi,
        signer
    );
  
        return {
          selectedAccount,
          chainId,
          craftTokenStakingContract,
          dragonCraftTokenStakingContract,
          craftTokenContract,
          dragonCraftTokenContract,
          tokenSwapContract,
          usdtTokenContract,
          signer,
          provider
        };
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
);  



const web3ContentSlice = createSlice({
    name: "web3Content",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(connectWallet.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.accountInfo = null;
          state.isWalletConnected = false
        });
        builder.addCase(connectWallet.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.accountInfo = {
            accounts : action.payload.accounts,
            provider: action.payload.provider,
            selectedAccount: action.payload.selectedAccount,
            chainId: action.payload.chainId,
            craftTokenStakingContract: action.payload.craftTokenStakingContract,
            dragonCraftTokenStakingContract: action.payload.dragonCraftTokenStakingContract,
            craftTokenContract: action.payload.craftTokenContract,
            dragonCraftTokenContract: action.payload.dragonCraftTokenContract,
            tokenSwapContract: action.payload.tokenSwapContract,
            usdtTokenContract : action.payload.usdtTokenContract,
            signer: action.payload.signer,
          };
          state.isWalletConnected = true
    
        });
        builder.addCase(connectWallet.rejected, (state , action) => {
          state.loading = false;
          state.error = action.error.message;
          state.accountInfo = null;
          state.isWalletConnected = false
        });
      },
});

export default web3ContentSlice.reducer;
export {connectWallet}