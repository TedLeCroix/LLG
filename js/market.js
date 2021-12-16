// Dom Elements
const err_text = document.getElementById("err_text");
const err_panel = document.getElementById("err_panel");

// Nav Elements
const side_forge = document.getElementById("side_forge");
const side_inventory = document.getElementById("side_inventory");
const side_market = document.getElementById("side_market");
const side_stake = document.getElementById("side_stake");

const top_forge = document.getElementById("top_forge");
const top_inventory = document.getElementById("top_inventory");
const top_market = document.getElementById("top_market");
const top_stake = document.getElementById("top_stake");

// Sections

const section_forge = document.getElementById("section_forge");
const section_inventory = document.getElementById("section_inventory");
const section_staking = document.getElementById("section_staking");
const section_market = document.getElementById("section_market");




// Main Initialize Elements
const btn_mint_hero = document.getElementById("btn_mint_hero");
const btn_mint_hero2 = document.getElementById("btn_mint_hero2");
const btn_mint_hero3 = document.getElementById("btn_mint_hero3");
const btn_mint_shroom = document.getElementById("btn_mint_shroom");


const div_mint_hero = document.getElementById("div_mint_hero");
const div_mint_hero2 = document.getElementById("div_mint_hero2");
const div_mint_hero3 = document.getElementById("div_mint_hero3");

const div_mint_shroom = document.getElementById("div_mint_shroom");

const token_address_shroom = document.getElementById("token_address_shroom");
const token_address_hero = document.getElementById("token_address_hero");
const token_address_hero2 = document.getElementById("token_address_hero2");
const token_address_hero3 = document.getElementById("token_address_hero3");

const shroom_mint_remaining = document.getElementById("shroom_mint_remaining");
const hero_mint_remaining = document.getElementById("hero_mint_remaining");
const btn_mint_shroom_loading = document.getElementById("btn_mint_shroom_loading");
const btn_mint_hero_loading = document.getElementById("btn_mint_hero_loading");
const btn_mint_hero2_loading = document.getElementById("btn_mint_hero2_loading");
const btn_mint_hero3_loading = document.getElementById("btn_mint_hero3_loading");

// COUNt
const hero_count_1 = document.getElementById("hero_count_1");
const hero_count_2 = document.getElementById("hero_count_2");
const hero_count_3 = document.getElementById("hero_count_3");
const hero_count_4 = document.getElementById("hero_count_4");
const hero_count_5 = document.getElementById("hero_count_5");
const hero_count_6 = document.getElementById("hero_count_6");
const hero_count_7 = document.getElementById("hero_count_7");
const hero_count_8 = document.getElementById("hero_count_8");
const hero_count_9 = document.getElementById("hero_count_9");

// Modal Help

const myModalHelp = document.getElementById('connectHelpModal');
const modalhelp = new mdb.Modal(myModalHelp);

// Modal Mint

const myModalEl = document.getElementById('modal_mint');
const modalmint = new mdb.Modal(myModalEl, { backdrop: 'false', keyboard: false });

// Modal Stake

const myModalStake = document.getElementById('modalStake');
const stakeModal = new mdb.Modal(myModalStake);

const mint_attribute = document.getElementById('mint_attribute'); 
const mint_attribute_header = document.getElementById('mint_attribute_header'); 
const mint_name = document.getElementById('mint_name'); 
const mint_text_loading = document.getElementById('mint_text_loading'); 
const mint_img = document.getElementById('mint_img'); 
const mint_img_loader = document.getElementById('mint_img_loader'); 

const mint_text = document.getElementById('mint_text'); 
const mint_shroom_video = document.getElementById('mint_shroom_video'); 

const view_btns = document.getElementById('view_btns'); 


const mint_close = document.getElementById('mint_close'); 


// Inventory


const inventory_hero_gallery = document.getElementById('inventory_hero_gallery'); 
const inventory_shroom_gallery = document.getElementById('inventory_shroom_gallery'); 


const inventory_btn_connect = document.getElementById('inventory_btn_connect'); 
const inventory_connected = document.getElementById('inventory_connected'); 
const inventory_disconnected = document.getElementById('inventory_disconnected'); 
const inventory_loader = document.getElementById('inventory_loader'); 



// Modal View

const mint_view_btns = document.getElementById('mint_view_btns');
const view_stake = document.getElementById('view_stake');
const view_stake_btn_txt = document.getElementById('view_stake_btn_txt');
const transfer_address = document.getElementById('transfer_address');
const transfer_button = document.getElementById('transfer_btn');
const btn_stake = document.getElementById('btn_stake'); 
const txt_stake = document.getElementById('txt_stake'); 

// Buy/Sell

const owner_cancel = document.getElementById('owner_cancel'); 
const owner_sell = document.getElementById('owner_sell');
const cancel_btn = document.getElementById('cancel_btn');

const sell_btn = document.getElementById('sell_btn');
const sell_price = document.getElementById('sell_price');

const buyer_btns = document.getElementById('buyer_btns');
const buy_btn = document.getElementById('buy_btn');
const buy_btn_txt = document.getElementById('buy_btn_txt');
const approve_btn = document.getElementById('approve_btn');
const owner_approve = document.getElementById('owner_approve');


// MARKET
const market_gallery = document.getElementById('market_gallery'); 
const market_loader = document.getElementById('market_loader');
const btn_loadMore = document.getElementById("btn_load_more");
const collapseFilter = document.getElementById("collapseFilter");
const filterButton = document.getElementById("filterButton");


const collapseHeroFilter = document.getElementById("collapseHeroFilter");
const filterHeroButton = document.getElementById("filterHeroButton");

const sort_keywords = document.getElementById("sort_keyword");
const sort_selector = document.getElementById("sort");


const sort_hero_values =document.getElementById("sort_hero_values");
const sort_hero =document.getElementById("sort_hero");

const sort_1 = document.getElementById("sort_1_values");
const sort_2 = document.getElementById("sort_2_values");
const sort_3 = document.getElementById("sort_3_values");
const sort_4 = document.getElementById("sort_4_values");
const sort_5 = document.getElementById("sort_5_values");
const sort_6 = document.getElementById("sort_6_values");
const sort_7 = document.getElementById("sort_7_values");
const sort_8 = document.getElementById("sort_8_values");
const sort_9 = document.getElementById("sort_9_values");
const sort_10 = document.getElementById("sort_10_values");
const sort_11 = document.getElementById("sort_11_values");
const sort_12 = document.getElementById("sort_12_values");

const filter_main = document.getElementById("filter_main");
const filter_hero_main = document.getElementById("filter_hero_main");

// STAKE

const stake_val_heroes = document.getElementById("stake_val_heroes");
const stake_val_accumulated = document.getElementById("stake_val_accumulated");
const stake_val_available = document.getElementById("stake_val_available");
const stake_val_claimed = document.getElementById("stake_val_claimed");
const stake_val_next = document.getElementById("stake_val_next");
const stake_claim = document.getElementById("stake_claim");
const stake_disconnected = document.getElementById("stake_disconnected");
const stake_connected = document.getElementById("stake_connected");
const stake_loader = document.getElementById("stake_loader");
const stake_btn_connect = document.getElementById("stake_btn_connect");
const staking_gallery = document.getElementById("stake_gallery");

// CALCULATOR


const calculator_table = document.getElementById("calculator_table");

const calc_init_0 = document.getElementById("calc_init_0");
const calc_day_0 = document.getElementById("calc_day_0");
const calc_month_0 = document.getElementById("calc_month_0");
const val_main_0 = document.getElementById("val_main_0");

const calc_init_1 = document.getElementById("calc_init_1");
const calc_day_1 = document.getElementById("calc_day_1");
const calc_month_1 = document.getElementById("calc_month_1");
const val_main_1 = document.getElementById("val_main_1");

const calc_init_2 = document.getElementById("calc_init_2");
const calc_day_2 = document.getElementById("calc_day_2");
const calc_month_2 = document.getElementById("calc_month_2");
const val_main_2 = document.getElementById("val_main_2");

const calc_init_3 = document.getElementById("calc_init_3");
const calc_day_3 = document.getElementById("calc_day_3");
const calc_month_3 = document.getElementById("calc_month_3");
const val_main_3 = document.getElementById("val_main_3");

const calc_init_4 = document.getElementById("calc_init_4");
const calc_day_4 = document.getElementById("calc_day_4");
const calc_month_4 = document.getElementById("calc_month_4");
const val_main_4 = document.getElementById("val_main_4");

const calc_init_5 = document.getElementById("calc_init_5");
const calc_day_5 = document.getElementById("calc_day_5");
const calc_month_5 = document.getElementById("calc_month_5");
const val_main_5 = document.getElementById("val_main_5");

const calc_init_6 = document.getElementById("calc_init_6");
const calc_day_6 = document.getElementById("calc_day_6");
const calc_month_6 = document.getElementById("calc_month_6");
const val_main_6 = document.getElementById("val_main_6");

const calc_init_7 = document.getElementById("calc_init_7");
const calc_day_7 = document.getElementById("calc_day_7");
const calc_month_7 = document.getElementById("calc_month_7");
const val_main_7 = document.getElementById("val_main_7");

const calc_init_8 = document.getElementById("calc_init_8");
const calc_day_8 = document.getElementById("calc_day_8");
const calc_month_8 = document.getElementById("calc_month_8");
const val_main_8 = document.getElementById("val_main_8");

const calc_init_10 = document.getElementById("calc_init_10");
const calc_day_10 = document.getElementById("calc_day_10");
const calc_month_10 = document.getElementById("calc_month_10");

const calculatorButton = document.getElementById("calculatorButton");



const webservice_shroom = "https://bylkfi5n17.execute-api.us-east-1.amazonaws.com/Prod";
const webservice_hero = "https://le4bb13nkh.execute-api.us-east-1.amazonaws.com/PROD";
const webservice_gate = "https://hyjblrbbu1.execute-api.us-east-1.amazonaws.com/PROD";
const webservice_getHeroes = "https://le4bb13nkh.execute-api.us-east-1.amazonaws.com/PROD/list";
// SHROOMS VAR

const shroomVid1 = "https://lonelyjmarket.mypinata.cloud/ipfs/QmdFqGTVEdndcFWbEDSWgUDw3tdGvx55EpbVax5fRFcJAo/mush_1.png";
const shroomVid2 = "https://lonelyjmarket.mypinata.cloud/ipfs/QmdFqGTVEdndcFWbEDSWgUDw3tdGvx55EpbVax5fRFcJAo/mush_2.png";
const shroomVid3 = "https://lonelyjmarket.mypinata.cloud/ipfs/QmdFqGTVEdndcFWbEDSWgUDw3tdGvx55EpbVax5fRFcJAo/mush_3.png";
const shroomVid4 = "https://lonelyjmarket.mypinata.cloud/ipfs/QmdFqGTVEdndcFWbEDSWgUDw3tdGvx55EpbVax5fRFcJAo/mush_4.png";
const shroomLocation = "https://lonelyjmarket.mypinata.cloud/ipfs/QmNZyfAqL4wnjKJX8tasb925YGevEKv2zVSazGDoAkjJ6v/";
const shroomImg = "https://lonelyjmarket.mypinata.cloud/ipfs/QmWPGASwJfGoxAemSyK383kNaGrxW6BTuH3hDRcQwRfbJZ/";
const shroomDesc = "Congratulations on your new Shroomy!  Head to your NFT inventory for further details or take him straight to the Marketplace to see what he's really worth.";

var loadedVal = 0;
var maxLoadPerPage = 36;
var totalEntries = 0;
var maxEntries = 0;

