import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers, Contract } from "ethers";
import craftTokenStakingContractAbi from "@contractAbi/CraftTokenStaking.json";
import dragonCraftTokenStakingContractAbi from "@contractAbi/CraftTokenStaking.json";
import craftTokenContractAbi from "@contractAbi/CarftToken.json";
import dragonCraftTokenContractAbi from "@contractAbi/DragonCarftToken.json";

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
          "0x0c5A71F5D38405974735BCEDD542B1C939c3d103";
        const dragonCraftTokenStakingAddress =
          "0x880A0D296618B9e16eB41bCAE6E49C38C93fb7f8";

          const craftTokenAddress =
          "0x40686A81647D9b18f9399c8b4Ba5FF45f45aB943";
        const dragonCraftTokenAddress =
          "0x1bFbcA7dC3C1b847C74433416a91d0Db98fD3198";


  
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
  
        return {
          selectedAccount,
          chainId,
          craftTokenStakingContract,
          dragonCraftTokenStakingContract,
          craftTokenContract,
          dragonCraftTokenContract,
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
        handleAccountChange: (state, action) => {
            state.accountInfo.selectedAccount = action.payload;
          },
          handleChainIdChange: (state, action) => {
            state.accountInfo.chainId = action.payload;
          },
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

export const { handleAccountChange, handleChainIdChange} = web3ContentSlice.actions;
export default web3ContentSlice.reducer;
export {connectWallet}