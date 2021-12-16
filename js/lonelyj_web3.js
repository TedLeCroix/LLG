var web3BSC;
var web3;
var web3accounts;
var ethereum;


// Check Web3 Injection
const isEthereumInstalled = () => {

  const {
    ethereum
  } = window;
  return Boolean(ethereum);
};

const loadConnection = async () => {
	
  try {
    web3accounts = await ethereum.request({
      method: 'eth_accounts'
    });
	 await assignWeb3();
    return true;
  } catch (error) {

    return false;
  }
};

const setWeb3Behaviors = async () => {

  ethereum.on('accountsChanged', function (accounts) {

    location.reload();


  });
}

const isWeb3Connected = async() =>  {
    try {
    web3accounts = await ethereum.request({
      method: 'eth_accounts'
    });
	
    
  } 
	catch(err)
		{
			
			return false;
		}

	try
		{
	if (web3accounts.length != 0)
		{
			return true;
		}
	else
		{
			return false;
		}
		}
	catch(err)
		{
			return false;
		}
		
	

}

////////////////////////////////////////
// Use generic web3 portal
///////////////////////////////////////
const assignWeb3Portal = async () => {
  if (DEBUG) {
    web3BSC = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));
  } else {
    web3BSC = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));
  }

}


const assignWeb3 = async () => {
  await isEthereumInstalled();

	// If we have more than one provider grab MetaMask
	if (window.ethereum.providers)
		{
			for(var x = 0; x < window.ethereum.providers.length;x++)
				{
				
					if (window.ethereum.providers[x].isMetaMask)
						{
							window.ethereum = window.ethereum.providers[x];
						}
			
					
				}
		}

	
  if (ethereum) {

    await ethereum.request({
      method: 'eth_requestAccounts'
    });
    web3accounts = await ethereum.request({
      method: 'eth_accounts'
    });

    web3 = new Web3(window.ethereum);


  } 
}