// Shroom percents
var legendaryPercent = 1;
	var epicPercent = 5;
	var rarePercent = 10;

// Hold items
var allMarketItems = []; // empty array
var filteredMarketItems = [];
var allShroomItems = [];
var allPortfolioItems = []; // empty array

// Global Values
var chainid;
var modalID = -1;

// Is process running?

var running = false;



var selectedId = -1;

 for (var i = 0; i < document.getElementsByClassName("ignore-click").length; i++) {
            document.getElementsByClassName("ignore-click")[i].addEventListener('click', function (event) {
                event.preventDefault();
                return false;
            });
 }

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


const apy_0 = 370;
const apy_1 = 340;
const apy_2 = 420;
const apy_3 = 310;
const apy_4 = 530;
const apy_5 = 630;
const apy_6 = 1200;
const apy_7 = 980;
const apy_8 = 2000;
const initialValue = 18000;
const dailyRewardValue = 49.315068493;

function increaseCalc(findVal)
{
	var findComponent = document.getElementById(findVal);
	
	findComponent.innerHTML = parseInt(findComponent.innerHTML) + 1;
	
	updateCalculations();
}

function decreaseCalc(findVal)
{
	var findComponent = document.getElementById(findVal);
	
	findComponent.innerHTML = parseInt(findComponent.innerHTML) - 1;
	
	if (parseInt(findComponent.innerHTML) < 0)
	{
		findComponent.innerHTML = 0;
	}
		
	updateCalculations();
}

function updateCalculations()
{
	calc_init_0.innerHTML = val_main_0.innerHTML * initialValue;
	calc_day_0.innerHTML = (dailyRewardValue * apy_0/100 * val_main_0.innerHTML).toFixed(2);
	calc_month_0.innerHTML = (dailyRewardValue * apy_0/100 * val_main_0.innerHTML * 30).toFixed(2);
	
	calc_init_1.innerHTML = val_main_1.innerHTML * initialValue;
	calc_day_1.innerHTML = (dailyRewardValue * apy_1/100 * val_main_1.innerHTML).toFixed(2);
	calc_month_1.innerHTML = (dailyRewardValue * apy_1/100 * val_main_1.innerHTML * 30).toFixed(2);
	
	calc_init_2.innerHTML = val_main_2.innerHTML * initialValue;
	calc_day_2.innerHTML = (dailyRewardValue * apy_2/100 * val_main_2.innerHTML).toFixed(2);
	calc_month_2.innerHTML = (dailyRewardValue * apy_2/100 * val_main_2.innerHTML * 30).toFixed(2);
	
	calc_init_3.innerHTML = val_main_3.innerHTML * initialValue;
	calc_day_3.innerHTML = (dailyRewardValue * apy_3/100 * val_main_3.innerHTML).toFixed(2);
	calc_month_3.innerHTML = (dailyRewardValue * apy_3/100 * val_main_3.innerHTML * 30).toFixed(2);
	
	calc_init_4.innerHTML = val_main_4.innerHTML * initialValue;
	calc_day_4.innerHTML = (dailyRewardValue * apy_4/100 * val_main_4.innerHTML).toFixed(2);
	calc_month_4.innerHTML = (dailyRewardValue * apy_4/100 * val_main_4.innerHTML * 30).toFixed(2);
	
	calc_init_5.innerHTML = val_main_5.innerHTML * initialValue;
	calc_day_5.innerHTML = (dailyRewardValue * apy_5/100 * val_main_5.innerHTML).toFixed(2);
	calc_month_5.innerHTML = (dailyRewardValue * apy_5/100 * val_main_5.innerHTML * 30).toFixed(2);
	
	calc_init_6.innerHTML = val_main_6.innerHTML * initialValue;
	calc_day_6.innerHTML = (dailyRewardValue * apy_6/100 * val_main_6.innerHTML).toFixed(2);
	calc_month_6.innerHTML = (dailyRewardValue * apy_6/100 * val_main_6.innerHTML * 30).toFixed(2);
	
	calc_init_7.innerHTML = val_main_7.innerHTML * initialValue;
	calc_day_7.innerHTML = (dailyRewardValue * apy_7/100 * val_main_7.innerHTML).toFixed(2);
	calc_month_7.innerHTML = (dailyRewardValue * apy_7/100 * val_main_7.innerHTML * 30).toFixed(2);
	
	calc_init_8.innerHTML = val_main_8.innerHTML * initialValue;
	calc_day_8.innerHTML = (dailyRewardValue * apy_8/100 * val_main_8.innerHTML).toFixed(2);
	calc_month_8.innerHTML = (dailyRewardValue * apy_8/100 * val_main_8.innerHTML * 30).toFixed(2);
	
	
	calc_init_10.innerHTML = (parseInt(calc_init_0.innerHTML) + parseInt(calc_init_1.innerHTML) + parseInt(calc_init_2.innerHTML) + parseInt(calc_init_3.innerHTML) + parseInt(calc_init_4.innerHTML) + parseInt(calc_init_5.innerHTML) + parseInt(calc_init_6.innerHTML) + parseInt(calc_init_7.innerHTML) + parseInt(calc_init_8.innerHTML));
							  
	calc_day_10.innerHTML = (parseInt(calc_day_0.innerHTML) + parseInt(calc_day_1.innerHTML) + parseInt(calc_day_2.innerHTML) + parseInt(calc_day_3.innerHTML) + parseInt(calc_day_4.innerHTML) + parseInt(calc_day_5.innerHTML) + parseInt(calc_day_6.innerHTML) + parseInt(calc_day_7.innerHTML) + parseInt(calc_day_8.innerHTML)).toFixed(2);
	
	calc_month_10.innerHTML = (parseInt(calc_month_0.innerHTML) + parseInt(calc_month_1.innerHTML) + parseInt(calc_month_2.innerHTML) + parseInt(calc_month_3.innerHTML) + parseInt(calc_month_4.innerHTML) + parseInt(calc_month_5.innerHTML) + parseInt(calc_month_6.innerHTML) + parseInt(calc_month_7.innerHTML) + parseInt(calc_month_8.innerHTML)).toFixed(2);
	
}

function openCalculator()
{
	if (calculator_table.classList.contains("hidden"))		
	{
		calculator_table.classList.remove("hidden");
		calculatorButton.innerHTML = "Close Rewards Calculator";
	}
	else
		{
			calculator_table.classList.add("hidden");
					calculatorButton.innerHTML = "Open Rewards Calculator";
		}
}

const connectInventory = async() =>
{
	 await loadWeb3Main();
	
	//chainid = await web3.eth.getChainId();
	if (web3)
		{
			
			if (!window.web3.currentProvider.isTrust)
				{
	
	if (DEBUG) {
      if (chainid != 97) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x61'
          }],
        });


      }

    } else {
      if (chainid != 56) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x38'
          }],
        });


      }
    }
	
				}
			
			 await openMyNFTs();
			
		}
	else
		{
		openHelp();
   
		}
	
 
}

function activatePane(paneName)
{
	
	side_forge.classList.remove("selected");
	side_inventory.classList.remove("selected");
	side_market.classList.remove("selected");
	side_stake.classList.remove("selected");
	
	top_forge.classList.remove("selected");
	top_inventory.classList.remove("selected");
	top_market.classList.remove("selected");
	top_stake.classList.remove("selected");
	
	closeAllSections();

	if (paneName == "forge")
		{
			side_forge.classList.add("selected");
			top_forge.classList.add("selected");
			
			loadForge();
		}
	else if (paneName == "inventory")
		{
				side_inventory.classList.add("selected");
			top_inventory.classList.add("selected");
			
			loadInventory();
		}
	else if (paneName == "market")
		{
				side_market.classList.add("selected");
			top_market.classList.add("selected");
			loadMarket();
		}
	else if (paneName == "stake")
		{
				side_stake.classList.add("selected");
			top_stake.classList.add("selected");
			loadStaking();
		}
	
	
	
	
	
}

function loadForge()
{

	section_forge.classList.remove("hidden");
}

const openHeroInventory = async() =>
{
	if (inventory_disconnected.classList.contains("hidden"))
		{
	inventory_hero_gallery.classList.remove("hidden");
	inventory_shroom_gallery.classList.add("hidden");
		}
}

const openShroomInventory = async() =>
{
	if (inventory_disconnected.classList.contains("hidden"))
		{
				inventory_hero_gallery.classList.add("hidden");
	inventory_shroom_gallery.classList.remove("hidden");
		}

}

function loadInventory()
{
	inventory_hero_gallery.innerHTML = "";
	inventory_shroom_gallery.innerHTML = "";
		section_inventory.classList.remove("hidden");
	openMyNFTs();
}

function loadStaking()
{
	staking_gallery.innerHTML = "";
		section_staking.classList.remove("hidden");
	openStaking();
}

function loadMarket()
{
		section_market.classList.remove("hidden");
	openHeroMarket();
}

function closeAllSections()
{
	 section_staking.classList.add("hidden");
 section_market.classList.add("hidden");
	section_inventory.classList.add("hidden");
	section_forge.classList.add("hidden");
}

const loadData = async() =>
{
	token_address_shroom.innerHTML = nft_shroom_address;
	token_address_hero.innerHTML = nft_hero_address;
	
	token_address_hero2.innerHTML = nft_gate_address;
	token_address_hero3.innerHTML = nft_gate_address;
	try
		{
	await assignWeb3Portal();
	
	
	var bsc_gmcontract = await loadBSCGMContract();
	var bsc_nft_shroom = await loadBSCShroomContract();
	var bsc_nft_hero = await loadBSCHeroContract();
	
 	var isPaused = await bsc_gmcontract.methods.paused().call();
	
  
	
	var shroomsTotalAllowed = await bsc_nft_shroom.methods.getMaxCount().call();
	var shroomsCurrent = await bsc_nft_shroom.methods.totalSupply().call();
	var heroCurrent = await bsc_nft_hero.methods.totalSupply().call();
			
	hero_mint_remaining.innerHTML = 1000 - heroCurrent;
	shroom_mint_remaining.innerHTML = shroomsTotalAllowed - shroomsCurrent;

	
	 if (isPaused) {
div_mint_hero.classList.remove("hidden");
		 div_mint_hero2.classList.remove("hidden");
		 div_mint_hero3.classList.remove("hidden");
		 div_mint_shroom.classList.remove("hidden");
		
  } else {
	  btn_mint_shroom_loading.classList.add("hidden");
	  btn_mint_hero_loading.classList.add("hidden");
	  btn_mint_hero2_loading.classList.add("hidden");
	  btn_mint_hero3_loading.classList.add("hidden");
	   btn_mint_hero.classList.remove("hidden");
	   btn_mint_hero2.classList.remove("hidden");
	   btn_mint_hero3.classList.remove("hidden");
	   btn_mint_shroom.classList.remove("hidden");
	  if (heroCurrent >= 1000)
		  {
			  hero_mint_remaining.innerHTML = 0;
			   btn_mint_hero.disabled = true;
			  btn_mint_hero.innerHTML = "No Heroes Remaining";
		  }
	  else
		  {
			
		  }
	  
	   if (shroomsCurrent >= 5008)
		  {
			  btn_mint_shroom.disabled = true;
			  btn_mint_shroom.innerHTML = "No Shroomies Remaining";
		  }
	  else
		  {
			
		  }

		
	 
  }
		}
	catch(err)
		{
			
			btn_mint_hero.classList.remove("hidden");
			btn_mint_hero2.classList.remove("hidden");
	   btn_mint_hero3.classList.remove("hidden");
		 btn_mint_shroom.classList.remove("hidden");
		}
	
	 const response = await fetch(webservice_getHeroes);
	const getItems = await response.json();
	var heroResults = JSON.parse(getItems.body);
	
	hero_count_1.innerHTML = heroResults.Hero_1;
hero_count_2.innerHTML = heroResults.Hero_2;
	hero_count_3.innerHTML = heroResults.Hero_3;
	hero_count_4.innerHTML = heroResults.Hero_4;
	hero_count_5.innerHTML = heroResults.Hero_5;
	hero_count_6.innerHTML = heroResults.Hero_6;
	hero_count_7.innerHTML = heroResults.Hero_7;
	hero_count_8.innerHTML = heroResults.Hero_8;
	hero_count_9.innerHTML = heroResults.Hero_9;
	
}

