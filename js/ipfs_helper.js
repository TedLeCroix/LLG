////////////////////////////////////////////////
// REPLACE THIS WITH LOCAL OR PRIVATE GATEWAY
////////////////////////////////////////////////
const GLOBAL_IPFS_GATEWAY = "https://lonelyjmarket.mypinata.cloud/ipfs/";


const getIPFSJson = async(inIPFS) =>
{
	
	
	const response = await fetch(replaceIPFS(inIPFS));
	const file = await response.json();
    return file;
}

function replaceIPFS(inIPFS)
{


		return inIPFS.replace("ipfs://", GLOBAL_IPFS_GATEWAY);
		

}

const getIPFSImageURL = async(inIPFSImage) =>
{

		return inIPFSImage.replace("ipfs://", GLOBAL_IPFS_GATEWAY);


}


function getNFTAttributes(data) {
  if (data.hasOwnProperty("attributes")) {
    return data.attributes;
  }
}

function isIPFSFile(uri) {
	if (uri)
		{
  if (uri.length > 4) {
    if (uri.substring(0, 4).toLowerCase() == "ipfs") {
      return true;
    } else {
      return false;
    }
  }
		}

  return false;
}

function getImgUri(data) {
  if (data.hasOwnProperty("image")) {

    return data.image;
  } else {
    if (data.hasOwnProperty("image_url")) {
      return data.image_url;
    }

    return "";
  }

}