function openShroomMintModal() {
	resetmintmodal();
modalmint.show();
}



function openApprovalMintModal() {
	resetmintmodal_approval();
modalmint.show();
}

function openHeroMintModal() {
	resetmintmodal_hero();
modalmint.show();
}

var listNFTs = [];

const mintShroom = async () => {

  var mintFailed = false;

  if (running) {
    return false;
  }
	
  await loadWeb3Main();

  if (web3) {

   if (!window.web3.currentProvider.isTrust)
	{
    chainid = await web3.eth.getChainId();

    if (DEBUG) {
      if (chainid != 97) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x61'
          }],
        });


      }

    } else {
      if (chainid != 56) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x38'
          }],
        });


      }
    }
		
	}
	  else
		  {
			  chainid = await web3.eth.getChainId();
			  
			  if (chainid != 56) {
        
 err_panel.classList.remove("hidden");
    err_text.innerHTML = "TrustWallet - Please change to the Binance Smart Chain before Minting";
    mintFailed = true;

    endMinting();
  return;
      }
			  
			
		  }
    // All good, lets mint

	  
	  
    var gmcontract = await loadGMContract();

    
	  
    var feeToPay = await gmcontract.methods.GetShroomMintFee().call();
	 // feeToPay = 0;
	  
	  // Check balance
	  var userBalance = await web3.eth.getBalance(web3accounts[0]);

	 
	  try
		  {
	  if (parseInt(userBalance) < parseInt(feeToPay))
		  {
			   err_panel.classList.remove("hidden");
				  err_text.innerHTML = "Error Minting : Insufficient BNB";
				  mintFailed = true;
				  endMinting(); 
			  
		  }
		  }
	  catch(err)
		  {
			  console.log("Failed to Check Balance");
		  }
	  if (!mintFailed)
		  {
    var mintShroom = await gmcontract.methods.mintShroom().send({
      from: web3accounts[0],
      value: feeToPay
    }).once('transactionHash', function (hash) {

      openShroomMintModal();

    }).once('receipt', function (receipt) {


    }).catch(function (error) {
      err_panel.classList.remove("hidden");
      err_text.innerHTML = "Error Minting : " + error.message;
      mintFailed = true;

    })
	}

    if (!mintFailed) {

		returnEvent = mintShroom.events["ShroomMinted"];

		if (mintShroom.events["ShroomMinted"][0])
			{
				for (x = 0; x < mintShroom.events["ShroomMinted"].length;x++ )
					{
						listNFTs.push(mintShroom.events["ShroomMinted"][x].returnValues._token);
					}
				
			}
		else
			{
				listNFTs.push(returnEvent.returnValues._token);
			}
		
		listNFTs.sort(function(a, b) {
  return parseInt(b) - parseInt(a);
});
		await displayNextShroom();
		
    }
	  else
		  {
			 endMinting(); 
		  }
	  
    // Fall through to endMinting

  } else {
	  
	   openHelp();
      mintFailed = true;
	  
 endMinting();
  }


}

const mintHero = async () => {

  var mintFailed = false;

  if (running) {
    return false;
  }
	
  await loadWeb3Main();

  if (web3) {

   if (!window.web3.currentProvider.isTrust)
	{
    chainid = await web3.eth.getChainId();

    if (DEBUG) {
      if (chainid != 97) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x61'
          }],
        });


      }

    } else {
      if (chainid != 56) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x38'
          }],
        });


      }
    }
		
	}
	  else
		  {
			  chainid = await web3.eth.getChainId();
			  
			  if (chainid != 56) {
        
 err_panel.classList.remove("hidden");
    err_text.innerHTML = "TrustWallet - Please change to the Binance Smart Chain before Minting";
    mintFailed = true;

    endMinting();
  return;
      }
			  
			
		  }
    // All good, lets mint

    var gmcontract = await loadGMContract();

	  var feeToPay = await gmcontract.methods._HeroesNFTMintPrice().call();
	 var totalApproval = 0;
	   var tokenContract = await loadLLGContract();
	  var userBalance = await tokenContract.methods.balanceOf(web3accounts[0]).call();
	  
	  if (DEBUG == false)
		  {
	  try
		  {
			  
	  if (parseInt(userBalance) < parseInt(feeToPay))
		  { 
			  err_panel.classList.remove("hidden");
				  err_text.innerHTML = "Error Minting : Insufficient Lucid Lands Gems";
				  mintFailed = true;
				  endMinting(); 
			
		  }
		  
		  }
	  catch(err)
		  {
			  console.log("Failed to Determine User Balance");
		  }
		  }
	  
	  if (!mintFailed)
		  {
	  if (feeToPay > 0)
		  {
			 
			  var approvalAmount = await tokenContract.methods.allowance(web3accounts[0], gm_address).call();
			 
			
			totalApproval = parseInt(approvalAmount) - parseInt(feeToPay);
			  
			
		  }
	
	  if (totalApproval < 0)
		  {
			  
			  
			  
			 
			  
			  var approveHeroToken = await tokenContract.methods.increaseAllowance(gm_address, feeToPay).send({
				  from: web3accounts[0]
			  }).once('transactionHash', function (hash) {

				  openApprovalMintModal();

				}).once('receipt', function (receipt) {
				  setApprovalSucceeded();

				}).catch(function (error) {
				  err_panel.classList.remove("hidden");
				  err_text.innerHTML = "Error Minting : " + error.message;
				  mintFailed = true;
				  endMinting(); 
				 
				 
				})
			  
			  
		  }
		  }
	  
	  
	  if (!mintFailed)
		  {
    var mintHero = await gmcontract.methods.mintRandomHero().send({
      from: web3accounts[0],
		gas : "900000"
    }).once('transactionHash', function (hash) {

      openHeroMintModal();

    }).once('receipt', function (receipt) {


    }).catch(function (error) {
      err_panel.classList.remove("hidden");
      err_text.innerHTML = "Error Minting : " + error.message;
      mintFailed = true;
closeMint();
    })
	}

    if (!mintFailed) {

		
		await displayNextHero();
		
    }
	  else
		  {
			 endMinting(); 
		  }
	  
    // Fall through to endMinting

  } else {
	  
	   openHelp();
      mintFailed = true;
	  
 endMinting();
  }





}

const mintHero2 = async () => {

  var mintFailed = false;

  if (running) {
    return false;
  }
	
  await loadWeb3Main();

  if (web3) {

   if (!window.web3.currentProvider.isTrust)
	{
    chainid = await web3.eth.getChainId();

    if (DEBUG) {
      if (chainid != 97) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x61'
          }],
        });


      }

    } else {
      if (chainid != 56) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x38'
          }],
        });


      }
    }
		
	}
	  else
		  {
			  chainid = await web3.eth.getChainId();
			  
			  if (chainid != 56) {
        
 err_panel.classList.remove("hidden");
    err_text.innerHTML = "TrustWallet - Please change to the Binance Smart Chain before Minting";
    mintFailed = true;

    endMinting();
  return;
      }
			  
			
		  }
    // All good, lets mint

    var gmcontract = await loadGMContract();

	  var feeToPay = await gmcontract.methods._HeroesNFTMintPrice_Bamidbar().call();
	
	 // feeToPay = 0;
	  
	  // Check balance
	  var userBalance = await web3.eth.getBalance(web3accounts[0]);

	 
	  try
		  {
	  if (parseInt(userBalance) < parseInt(feeToPay))
		  {
			   err_panel.classList.remove("hidden");
				  err_text.innerHTML = "Error Minting : Insufficient BNB";
				  mintFailed = true;
				  endMinting(); 
			  
		  }
		  }
	  catch(err)
		  {
			  console.log("Failed to Check Balance");
		  }
	  
	  
	  
	  if (!mintFailed)
		  {
    var mintHero = await gmcontract.methods.mintBamidbarHero().send({
      from: web3accounts[0],
		value: feeToPay,
		gas : "900000"
    }).once('transactionHash', function (hash) {

      openHeroMintModal();

    }).once('receipt', function (receipt) {


    }).catch(function (error) {
      err_panel.classList.remove("hidden");
      err_text.innerHTML = "Error Minting : " + error.message;
      mintFailed = true;
closeMint();
    })
	}

    if (!mintFailed) {

		
		await displayNextHero();
		
    }
	  else
		  {
			 endMinting(); 
		  }
	  
    // Fall through to endMinting

  } else {
	  
	   openHelp();
      mintFailed = true;
	  
 endMinting();
  }





}

const mintHero3 = async () => {

  var mintFailed = false;

  if (running) {
    return false;
  }
	
  await loadWeb3Main();

  if (web3) {

   if (!window.web3.currentProvider.isTrust)
	{
    chainid = await web3.eth.getChainId();

    if (DEBUG) {
      if (chainid != 97) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x61'
          }],
        });


      }

    } else {
      if (chainid != 56) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x38'
          }],
        });


      }
    }
		
	}
	  else
		  {
			  chainid = await web3.eth.getChainId();
			  
			  if (chainid != 56) {
        
 err_panel.classList.remove("hidden");
    err_text.innerHTML = "TrustWallet - Please change to the Binance Smart Chain before Minting";
    mintFailed = true;

    endMinting();
  return;
      }
			  
			
		  }
    // All good, lets mint

    var gmcontract = await loadGMContract();

	  var feeToPay = await gmcontract.methods._HeroesNFTMintPrice_Vaykira().call();
	
	 // feeToPay = 0;
	  
	  // Check balance
	  var userBalance = await web3.eth.getBalance(web3accounts[0]);

	 
	  try
		  {
	  if (parseInt(userBalance) < parseInt(feeToPay))
		  {
			   err_panel.classList.remove("hidden");
				  err_text.innerHTML = "Error Minting : Insufficient BNB";
				  mintFailed = true;
				  endMinting(); 
			  
		  }
		  }
	  catch(err)
		  {
			  console.log("Failed to Check Balance");
		  }
	  
	  
	  
	  if (!mintFailed)
		  {
    var mintHero = await gmcontract.methods.mintVayikraHero().send({
      from: web3accounts[0],
		value: feeToPay,
		gas : "900000"
    }).once('transactionHash', function (hash) {

      openHeroMintModal();

    }).once('receipt', function (receipt) {


    }).catch(function (error) {
      err_panel.classList.remove("hidden");
      err_text.innerHTML = "Error Minting : " + error.message;
      mintFailed = true;
closeMint();
    })
	}

    if (!mintFailed) {

		
		await displayNextHero();
		
    }
	  else
		  {
			 endMinting(); 
		  }
	  
    // Fall through to endMinting

  } else {
	  
	   openHelp();
      mintFailed = true;
	  
 endMinting();
  }





}

const displayNextHero = async() => 
{
	
	
	//await displayHeroData(listNFTs.pop());
	
		mint_attribute.innerHTML = "";
	
	
	view_btns.classList.add("hidden");
	owner_approve.classList.add("hidden");
		buyer_btns.classList.add("hidden");
	view_stake.classList.add("hidden");
	mint_text.innerHTML = "Your payment has been accepted and your hero is being securely crafted for you.  Once your Hero is done being randomized they will be sent to your Inventory.  Please check your Inventory in the next several minutes to see your new Hero.<br/>";
	mint_text_loading.innerHTML = "Mint Succesfully Submitted";
	mint_img.classList.remove("item-reveal");
		mint_img_loader.classList.remove("item-fade");
		mint_shroom_video.classList.add("hidden");
	mint_img.classList.add("hidden");
	mint_img_loader.classList.add("hidden");
	mint_view_btns.classList.add("hidden");
	
	mint_attribute.classList.add("hidden");
	mint_attribute_header.classList.add("hidden");
	mint_name.classList.add("hidden");
	mint_text_loading.classList.remove("hidden");
	mint_close.classList.add("hidden");
	
	
	mint_close.classList.remove("hidden");
	
	mintCanClose = true;
	
	
}


const displayNextShroom = async() => 
{
	
	if (listNFTs.length > 0)
		{
	await displayShroomData(listNFTs.pop());
		}
	else
		{
				endMinting();
		}
	
}

const displayShroomData = async (id) => {
	
	
	
	
	mint_attribute.innerHTML = "";
	
		
	
	
		mint_name.innerHTML = "Shroomies #" + id;
		
  $.getJSON(shroomLocation + id, function (data) {
	
	 
	  if (data.animation_url)
		  {
			     mint_shroom_video.classList.remove("hidden");
			  mint_img.classList.add("hidden");
			  mint_img_loader.classList.add("hidden");
			    mint_shroom_video.src = replaceIPFS(data.animation_url);
  				mint_shroom_video.load();
		  }
	  else
		  {
			    mint_img.src = replaceIPFS(data.image);
		  }
	
			  
		  
	 var outPut = "";
	 
    $.each(data.attributes, function (id, result) {
		
			
		
		
		
      outPut = outPut + "<div class='col-sm-4 mb-2'><div class='attribute-entry'><div class='attribute-name'>" + result.trait_type + "</div><div class='attribute-value'>" + result.value + "</div></div></div>";
    });
	  	  

    mint_attribute.innerHTML = outPut;
  });

	
mint_shroom_video.classList.add("hidden");
	mint_img.classList.remove("hidden");
	mint_img_loader.classList.remove("hidden");
 
 

	
mint_text.innerHTML = shroomDesc;
	
	
	mint_img.classList.add("item-reveal");	
		mint_img_loader.classList.add("item-fade");
	mint_attribute.classList.remove("hidden");
	mint_attribute_header.classList.remove("hidden");
		mint_name.classList.remove("hidden");
	mint_text_loading.classList.add("hidden");
	mint_close.classList.remove("hidden");
	
	mintCanClose = true;
}

const displayHeroData = async (id) => {
	
	
	
	mint_attribute.innerHTML = "";
	
	 var herocontract = await loadHeroContract();
		var heroType = await herocontract.methods.getHeroTypeOfToken(id).call();
	var heroURI = 	await herocontract.methods.getHeroInformation(heroType).call();

  $.getJSON(replaceIPFS(heroURI.tokenURI), function (data) {
	
	mint_name.innerHTML = data.name;
	 mint_text.innerHTML = data.description;
   var fileName = data.animation_url;
	  
			   mint_shroom_video.classList.remove("hidden");
			   mint_img.classList.add("hidden");
			   mint_img_loader.classList.add("hidden");
			    mint_shroom_video.src = replaceIPFS(fileName);
  				mint_shroom_video.load();
	
	 var outPut = "";
    $.each(data.attributes, function (id, result) {

      outPut = outPut + "<div class='col-sm-4 mb-2'><div class='attribute-entry'><div class='attribute-name'>" + result.trait_type + "</div><div class='attribute-value'>" + result.value + "</div></div></div>";
    });
	  	  

    mint_attribute.innerHTML = outPut;
  });

	
mint_shroom_video.classList.add("hidden");

 
	
	mint_attribute.classList.remove("hidden");
	mint_attribute_header.classList.remove("hidden");
	mint_name.classList.remove("hidden");
	mint_text_loading.classList.add("hidden");
	mint_close.classList.remove("hidden");
	
	mintCanClose = true;
}

var running = false;
var mintCanClose = true;

const mintShroom_Click = async() => {
	btn_mint_shroom.classList.add("running");
	btn_mint_shroom.disabled = true;
	btn_mint_hero.disabled = true;
	try
		{
	await mintShroom();
		}
	catch(err)
		{
			 err_panel.classList.remove("hidden");
    		err_text.innerHTML = "Error Connecting - " + err.message;
			endMinting();
		}
	
}

const mintHero_Click = async() => {
	btn_mint_hero.classList.add("running");
	
	btn_mint_shroom.disabled = true;
	btn_mint_hero.disabled = true;
	btn_mint_hero2.disabled = true;
	btn_mint_hero3.disabled = true;
	try
		{
	await mintHero();
		}
	catch(err)
		{
			 err_panel.classList.remove("hidden");
    		err_text.innerHTML = "Error Connecting - " + err.message;
			endMinting();
		}
	
}

const mintHero2_Click = async() => {
	btn_mint_hero2.classList.add("running");
	
	btn_mint_shroom.disabled = true;
	btn_mint_hero.disabled = true;
	btn_mint_hero2.disabled = true;
	btn_mint_hero3.disabled = true;
	try
		{
	await mintHero2();
		}
	catch(err)
		{
			 err_panel.classList.remove("hidden");
    		err_text.innerHTML = "Error Connecting - " + err.message;
			endMinting();
		}
	
}

const mintHero3_Click = async() => {
	btn_mint_hero3.classList.add("running");
	
	btn_mint_shroom.disabled = true;
	btn_mint_hero.disabled = true;
	btn_mint_hero2.disabled = true;
	btn_mint_hero3.disabled = true;
	try
		{
	await mintHero3();
		}
	catch(err)
		{
			 err_panel.classList.remove("hidden");
    		err_text.innerHTML = "Error Connecting - " + err.message;
			endMinting();
		}
	
}

function endMinting() {
	  mint_shroom_video.pause();
      
	running = false;
	mintCanClose = true;
	btn_mint_shroom.classList.remove("running");
	btn_mint_hero.classList.remove("running");
	btn_mint_hero2.classList.remove("running");
	btn_mint_hero3.classList.remove("running");
	btn_mint_shroom.disabled = false;
	btn_mint_hero.disabled = false;
	btn_mint_hero2.disabled = false;
	btn_mint_hero3.disabled = false;
}



function openTank()
{
	window.location = "https://tank.daddysharknfts.com";
}
var currentNFTAddress;
var currentGetService;
const openShroomMarket = async() =>
{
	currentNFTAddress = nft_shroom_address;
	currentGetService = webservice_shroom;
	await openMarket();
	filter_main.classList.remove("hidden");
}

const openHeroMarket = async() =>
{
	currentNFTAddress = nft_hero_address;
	currentGetService = webservice_hero;
	
	await openMarket();
	filter_hero_main.classList.remove("hidden");
}

const openMarket = async() => 
{
	header_display.classList.add("hidden");

	filterButton.innerHTML = "Open Filter";
	collapseFilter.classList.add("hidden");
	filter_main.classList.add("hidden");
	filter_hero_main.classList.add("hidden");
	btn_loadMore.classList.add("hidden");
	market_gallery.innerHTML = "";
		market_gallery.classList.remove("hidden");
	initializeLoaderVariables();
	market_loader.classList.remove("hidden");
	
	allMarketItems.splice(0, allMarketItems.length);
	filteredMarketItems.splice(0, filteredMarketItems.length);
	
   const response = await fetch(currentGetService);
	const getItems = await response.json();

	for (const item of getItems) {
   
			
			await createMarketList(item, currentNFTAddress);
					
					
		
			maxEntries++;
			
			
        
  }
	if (currentGetService == webservice_hero)
{
	
	 const response_gate = await fetch(webservice_gate);
	const getItems_gate = await response_gate.json();

	for (const item of getItems_gate) {
   
			
			await createMarketList(item, nft_gate_address);
					
					
		
			maxEntries++;
			
			
        
  }
}
	
	await loadMoreItems();
	market_loader.classList.add("hidden");
	
	
	header_display.classList.remove("hidden");
}

function CheckFilter(attribute, select, category)
{

	if (select.value == "Any")
		{
			return true;
		}
	
		
			
					
					if (attribute == select.value)
						{
							return true;
						}
					else
						{
							return false;
						}
				
		
	
	return false;
}

function compare_low_to_high(a, b) {
  if (parseInt(a.price) < parseInt(b.price)) {
    return -1;
  }
  if (parseInt(a.price) > parseInt(b.price)) {
    return 1;
  }
  return 0;
}

function compare_order(b, a) {
  if (parseInt(a.id) < parseInt(b.id)) {
    return -1;
  }
  if (parseInt(a.id) > parseInt(b.id)) {
    return 1;
  }
  return 0;
}

function compare_high_to_low_rarity(b, a) {
  if (parseInt(a.rarity) < parseInt(b.rarity)) {
    return -1;
  }
  if (parseInt(a.rarity) > parseInt(b.rarity)) {
    return 1;
  }
  return 0;
}

function compare_high_to_low_chomp(b, a) {
  if (parseInt(a.chomp) < parseInt(b.chomp)) {
    return -1;
  }
  if (parseInt(a.chomp) > parseInt(b.chomp)) {
    return 1;
  }
  return 0;
}

function compare_high_to_low_cunning(b, a) {
  if (parseInt(a.cunning) < parseInt(b.cunning)) {
    return -1;
  }
  if (parseInt(a.cunning) > parseInt(b.cunning)) {
    return 1;
  }
  return 0;
}

function compare_high_to_low_fins(b, a) {
  if (parseInt(a.fins) < parseInt(b.fins)) {
    return -1;
  }
  if (parseInt(a.fins) > parseInt(b.fins)) {
    return 1;
  }
  return 0;
}


function compare_high_to_low(b, a) {
  if (parseInt(a.price) < parseInt(b.price)) {
    return -1;
  }
  if (parseInt(a.price) > parseInt(b.price)) {
    return 1;
  }
  return 0;
}

function initializeLoaderVariables()
{
	totalEntries = 0;
	loadedVal = 0;
	maxEntries = 0;
	
	
}

function openFilter()
{
	if (collapseFilter.classList.contains("hidden"))
		{
			collapseFilter.classList.remove("hidden");
			filterButton.innerHTML = "Close Filter";
		}
	else
		{
			collapseFilter.classList.add("hidden");
			filterButton.innerHTML = "Open Filter";
		}
}

function clearSort() {

  location.reload();

}

const renderItems = async () => {
	
	initializeLoaderVariables();
	var divToAdd = "";
  market_gallery.innerHTML = "";

	
  filteredMarketItems.forEach(item => {

    
      if (loadedVal < maxLoadPerPage)
				{
					 divToAdd = divToAdd + renderItem(item);
              		 
					
					loadedVal++;
					totalEntries++;
				}
				else
					{
						
					}
				
					maxEntries++;
    
  });
	market_gallery.innerHTML = "";
	market_gallery.innerHTML = divToAdd;
	
	checkMoreEntries();
}

// Get conditions, filter by loaded data
function filterList() {

	 filteredMarketItems.splice(0,filteredMarketItems.length);
	allMarketItems.forEach(item => {

		if (CheckFilter(item.background,sort_1,"Background") && CheckFilter(item.skin,sort_2,"Skin") && CheckFilter(item.body,sort_3,"Body") && CheckFilter(item.hand,sort_4,"Hand") && CheckFilter(item.wing,sort_5,"Wing") && CheckFilter(item.eyes,sort_6,"Eyes") && CheckFilter(item.head,sort_7,"Head") && CheckFilter(item.mouth,sort_8,"Mouth") && CheckFilter(item.top,sort_9,"Top") && CheckFilter(item.legendary,sort_10,"LEGENDARY"))
		{
			filteredMarketItems.push(item);
		}
		
				
			
  });
	
  if (sort_selector.value == 0) {
    filteredMarketItems.sort(compare_low_to_high);
    renderItems();
  } else if (sort_selector.value == 1) {
    filteredMarketItems.sort(compare_high_to_low);
    renderItems();
  } else if (sort_selector.value == 2) {
    filteredMarketItems.sort(compare_high_to_low_rarity);
    renderItems();

  }
	else if (sort_selector.value == 3) {
    filteredMarketItems.sort(compare_high_to_low_chomp);
    renderItems();

  }
	else if (sort_selector.value == 4) {
    filteredMarketItems.sort(compare_high_to_low_cunning);
    renderItems();

  }
	else if (sort_selector.value == 5) {
    filteredMarketItems.sort(compare_high_to_low_fins);
    renderItems();

  }


}

function CheckRarity(titleName, rarityValue)
{
	
	if (rarityValue == 0)
		{
			return true;
		}
	else if (rarityValue == 1)
		{
			if (titleName == "Talmut" || titleName == "Medusa" || titleName == "Sun Wu Kong" || titleName == "Bahamut")
				{
					return true;
				}
			else
				{
					return false;
				}
		}
	else if (rarityValue == 2)
		{
			if (titleName == "KEO502" || titleName == "Cyberus" )
				{
					return true;
				}
			else
				{
					return false;
				}
		}
	else if (rarityValue == 3)
		{
			if (titleName == "Lucifer" || titleName == "Nyami")
				{
					return true;
				}
			else
				{
					return false;
				}
		}
	else if (rarityValue == 4)
		{
			if (titleName == "Sakura")
				{
					return true;
				}
			else
				{
					return false;
				}
		}
}

// Get conditions, filter by loaded data
function filterHeroList() {

	 filteredMarketItems.splice(0,filteredMarketItems.length);
	allMarketItems.forEach(item => {

		if (CheckRarity(item.title,sort_hero_values.value))
		{
			filteredMarketItems.push(item);
		}
		
				
			
  });
	
  if (sort_hero.value == 0) {
    filteredMarketItems.sort(compare_low_to_high);
    renderItems();
  } else if (sort_hero.value == 1) {
    filteredMarketItems.sort(compare_high_to_low);
    renderItems();
  } else if (sort_hero.value == 2) {
    filteredMarketItems.sort(compare_high_to_low);
    renderItems();

  }
	else if (sort_hero.value == 3) {
     filteredMarketItems.sort(compare_high_to_low);
    renderItems();

  }
	else if (sort_hero.value == 4) {
    filteredMarketItems.sort(compare_high_to_low);
    renderItems();

  }



}

const openStaking = async() =>
{
	stake_disconnected.classList.add("hidden");
	stake_connected.classList.add("hidden");
	staking_gallery.classList.add("hidden");
	staking_gallery.innerHTML = "";
	stake_loader.classList.remove("hidden");
	
	var connectedToWeb3 = await isWeb3Connected();
	if (connectedToWeb3)
				 {
					 
					
					 await loadConnection();
					 var curAccount = web3accounts[0];
					 stake_btn_connect.innerHTML = curAccount;
					 stake_btn_connect.disabled = true;
					 await loadStakingData();
					 stake_loader.classList.add("hidden");
					 staking_gallery.classList.remove("hidden");
					 stake_connected.classList.remove("hidden");
				
					 
				 }
			 else
				 {
        
					 stake_btn_connect.disabled = false;
					 stake_btn_connect.innerHTML = "Click to Connect";
					 stake_disconnected.classList.remove("hidden");
					 stake_loader.classList.add("hidden");

			
				 }
}


const openMyNFTs = async() => 
{
	
	
	inventory_disconnected.classList.add("hidden");
	inventory_connected.classList.add("hidden");
	
	inventory_shroom_gallery.classList.add("hidden");
	inventory_hero_gallery.classList.add("hidden");
	inventory_shroom_gallery.innerHTML = "";
	inventory_hero_gallery.innerHTML = "";
	inventory_loader.classList.remove("hidden");

	
	var connectedToWeb3 = await isWeb3Connected();
	if (connectedToWeb3)
				 {
					 
					
					 await loadConnection();
					 var curAccount = web3accounts[0];
					 inventory_btn_connect.innerHTML = curAccount;
					 inventory_btn_connect.disabled = true;
					 await loadMyNFTs();
					 inventory_loader.classList.add("hidden");
					 if (inventory_shroom_gallery.classList.contains("hidden"))
						 {
							 inventory_hero_gallery.classList.remove("hidden");
						 }
					 
					 inventory_connected.classList.remove("hidden");
				
					 
				 }
			 else
				 {
        
					 inventory_btn_connect.disabled = false;
					 inventory_btn_connect.innerHTML = "Click to Connect";
					 inventory_disconnected.classList.remove("hidden");
					 inventory_loader.classList.add("hidden");

			
				 }
	
	
	
}

const  loadStakingData= async() =>
{
	var stakeContract = await loadStakeContract();
	
	var stakedNFTs = await stakeContract.methods.getTotalStakedNFTs(web3accounts[0]).call();
	var totalValue = await stakeContract.methods.getTotalStakedValue(web3accounts[0]).call();
	var nextDate = await stakeContract.methods.getNextEligibleDate(web3accounts[0]).call();
	var totalClaimeable = await stakeContract.methods.getTotalClaimableValue(web3accounts[0]).call();
	var claimToDate = await stakeContract.methods.getTotalClaimedLifetime(web3accounts[0]).call();
	
	
	const dateObject = new Date(parseInt(nextDate) * 1000);

	const humanDateFormat = dateObject.toLocaleString();
	var isValidClaim = false;
	
	if (totalClaimeable != "0")
		{
			isValidClaim = true;
		}
	
	totalValueNotClaimable = parseNumericValue(totalValue) - parseNumericValue(totalClaimeable);
	totalClaimeable = parseNumericValue(totalClaimeable);
	totalValue = parseNumericValue(totalValue);
	claimToDate = parseNumericValue(claimToDate);
	
	
	stake_val_heroes.innerHTML = stakedNFTs + " / 20";
	stake_val_accumulated.innerHTML = totalValueNotClaimable + " LLG";
	stake_val_claimed.innerHTML = claimToDate + " LLG";
	stake_val_available.innerHTML = totalClaimeable + " LLG";
	
	if (stakedNFTs == "0")
		{
			stake_val_next.innerHTML = "";
			stake_claim.disabled = true;
		}
	else
		{			
			if (isValidClaim)
				{
					stake_claim.disabled = false;
					stake_val_next.innerHTML = "";
				}
			else
				{
					stake_val_next.innerHTML = "Next Claim Date - " + humanDateFormat;
					stake_claim.disabled = true;
				}
			
		}
	
}

function parseNumericValue(val)
{
	var returnVal = Web3.utils.fromWei(val, 'nano');
	
	return returnVal;
	
}




const loadMyNFTs = async() =>
{
	 allPortfolioItems.splice(0, allPortfolioItems.length);
	allShroomItems.splice(0,allShroomItems.length);
	
	var bsc_nft_shroom = await loadShroomContract();
	var bsc_nft_hero = await loadHeroContract();
	var bsc_nft_gate = await loadGateContract();
	var marketplaceContract = await loadMarketContract();

	 var allItems = await bsc_nft_hero.methods.balanceOf(web3accounts[0]).call();
	
	if (allItems > 0) {
    for (x = 0; x < allItems; x++) {
      var tokenID = await bsc_nft_hero.methods.tokenOfOwnerByIndex(web3accounts[0], x).call();

	//	var listId = await marketplaceContract.methods.activeListingID(nft_address, tokenID).call();
	
		
	var heroType = await bsc_nft_hero.methods.getHeroTypeOfToken(tokenID).call();
	var heroURI = 	await bsc_nft_hero.methods.getHeroInformation(heroType).call();

		var heroName = "";
		var heroImg = "";
		
  await $.getJSON(replaceIPFS(heroURI.tokenURI), function (data) {
	
	heroName = data.name;
	 heroImg = replaceIPFS(data.image);
  				
  });
		
		
      var newEntry = {
        contractAddress: nft_hero_address,
        tokenId: tokenID,
        tokenURI: replaceIPFS(heroURI.tokenURI),
        img: heroImg,
        title: heroName,
        description: "",
		  forSale: "0"
      };

      allPortfolioItems.push(newEntry);
    }
  }
	
	allItems = await bsc_nft_gate.methods.balanceOf(web3accounts[0]).call();
	
	if (allItems > 0) {
    for (x = 0; x < allItems; x++) {
      var tokenID = await bsc_nft_gate.methods.tokenOfOwnerByIndex(web3accounts[0], x).call();

	//	var listId = await marketplaceContract.methods.activeListingID(nft_address, tokenID).call();
	
		
	var heroType = await bsc_nft_gate.methods.getHeroTypeOfToken(tokenID).call();
	var heroURI = 	await bsc_nft_gate.methods.getHeroInformation(heroType).call();

		var heroName = "";
		var heroImg = "";
		
  await $.getJSON(replaceIPFS(heroURI.tokenURI), function (data) {
	
	heroName = data.name;
	 heroImg = replaceIPFS(data.image);
  				
  });
		
		
      var newEntry = {
        contractAddress: nft_gate_address,
        tokenId: tokenID,
        tokenURI: replaceIPFS(heroURI.tokenURI),
        img: heroImg,
        title: heroName,
        description: "",
		  forSale: "0"
      };

      allPortfolioItems.push(newEntry);
    }
  }
	
  allItems = await bsc_nft_shroom.methods.balanceOf(web3accounts[0]).call();

	
  if (allItems > 0) {
    for (x = 0; x < allItems; x++) {
      var tokenID = await bsc_nft_shroom.methods.tokenOfOwnerByIndex(web3accounts[0], x).call();

	//	var listId = await marketplaceContract.methods.activeListingID(nft_address, tokenID).call();
		
   
		
      var newEntry = {
        contractAddress: nft_shroom_address,
        tokenId: tokenID,
        tokenURI: shroomLocation + tokenID,
        img: determineShroomImg(tokenID),
        title: "Shroomies #" + (parseInt(tokenID)),
        description: "",
		  forSale: "0"
      };

      allShroomItems.push(newEntry);
    }
  }
	
	

  var portfolioDisplay = "";

  allPortfolioItems.forEach(item => {

    portfolioDisplay = portfolioDisplay + renderPortfolioItem(item);


  });
	
	var portfolioShroomDisplay = "";

  allShroomItems.forEach(item => {

    portfolioShroomDisplay = portfolioShroomDisplay + renderPortfolioItem(item);


  });

 
	inventory_hero_gallery.innerHTML = portfolioDisplay;
	inventory_shroom_gallery.innerHTML = portfolioShroomDisplay;
	
}

function determineShroomImg(tokenID)
{
	if (tokenID == "0" || tokenID == "1011")
		{
			return shroomVid1;
		}
	else if (tokenID == "1" || tokenID == "2991")
		{
			return shroomVid2;
		}
	else if (tokenID == "2" || tokenID == "4981")
		{
			return shroomVid3;
		}
	else if (tokenID == "3" || tokenID == "3300")
		{
			return shroomVid4;
		}
	else
		{
			return shroomImg + tokenID + ".png";
		}
}

function renderPortfolioItem(item) {


  var itemForSale;
	var isListed = "";
	var isStaked = "";
	var hrefToAdd = "";
	
	var graphicDisplay;
	
		classList = "";
	
	if (item.contractAddress == nft_hero_address)
		{
		classList = " stakeable";
		}
			graphicDisplay = "<img src='" + item.img + "' class='list_img "+ classList + "''>";
	
		

	if (item.forSale > 0)
		{
  isListed = "<div class='img_listed'><div class='img_list_content'>Listed</div></div>";
			
		}
	else
		{
			
		}
	
	

  // Get item data from token address
  var num = item.price;
  num = num / 100;
  num = num.toFixed(2);


	 itemForSale = `<div class="col-xl-3 col-lg-4 col-md-6 mb-4 shark_selector" onClick="openViewModal('` + item.contractAddress + `',` + item.tokenId + `)"">`+ graphicDisplay + `<div class="list_display">` + item.title + `</div>` + isListed + isStaked + `</div>`;
	
 /* itemForSale = "<div class='col-12 col-sm-6 col-lg-4 main_card'><a href='" + hrefToAdd + "' class='card__cover'><img class='card_image' src='" + item.img + "' alt=''>" + isListed + "</a><h3 class='card__title'><a href='" + hrefToAdd + "' name='title'>" + item.title + "</a></h3></button></div></div>";
*/

  return itemForSale;

}



// On DOM Loaded
const initialize = () => {

  // checkConnectStatus();
	
	const params = new URLSearchParams(window.location.search)

	if (params.has("shroomId"))
		{
			//loadID(params.get('id'));		
		}
	else if (params.has("heroId"))
		{
			//
		}
	
	loadData();
	 loadSearchCriteria();

	
	
	

}

const loadSearchCriteria = async() => {
	
	
	
	
	var index = 1;
	
	for(var x = 0; x < percent_json.length;x++)
		{
			var sort_name = document.getElementById("sort_" + index + "_name");
			var sort_values = document.getElementById("sort_" + index + "_values");
			
			sort_name.innerHTML = percent_json[x].name;
			
			
					for (var y = 0; y < percent_json[x].attributes.length; y++)
						{
							
							  var opt = document.createElement("option");
							   opt.value= percent_json[x].attributes[y].name;
							   opt.innerHTML = percent_json[x].attributes[y].name; // whatever property it has

							   // then append it to the select element
							   sort_values.appendChild(opt);
							   
						}
				
			index++;

		}
	
	
	

}



const checkConnectStatus = async () => {
	await assignWeb3Portal();
	
}


function openHeroFilter()
{
	if (collapseHeroFilter.classList.contains("hidden"))
		{
			collapseHeroFilter.classList.remove("hidden");
			filterHeroButton.innerHTML = "Close Filter";
		}
	else
		{
			collapseHeroFilter.classList.add("hidden");
			filterHeroButton.innerHTML = "Open Filter";
		}
}

const addToList = async (item) => {
  
 

  


	
var renderedResult = await renderItem(item);
return renderedResult;

		
	

}

const loadMoreItems = async() => {
	

	var beginVal = totalEntries;
	var endVal = beginVal + maxLoadPerPage;
	var addDIV = market_gallery.innerHTML;
	
	if (endVal > filteredMarketItems.length )
		{
			endVal = filteredMarketItems.length ;
		}
	
	while(beginVal < endVal)
		{
			
			
			addDIV = addDIV + await addToList(filteredMarketItems[beginVal]);
			totalEntries++;
			beginVal++;
		}
	
	market_gallery.innerHTML = addDIV;
	
	checkMoreEntries();
}


const createMarketList = async(item, address) => {
  


 
  var newEntry = {
    tokenId: item.id,
    tokenAddress: address,
    img: item.image,
    title: item.nft_name,
    description: "",
    seller: item.seller,
    price: item.price,
    id:  item.listed,
	  background: item.background,
	  skin: item.skin,
	  body: item.body,
	  hand: item.hand,
	  wing: item.wing,
	  eyes: item.eyes,
	  head: item.head,
	  mouth: item.mouth,
	  top: item.top,
	  legendary: item.legendary
	  
	  
  };



	
   newEntry.img = await getIPFSImageURL(newEntry.img);
    
			
			allMarketItems.push(newEntry);
			filteredMarketItems.push(newEntry);
		

}



var viewID = -1;
var selectedaddress;
var selectedId;



const openViewModal = async (tokenaddress, id) => {
	
	
	
	updateNFTState(tokenaddress, id);
	
	
	
	resetmodal();
	
	mint_img.classList.remove("hidden");
	modalmint.show();
	
	var uri;
	if (tokenaddress == nft_hero_address)
		{
			
				var herocontract = await loadBSCHeroContract();
			var heroType = await herocontract.methods.getHeroTypeOfToken(id).call();
			var heroURI = 	await herocontract.methods.getHeroInformation(heroType).call();
			
			uri = heroURI.tokenURI;
		}
	else if (tokenaddress == nft_gate_address)
		{
			
				var herocontract = await loadBSCGateContract();
			var heroType = await herocontract.methods.getHeroTypeOfToken(id).call();
			var heroURI = 	await herocontract.methods.getHeroInformation(heroType).call();
			
			uri = heroURI.tokenURI;
		}
	else
		{
			
			uri = shroomLocation + id;
		}
	
	selectedaddress = tokenaddress;
	selectedId = id;	
	
	var fileName = "";
	var animationName;

	await $.getJSON(replaceIPFS(uri), function (data) {
		
		mint_name.innerHTML = data.name;
		fileName = data.image;
		
		if (data.animation_url)
			{
				animationName = data.animation_url;
			}
		

	
		
    var outPut = "";
	
		
    $.each(data.attributes, function (id, result) {
		if (result.trait_type.trim() != "null")
			{
		
				rarity = getRarityValue(result.trait_type, result.value);
				
				 var percentDisplay = "";
				
if (parseInt(rarity) <= legendaryPercent)
	{
		
		percentDisplay = "<span class='att-val-legendary'>Legendary</span>";
	}
		else if (parseInt(rarity) <= epicPercent)
	{
		percentDisplay = "<span class='att-val-epic'>Epic</span>";
		
	}
		else if (parseInt(rarity) <= rarePercent)
	{
		
		percentDisplay = "<span class='att-val-rare'>Rare</span>";
	}
		else
			{
				percentDisplay = "<span class='att-val-common'>Common</span>";
			}
				
				if (rarity)
					{
		var num = parseFloat(rarity);
				num = num.toFixed(2);
      outPut = outPut + "<div class='col-sm-4 mb-2'><div class='attribute-entry'><div class='attribute-name'>" + result.trait_type + "</div><div class='attribute-value'>" + result.value + "</div><div class='attribute-rarity'>" + percentDisplay + "</div></div></div>";
					}
				else
					{
						var num = parseFloat(rarity);
				num = num.toFixed(2);
      outPut = outPut + "<div class='col-sm-4 mb-2'><div class='attribute-entry'><div class='attribute-name'>" + result.trait_type + "</div><div class='attribute-value'>" + result.value + "</div></div></div>";
					}
		
   
			}
    });
		

		
		
		
		
    mint_attribute.innerHTML = outPut;
  });
	
	
	
	if (animationName)
		{
			
			   mint_shroom_video.classList.remove("hidden");
			   mint_img.classList.add("hidden");
			   mint_img_loader.classList.add("hidden");
			    mint_shroom_video.src = replaceIPFS(animationName);
  				mint_shroom_video.load();
		}
	else		
		{
			mint_img.src = await getIPFSImageURL(fileName);
			 mint_shroom_video.classList.add("hidden");
			   mint_img.classList.remove("hidden");
			   mint_img_loader.classList.add("hidden");
			  
		}
	
	checkOwnerState(tokenaddress, id);
	
	
	
}

const determineStakeStatus = async(address, id) => 
{
	
	setButtonLoading(btn_stake, false);
	if (address == nft_hero_address)
		{
		
		
	
		var stakeContract = await loadStakeContract();
				
	var staked = await stakeContract.methods.isStaked(id).call();
			
			if(staked == "0")
				{
					
				view_stake_btn_txt.innerHTML = "Stake";
		txt_stake.innerHTML = "Click to Stake your Hero";
				}
			else
				{
					view_stake_btn_txt.innerHTML = "Unstake";
		txt_stake.innerHTML = "Visit the Stake Page to view Rewards";
				}
			
		
			
		view_stake.classList.remove("hidden");
			
	}
	
}

const checkOwnerState = async(address, id)=> {
	
	var nftContract;
	var marketplaceContract = await loadBSCMarketContract();
	
	  if (address == nft_shroom_address)
		  {
			    nftContract = await loadBSCShroomContract();
		  }
	  else  if (address == nft_hero_address)	  
	  {
		  nftContract = await loadBSCHeroContract();
	  }
	else
		{
			nftContract = await loadBSCGateContract();
		}

	var isowner = false;
	var ownerOf = await nftContract.methods.ownerOf(id).call();

	try
		{
	if (ownerOf.toLowerCase() == web3accounts[0].toLowerCase())
		{
			isowner = true;
		}
		}
	catch(err)
		{
			
		}

	if (isowner)
		{
			determineStakeStatus(address, id);
			var listId = 0;
			try
				{
				
			var listId = await marketplaceContract.methods.activeListingID(address, id).call();
				}
			catch(err)
				{
					console.log(err);
				}
			
			// CURRENTLY FOR SALE
			if (listId > 0)
				{
					owner_cancel.classList.remove("hidden");
				}
			else
				{
					var isApproval = await nftContract.methods.getApproved(id).call();

							if (isApproval == marketplace_address)
							   {
								     
	
								   		owner_sell.classList.remove("hidden");
								   

							   }
							 else
								 {
									owner_approve.classList.remove("hidden");
								 }
				}
				
			
			
			
			mint_view_btns.classList.remove("hidden");
			
		}
	else		
		{
			var listId = await marketplaceContract.methods.activeListingID(address, id).call();
			
			
			    var saleItem = await marketplaceContract.methods.itemsForSale(listId).call();
				var itemPrice = saleItem.askingPrice;
				var num = Web3.utils.fromWei(itemPrice);
          		var num = parseFloat(num).toFixed(2);
			
			// CURRENTLY FOR SALE
			if (listId > 0)
				{
					
					buyer_btns.classList.remove("hidden");
					buy_btn_txt.innerText =  "Buy - " + num + " BNB";
				}
			else
				{
					
				}
			mint_view_btns.classList.add("hidden");
		}
	
	
}

const updateItemStatus = async(id) => {
	nftMinListing =  await marketplaceContract.methods._MinimumListingPrice().call();
	 var numList = Web3.utils.fromWei(nftMinListing);
    numList = parseFloat(numList).toFixed(2);
	list_minimum_val.innerHTML = numList + " BNB Minimum Price";
 nftFeeListing = await marketplaceContract.methods._ListingFee().call(); 
	sale_loading.classList.remove("hidden");
	var listId = await marketplaceContract.methods.activeListingID(nft_address, id).call();
     if (listId > 0)
		 {
			 // Object is for sale
			 
			    var saleItem = await marketplaceContract.methods.itemsForSale(listId).call();
				var itemPrice = saleItem.askingPrice;
				var num = Web3.utils.fromWei(itemPrice);
          		var num = parseFloat(num).toFixed(2);
			 var connectedToWeb3 = await isWeb3Connected();
	
			if (connectedToWeb3)
				 {
					 await loadConnection();
					 var curAccount = web3accounts[0];
					 
					 if (curAccount.toLowerCase() == saleItem.seller.toLowerCase())
						 {
							 sale_loading.classList.add("hidden");
							 sale_cancel.classList.remove("hidden");
						 }
					 else
						 {
							 sale_loading.classList.add("hidden");
							 sale_buy.classList.remove("hidden");
				 sale_buy_text.innerText = "Buy - " + num + " BNB";
						 }
					 
				 }
			 else
				 {
        
				
			 sale_loading.classList.add("hidden");
				 sale_buy.classList.remove("hidden");
				 sale_buy_text.innerText = "Buy - " + num + " BNB";
				 }
			
		 }
	else
		{
			var ownerAdd = await nftContract.methods.ownerOf(id).call();
			var connectedToWeb3 = await isWeb3Connected();
	
			if (connectedToWeb3)
				 {
					 await loadConnection();
					 var curAccount = web3accounts[0];
					
					 if (curAccount.toLowerCase() == ownerAdd.toLowerCase())						 
						 {
							 
							 var isApproval = await nftContract.methods.getApproved(id).call();

							if (isApproval == marketplace_address)
							   {
								     
	
								   sale_loading.classList.add("hidden");
							 sale_list.classList.remove("hidden");
								   

							   }
							 else
								 {
									 sale_loading.classList.add("hidden");
							 sale_approve.classList.remove("hidden");
								 }
							 
							 
						 }
					 else
						 {
							 sale_loading.classList.add("hidden");
							sale_notforsale.classList.remove("hidden");
						 }
					 
				 }
			 else
				 {
        
				
			 sale_loading.classList.add("hidden");
				 sale_notforsale.classList.remove("hidden");
				
				 }
			
		}
	
}




function getRarityValue(type, value)
{
	
	for(var x = 0; x < percent_json.length;x++)
		{
			
			if (percent_json[x].name == type)
				{
					for (var y = 0; y < percent_json[x].attributes.length; y++)
						{
							
							if (percent_json[x].attributes[y].name == value)
								{
									return percent_json[x].attributes[y].rarity;
								}
						}
				}

		}
}


	


const loadWeb3Main = async () => {

  try {
    await assignWeb3();
  } catch (error) {

  }


}


function closeError(event) {
  err_panel.classList.add("hidden");
  err_text.innerHTML = "";
  event.preventDefault();
}

const checkMoreEntries = async() => {
	if (totalEntries < maxEntries)
		{
			btn_loadMore.classList.remove("hidden");
		}
	else
		{
			btn_loadMore.classList.add("hidden");
		}
}

var listSharks = [];
// Sleep helper for async
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function resetmintmodal() {
	
	setButtonLoading(approve_btn, false);
	setButtonLoading(cancel_btn, false);
	setButtonLoading(buy_btn, false);
	setButtonLoading(sell_btn, false);
	setButtonLoading(transfer_button, false);
	view_btns.classList.add("hidden");
	owner_approve.classList.add("hidden");
	buyer_btns.classList.add("hidden");
	view_stake.classList.add("hidden");
mint_text.innerHTML = "A unique Shroomy is finding its way to you, please be patient while the blockchain assembles him for you.";
mint_img.src = "assets/img/blurry.jpg";
	mint_img.classList.remove("item-reveal");
		mint_img_loader.classList.remove("item-fade");
	mint_attribute.classList.add("hidden");
	mint_attribute_header.classList.add("hidden");
		mint_name.classList.add("hidden");
	mint_text_loading.classList.remove("hidden");
	mint_close.classList.add("hidden");
	mint_shroom_video.classList.add("hidden");
	mint_img.classList.remove("hidden");
	mint_img_loader.classList.remove("hidden");
mint_view_btns.classList.add("hidden");

}

function resetmodal() {
	setButtonLoading(approve_btn, false);
	setButtonLoading(cancel_btn, false);
	setButtonLoading(buy_btn, false);
	setButtonLoading(sell_btn, false);
	setButtonLoading(transfer_button, false);
	view_btns.classList.remove("hidden");
	owner_approve.classList.add("hidden");
	buyer_btns.classList.add("hidden");
	owner_cancel.classList.add("hidden");
	owner_sell.classList.add("hidden");
	view_stake.classList.add("hidden");
	mint_text.innerHTML = "";
	mint_img.src = "assets/img/blurry.jpg";
	mint_attribute.innerHTML = "";
	mint_img.classList.add("item-reveal");
	mint_img_loader.classList.remove("item-fade");
	mint_attribute.classList.remove("hidden");
	mint_attribute_header.classList.remove("hidden");
	mint_name.classList.remove("hidden");
	mint_name.innerHTML = "";
	mint_text_loading.classList.add("hidden");
	mint_close.classList.add("hidden");
	
	
	mint_shroom_video.classList.add("hidden");
	mint_img.classList.add("hidden");
	mint_img_loader.classList.add("hidden");


}

function setApprovalSucceeded() {
	view_btns.classList.add("hidden");
		buyer_btns.classList.add("hidden");
	mint_text.innerHTML = "Your tokens have been approved for transfer, please authorize your Hero Purchase.";
	mint_text_loading.innerHTML = "Tokens Approved";
	mint_img.classList.remove("item-reveal");
		mint_img_loader.classList.remove("item-fade");
		mint_shroom_video.classList.add("hidden");
	mint_img.classList.add("hidden");
	mint_img_loader.classList.add("hidden");
	
	
	mint_attribute.classList.add("hidden");
	mint_attribute_header.classList.add("hidden");
	mint_name.classList.add("hidden");
	mint_text_loading.classList.remove("hidden");
	mint_close.classList.add("hidden");
	
}

function transferNFT()
{
	transferButtonClicked();
}

var isTransferring = false;
const transferButtonClicked = async () => {
	
	if (isTransferring == false)
		{
	isTransferring = true;
	 await loadWeb3Main();

  if (web3) {

    if (!window.web3.currentProvider.isTrust)
		{

    chainid = await web3.eth.getChainId();

    if (DEBUG) {
      if (chainid != 97) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x61'
          }],
        });


      }

    } else {
      if (chainid != 56) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x38'
          }],
        });


      }
    }

		}
	   else
		  {
			  chainid = await web3.eth.getChainId();
			  
			  if (chainid != 56) {
        
 err_panel.classList.remove("hidden");
    err_text.innerHTML = "TrustWallet - Please change to the Binance Smart Chain before Transfering";
				  isTransferring = false;
				  transfer_button.classList.remove("running");
				  transferID = 1;
				  closeTransfer();
 return;

      }
			  
			 
		  }
	  
	  
    // All good, lets claimrewards
var nftContract;
	  if (selectedaddress == nft_shroom_address)
		  {
			    nftContract = await loadShroomContract();
		  }
	  else if (selectedaddress == nft_hero_address) {
		  nftContract = await loadHeroContract();
	  }
	  else
		  {
			  nftContract = await loadGateContract();
		  }

  

	var to;
    var tokenid;
	  
	  to = transfer_address.value;
transferID = selectedId;
	  
	  try
		  {
    var transferNFT = await nftContract.methods.safeTransferFrom(web3accounts[0], to, transferID).send({
      from: web3accounts[0]
    }).once('transactionHash', function (hash) {


      transfer_button.classList.add("running");
    }).once('receipt', function (receipt) {

      transfer_button.classList.remove("running");
    }).catch(function (error) {
      err_panel.classList.remove("hidden");
      err_text.innerHTML = "Error Transferring : " + error.message;
isTransferring = false;
		transfer_button.classList.remove("running");
		transferID = -1;
				  closeTransfer();

    })
	
	}
	  catch(err)
		  {
			   err_panel.classList.remove("hidden");
    err_text.innerHTML = "Error Transferring - " + err;
				  isTransferring = false;
				  transfer_button.classList.remove("running");
				  transferID = -1;
				  closeTransfer();
		  }

	   isTransferring = false;
				  transfer_button.classList.remove("running");
				  transferID = -1;
				  closeTransfer();
	  

  }
			
		}
}

function closeTransfer()
{
	isTransferring = false;
	modalmint.hide();
	activatePane('inventory');
}



function resetmintmodal_approval() {
	view_btns.classList.add("hidden");
	owner_approve.classList.add("hidden");
		buyer_btns.classList.add("hidden");
	view_stake.classList.add("hidden");
	mint_text.innerHTML = "Your token approval is pending.  Once your tokens have been approved to be transferred you will be able to purchase your Hero.";
	mint_text_loading.innerHTML = "Approval Pending";
	mint_img.classList.remove("item-reveal");
		mint_img_loader.classList.remove("item-fade");
		mint_shroom_video.classList.add("hidden");
	mint_img.classList.add("hidden");
	mint_img_loader.classList.add("hidden");
	mint_view_btns.classList.add("hidden");
	
	mint_attribute.classList.add("hidden");
	mint_attribute_header.classList.add("hidden");
	mint_name.classList.add("hidden");
	mint_text_loading.classList.remove("hidden");
	mint_close.classList.add("hidden");



}



function resetmintmodal_hero() {
	
	owner_approve.classList.add("hidden");
		buyer_btns.classList.add("hidden");
view_stake.classList.add("hidden");
	mint_view_btns.classList.add("hidden");
mint_text.innerHTML = "Your Hero is approaching, please be patient while the blockchain prepares it for battle.";
	mint_text_loading.innerHTML = "Minting in Progress";
	mint_img.classList.remove("item-reveal");
		mint_img_loader.classList.remove("item-fade");
		mint_shroom_video.classList.add("hidden");
	mint_img.classList.add("hidden");
	mint_img_loader.classList.add("hidden");
	
	
	mint_attribute.classList.add("hidden");
	mint_attribute_header.classList.add("hidden");
	mint_name.classList.add("hidden");
	mint_text_loading.classList.remove("hidden");
	mint_close.classList.add("hidden");



}

function closeMint()
{
	endMinting();
	modalmint.hide();
}

function closeMintToInventory()
{
	endMinting();
	modalmint.hide();
	activatePane('inventory');
}

function closeMint()
{
	endMinting();
	modalmint.hide();
}
const loadBSCGMContract = async () => {

  return new web3BSC.eth.Contract(gm_abi, gm_address);

}

const loadStakeContract = async () => {
	return new web3.eth.Contract(stake_abi, stake_address);
}

const loadBSCShroomContract = async () => {

  return new web3BSC.eth.Contract(nft_shroom_abi, nft_shroom_address);

}

const loadMarketContract = async () => {

  return new web3.eth.Contract(marketplace_abi, marketplace_address);

}

const loadBSCMarketContract = async () => {

  return new web3BSC.eth.Contract(marketplace_abi, marketplace_address);

}

const loadHeroContract = async () => {

  return new web3.eth.Contract(nft_hero_abi, nft_hero_address);

}

const loadGateContract = async () => {

  return new web3.eth.Contract(nft_gate_abi, nft_gate_address);

}


const loadBSCHeroContract = async () => {

  return new web3BSC.eth.Contract(nft_hero_abi, nft_hero_address);

}

const loadBSCGateContract = async () => {

  return new web3BSC.eth.Contract(nft_gate_abi, nft_gate_address);

}

const loadShroomContract = async () => {

  return new web3.eth.Contract(nft_shroom_abi, nft_shroom_address);

}


const loadGMContract = async () => {

  return new web3.eth.Contract(gm_abi, gm_address);

}

const loadLLGContract = async () => {

  return new web3.eth.Contract(token_abi, token_address);

}



/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function openHelp() {
	modalhelp.show();

  event.preventDefault();
  return false;
}

function closeModal() {
	
	if (running == false)
		{
	modal.hide();

		}

}


/////////////////////////////////
// RENDER NODES
///////////////////////////////

function renderItem(item) {
	
  var itemForSale = "";
 var rarityName = "Common";
	if (!item.rarity)
		{
			rarityName = "";
		}
		if (item.rarity == 2)
			{
				rarityName = "Uncommon";
			}
		if (item.rarity == 3)
			{
				rarityName = "Rare";
			}
		if (item.rarity == 4)
			{
				rarityName = "Epic";
			}
		if (item.rarity == 5)
			{
				rarityName = "Legendary";
			}

  // Get item data from token address
  var num = item.price;
	if (item.price == "")
	{
		item.price = "0";
	}
	classList = "";
	
	if (item.tokenAddress == nft_hero_address)
		{
		classList = " stakeable";
		}
  num = Web3.utils.fromWei(item.price);
  num = parseFloat(num).toFixed(2);
var author = item.seller;
	  author = item.seller.substring(0,15) + "...";

  itemForSale = `<div class="col-xl-3 col-lg-4 col-md-6 mb-4 shark_selector" onClick="openViewModal('` + item.tokenAddress + `',` + item.tokenId + `);"><img class="list_img ` + classList + `" src="` + item.img + `" alt=""><h3 class="list_display">` + item.title + `</h3><div class="list_details"><div class="list_price"><span>` + num + ` BNB</span></div><div class="list_rarity">` + rarityName +`</div></div></div>`;
  

return itemForSale;
}

const beginBuyItem = async () => {
  await buyItem();
}

const beginStakeNFTModal = async () => {
	
	
	var stakeContract = await loadStakeContract();

	var staked = await stakeContract.methods.isStaked(selectedId).call();
	var setStake = true;
	if (staked == "0")
		{
			 await stakeNFT();
		}
	else
		{
			stakeModal.show();
		}
  
}

const beginStakeNFT = async () => {
	
	 stakeModal.hide();
  await stakeNFT();
}



const beginApproveItem = async () => {
  await approveItem();
}

// Wrap Cancel Sale TX
const beginSaleCancel = async () => {
  await cancelSale();
}

const beginListItem = async () => {
  
	
	
postSaleItem(sell_price.value);
	
}

function setButtonLoading(button, status)
{
	if (status == true)
		{
			button.classList.add('running');
			button.disabled = true;
		}
	else
		{
			button.classList.remove('running');
			button.disabled = false;
		}
}


async function approveItem() {
	running = true;
  setButtonLoading(approve_btn, true);


var nftContract;
	  if (selectedaddress == nft_shroom_address)
		  {
			    nftContract = await loadShroomContract();
		  }
	  else if (selectedaddress == nft_hero_address) {
		  nftContract = await loadHeroContract();
	  }
	else
		{
			 nftContract = await loadGateContract();
		}
	
	var marketplaceContract = await loadMarketContract();
	
  await nftContract.methods.approve(marketplace_address, selectedId).send({
    from: web3accounts[0]
  }).once('transactionHash', function (hash) {




  }).once('receipt', function (receipt) {
setButtonLoading(approve_btn, false);
	 running = false;
	  owner_approve.classList.add("hidden");
	  owner_sell.classList.remove("hidden");
	


  }).catch(err =>
		   location.reload());
		 


}

async function cancelSale() {
	running = true;
  setButtonLoading(cancel_btn, true);
  var nftContract;
	  if (selectedaddress == nft_shroom_address)
		  {
			    nftContract = await loadShroomContract();
		  }
	  else if (selectedaddress == nft_hero_address) {
		  nftContract = await loadHeroContract();
	  }
	else
		{
			nftContract = await loadGateContract();
		}
	
	var marketplaceContract = await loadMarketContract();
	var listId = await marketplaceContract.methods.activeListingID(selectedaddress, selectedId).call();

  await marketplaceContract.methods.cancelSale(listId).send({
    from: web3accounts[0]
  }).once('transactionHash', function (hash) {

  
	


  }).once('receipt', function (receipt) {
	   setButtonLoading(cancel_btn, false);
updateNFTState(selectedaddress, selectedId);
	  running = false;
    modalmint.hide();
	  activatePane('inventory');
	  
	  

  }).catch(err => location.reload())

}


const web3Connect = async() =>
{
	await loadWeb3Main();
	
	
	if (web3) {

   if (!window.web3.currentProvider.isTrust)
	{
    chainid = await web3.eth.getChainId();

    if (DEBUG) {
      if (chainid != 97) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x61'
          }],
        });


      }

    } else {
      if (chainid != 56) {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x38'
          }],
        });


      }
    }
		
	}
	  else
		  {
			  chainid = await web3.eth.getChainId();
			  
			  if (chainid != 56) {
        
 err_panel.classList.remove("hidden");
    err_text.innerHTML = "TrustWallet - Please change to the Binance Smart Chain before Connecting";


   
  return;
      }
		  }
		
	}
	else
		{
		
		}
	
  
}


const updateNFTState = async (address, id) => 
{

	try
		{
	var marketplaceContract = await loadMarketContract();
	
	var listId = await marketplaceContract.methods.activeListingID(address, id).call();
	
	if (listId != 0)
		{
	var saleItem = await marketplaceContract.methods.itemsForSale(listId).call();


	if (address == nft_shroom_address)
		{
	await updateShroomNFT(id, listId, saleItem.askingPrice, saleItem.seller, "1");
		}
			else if (address == nft_hero_address)
				{
					await updateHeroNFT(id, listId, saleItem.askingPrice, saleItem.seller, "1");
				}
			else
				{
					await updateGateNFT(id, listId, saleItem.askingPrice, saleItem.seller, "1");
				}
		}
	else
		{
			if (address == nft_shroom_address)
		{
			await updateShroomNFT(id, listId, "", "", "0");
		}
			else if (address == nft_hero_address)
				{
					await updateHeroNFT(id, listId, "", "", "0");
				}
			else
				{
					await updateGateNFT(id, listId, "", "", "0");
				}
		}
		}
	catch(err)
		{
			//console.log(err);
		}
	
}

const updateShroomNFT = async (id, saleId, price, seller, forsale) => {
var totalString = webservice_shroom + "/update?id=" + String(id) + "&listing=" + String(saleId) + "&price=" + String(price) + "&seller=" + String(seller) + "&forsale=" + String(forsale);
	
	if (DEBUG == false)
	{
const response = fetch(totalString, {
		method: 'post',
	type: 'cors'
});
	}

}

const updateGateNFT = async (id, saleId, price, seller, forsale) => {
	var herocontract= await loadGateContract();
	var nft_name;
	var image;

	var heroType = await herocontract.methods.getHeroTypeOfToken(id).call();
	var heroURI = 	await herocontract.methods.getHeroInformation(heroType).call();

	if (DEBUG == false)
	{
  $.getJSON(replaceIPFS(heroURI.tokenURI), function (data) {
	
	nft_name = data.name;
	image = replaceIPFS(data.image);
	  
	

	  var totalString = webservice_gate + "/update?id=" + String(id) + "&listing=" + String(saleId) + "&price=" + String(price) + "&seller=" + String(seller) + "&forsale=" + String(forsale) + "&nft_name=" + String(nft_name) + "&image=" + String(image);
	
	  console.log(totalString);
	  
const response = fetch(totalString, {
		method: 'post',
	type: 'cors'
});
	  
	  console.log(response);
  
	  
  });
	  
	

	}


}

const updateHeroNFT = async (id, saleId, price, seller, forsale) => {
	var herocontract= await loadHeroContract();
	var nft_name;
	var image;

	var heroType = await herocontract.methods.getHeroTypeOfToken(id).call();
	var heroURI = 	await herocontract.methods.getHeroInformation(heroType).call();

	if (DEBUG == false)
	{
  $.getJSON(replaceIPFS(heroURI.tokenURI), function (data) {
	
	nft_name = data.name;
	image = replaceIPFS(data.image);
	  
	

	  var totalString = webservice_hero + "/update?id=" + String(id) + "&listing=" + String(saleId) + "&price=" + String(price) + "&seller=" + String(seller) + "&forsale=" + String(forsale) + "&nft_name=" + String(nft_name) + "&image=" + String(image);
	
	  
	  
const response = fetch(totalString, {
		method: 'post',
	type: 'cors'
});
  
	  
  });
	  
	

	}


}




async function buyItem() {
	running = true;
setButtonLoading(buy_btn, true);
	var isConnected = await isWeb3Connected();
	
	if (!isConnected)
		{
			await web3Connect();
		}
	
	isConnected = await isWeb3Connected();
	
	if (!isConnected)
		{
			setButtonLoading(buy_btn, false);
			modalmint.hide();
			modalhelp.show();
			return;
		}
  // Set Running
  await loadWeb3Main();


  marketplaceContract = await loadMarketContract();
 var listId = await marketplaceContract.methods.activeListingID(selectedaddress, selectedId).call();
	var saleItem = await marketplaceContract.methods.itemsForSale(listId).call();
	var itemPrice = saleItem.askingPrice;
  try {
    await marketplaceContract.methods.buyItem(listId).send({
      from: web3accounts[0],
      value: itemPrice
    }).once('transactionHash', function (hash) {

   



    }).once('receipt', function (receipt) {
updateNFTState(selectedaddress, selectedId);
        setButtonLoading(buy_btn, false);
		  running=false;
	  modalmint.hide();
   activatePane('inventory');
		
    }).catch(err => location.reload())
  } catch (err) {
    console.log(err);
  }
}

const stakeNFT = async() => {
	running = true;
	setButtonLoading(btn_stake, true);
	
	var stakeContract = await loadStakeContract();

	var staked = await stakeContract.methods.isStaked(selectedId).call();
	var setStake = true;
	if (staked == "0")
		{
			
		}
	else
		{
			setStake = false;
		}
		
	
	  var newID = await stakeContract.methods.stakeNFT(selectedId, setStake).send({ from: web3accounts[0]}).once('transactionHash', function (hash) {




  }).once('receipt', function (receipt) {
	  
	   setButtonLoading(btn_stake, false);
	  running=false;
	 modalmint.hide();
   activatePane('inventory');
	  
	

  }).catch(err => location.reload())

	
	
}

const claimRewards = async() =>
{
	 var stakeContract = await loadStakeContract();
	 setButtonLoading(stake_claim, true);
	
	 var newID = await stakeContract.methods.claimAllStakeValues().send({
    from: web3accounts[0]
  }).once('transactionHash', function (hash) {




  }).once('receipt', function (receipt) {
	  
	  setButtonLoading(stake_claim, false);

   activatePane('stake');
	  
	

  }).catch(err => location.reload())

}



async function postSaleItem(price) {
running = true;
	
	
	

	 var nftContract;
	  if (selectedaddress == nft_shroom_address)
		  {
			    nftContract = await loadShroomContract();
		  }
	  else if (selectedaddress == nft_hero_address) {
		  nftContract = await loadHeroContract();
	  }
	else
		{
			 nftContract = await loadGateContract();
		}
  var marketplaceContract = await loadMarketContract();
	
	
	
	
  setButtonLoading(sell_btn, true);
	
  finalPrice = Web3.utils.toWei(price);
	
 

  var newID = await marketplaceContract.methods.addItemToMarket(selectedId, selectedaddress, finalPrice).send({
    from: web3accounts[0]
  }).once('transactionHash', function (hash) {




  }).once('receipt', function (receipt) {
	  
	   setButtonLoading(sell_btn, false);
 	updateNFTState(selectedaddress, selectedId);
	  running=false;
	 modalmint.hide();
   activatePane('inventory');
	  
	

  }).catch(err => location.reload())

 
  

}





// Loader
window.addEventListener('DOMContentLoaded', initialize);
