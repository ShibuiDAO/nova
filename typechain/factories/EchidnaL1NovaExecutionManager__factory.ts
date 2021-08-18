/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EchidnaL1NovaExecutionManager,
  EchidnaL1NovaExecutionManagerInterface,
} from "../EchidnaL1NovaExecutionManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "l1Calldata",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "exec_should_not_affect_currentExecHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "calldataByteGasEstimate",
            type: "uint64",
          },
          {
            internalType: "uint96",
            name: "missingGasEstimate",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "strategyCallGasBuffer",
            type: "uint96",
          },
        ],
        internalType: "struct L1_NovaExecutionManager.GasConfig",
        name: "newGasConfig",
        type: "tuple",
      },
    ],
    name: "should_always_be_able_to_update_gas_config",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFromRelayer_should_always_be_not_executable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161001d906100b9565b604051809103906000f080158015610039573d6000803e3d6000fd5b50600180546001600160a01b0319166001600160a01b0392831617808255604051919260009291169061006b906100c6565b610077939291906100d3565b604051809103906000f080158015610093573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b03929092169190911790556100fc565b6104d380610c9083390190565b6124ee8061116383390190565b6001600160a01b03938416815263ffffffff929092166020830152909116604082015260600190565b610b858061010b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063294bb8a814610046578063368a62cc1461005b5780633698ab9f1461006e575b600080fd5b610059610054366004610769565b610081565b005b610059610069366004610752565b6103de565b61005961007c36600461070f565b6105a8565b6000546040517f59f7cdfd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116906359f7cdfd906100e19089908990899089908990899060040161097f565b600060405180830381600087803b1580156100fb57600080fd5b505af115801561010f573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166371de9c106040518163ffffffff1660e01b815260040160206040518083038186803b15801561017957600080fd5b505afa15801561018d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b1919061073a565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb714e196040518163ffffffff1660e01b815260040160206040518083038186803b15801561021757600080fd5b505afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f919061073a565b1461025657fe5b600054604080517f41cd04200000000000000000000000000000000000000000000000000000000081529051309273ffffffffffffffffffffffffffffffffffffffff16916341cd0420916004808301926020929190829003018186803b1580156102c057600080fd5b505afa1580156102d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f891906106ec565b73ffffffffffffffffffffffffffffffffffffffff161461031557fe5b600054604080517f86b28c3c000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff8089169316916386b28c3c916004808301926020929190829003018186803b15801561038157600080fd5b505afa158015610395573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b991906106ec565b73ffffffffffffffffffffffffffffffffffffffff16146103d657fe5b505050505050565b6000546040517f409356f300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063409356f390610434908490600401610922565b600060405180830381600087803b15801561044e57600080fd5b505af1158015610462573d6000803e3d6000fd5b5050505060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663490a44326040518163ffffffff1660e01b815260040160606040518083038186803b1580156104d257600080fd5b505afa1580156104e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050a9190610878565b9194509250905067ffffffffffffffff8316610529602086018661085c565b67ffffffffffffffff161461053a57fe5b6bffffffffffffffffffffffff821661055960408601602087016108c4565b6bffffffffffffffffffffffff161461056e57fe5b6bffffffffffffffffffffffff811661058d60608601604087016108c4565b6bffffffffffffffffffffffff16146105a257fe5b50505050565b6000546040517f3996e60a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690633996e60a9061060090859085906004016108fc565b600060405180830381600087803b15801561061a57600080fd5b505af192505050801561062b575060015b6106d657610637610a41565b8061064257506106c7565b60008160405160200161065591906108e0565b6040516020818303038152906040528051906020012090507f12f23d7716dd1a944157e91db7e5466415b0ae89675083fdd628b7311c6298748114806106ba57507f0da2cef0baa299da43eb01d5677caedf73b609d06e98f70950db32c90f012a3281145b6106c057fe5b50506106d1565b3d6000803e3d6000fd5b6106d8565bfe5b5050565b80356106e781610b23565b919050565b6000602082840312156106fd578081fd5b815161070881610b23565b9392505050565b60008060408385031215610721578081fd5b823561072c81610b23565b946020939093013593505050565b60006020828403121561074b578081fd5b5051919050565b600060608284031215610763578081fd5b50919050565b60008060008060008060c08789031215610781578182fd5b8635955060208088013561079481610b23565b9550604088013567ffffffffffffffff808211156107b0578485fd5b818a0191508a601f8301126107c3578485fd5b8135818111156107cf57fe5b604051847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116820101818110848211171561080a57fe5b60405281815283820185018d1015610820578687fd5b8185850186830137908101909301859052509094505060608701359250610849608088016106dc565b915060a087013590509295509295509295565b60006020828403121561086d578081fd5b813561070881610b48565b60008060006060848603121561088c578283fd5b835161089781610b48565b60208501519093506108a881610b5e565b60408501519092506108b981610b5e565b809150509250925092565b6000602082840312156108d5578081fd5b813561070881610b5e565b600082516108f2818460208701610a0f565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b60608101823561093181610b48565b67ffffffffffffffff168252602083013561094b81610b5e565b6bffffffffffffffffffffffff908116602084015260408401359061096f82610b5e565b8082166040850152505092915050565b600087825273ffffffffffffffffffffffffffffffffffffffff808816602084015260c0604084015286518060c08501526109c18160e0860160208b01610a0f565b60e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250508560608401528085166080840152508260a0830152979650505050505050565b60005b83811015610a2a578181015183820152602001610a12565b838111156105a25750506000910152565b60e01c90565b600060443d1015610a5157610b20565b600481823e6308c379a0610a658251610a3b565b14610a6f57610b20565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d016004823e80513d67ffffffffffffffff8160248401118184111715610abd5750505050610b20565b82840192508251915080821115610ad75750505050610b20565b503d83016020828401011115610aef57505050610b20565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01681016020016040529150505b90565b73ffffffffffffffffffffffffffffffffffffffff81168114610b4557600080fd5b50565b67ffffffffffffffff81168114610b4557600080fd5b6bffffffffffffffffffffffff81168114610b4557600080fdfea164736f6c6343000706000a608060405234801561001057600080fd5b506104b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633dbb202b146100465780636e296e4514610113578063e542f64014610144575b600080fd5b6101116004803603606081101561005c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561009457600080fd5b8201836020820111156100a657600080fd5b803590602001918460018302840111640100000000831117156100c857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903563ffffffff1691506101e79050565b005b61011b6101ec565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101116004803603606081101561015a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561019257600080fd5b8201836020820111156101a457600080fd5b803590602001918460018302840111640100000000831117156101c657600080fd5b91935091503573ffffffffffffffffffffffffffffffffffffffff16610208565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178255604051829187169086908690808383808284376040519201945060009350909150508083038183865af19150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b50600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690559092509050816102e28261038e565b90610385576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561034a578181015183820152602001610332565b50505050905090810190601f1680156103775780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505050505050565b60606044825110156103d4575060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c7900000060208201526104a1565b60048201805190926024019060208110156103ee57600080fd5b810190808051604051939291908464010000000082111561040e57600080fd5b90830190602082018581111561042357600080fd5b825164010000000081118282018810171561043d57600080fd5b82525081516020918201929091019080838360005b8381101561046a578181015183820152602001610452565b50505050905090810190601f1680156104975780820380516001836020036101000a031916815260200191505b5060405250505090505b91905056fea164736f6c6343000706000a610160604052600d61010081905262030d406101205261138861014052600280546001600160401b031916909117600160401b600160a01b0319166a030d400000000000000000176001600160a01b031661027160a31b1790557ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef6006553480156200008a57600080fd5b50604051620024ee380380620024ee833981016040819052620000ad916200016f565b600180546001600160a01b031916339081179091556040518291907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a26001600160601b0319606091821b81166080529084901b1660a0526001600160e01b031960e083901b1660c052604051620001299062000161565b604051809103906000f08015801562000146573d6000803e3d6000fd5b5060601b6001600160601b03191660e05250620001e2915050565b61037e806200217083390190565b60008060006060848603121562000184578283fd5b83516200019181620001c9565b602085015190935063ffffffff81168114620001ab578283fd5b6040850151909250620001be81620001c9565b809150509250925092565b6001600160a01b0381168114620001df57600080fd5b50565b60805160601c60a05160601c60c05160e01c60e05160601c611f2e620002426000398061080e5280610c8e528061144452508061118c52806113995250806102ce52806110c25250806105c05280610c0852806110865250611f2e6000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806351211924116100d85780638da5cb5b1161008c578063bf7e214f11610066578063bf7e214f146102b4578063eb714e19146102bc578063f705441f146102c457610177565b80638da5cb5b1461028f578063a6d4b50214610297578063b7daba36146102ac57610177565b806371de9c10116100bd57806371de9c101461026c5780637a9e5e4b1461027457806386b28c3c1461028757610177565b8063512119241461024457806359f7cdfd1461025957610177565b8063380174e01161012f578063409356f311610114578063409356f31461021257806341cd042014610225578063490a44321461022d57610177565b8063380174e0146101ea5780633996e60a146101ff57610177565b8063148db7b511610160578063148db7b5146101af57806316be836c146101c25780631e7660a0146101ca57610177565b80630d1fdd341461017c57806313af40351461019a575b600080fd5b6101846102cc565b60405161019191906119d2565b60405180910390f35b6101ad6101a836600461180e565b6102f0565b005b6101ad6101bd366004611875565b6103fe565b6101846105be565b6101dd6101d836600461180e565b6105e2565b6040516101919190611ada565b6101f26105f7565b6040516101919190611aee565b6101ad61020d36600461182a565b610630565b6101ad610220366004611894565b61090e565b6101846109e6565b610235610a02565b60405161019193929190611d95565b61024c610a49565b6040516101919190611a9e565b6101ad6102673660046118ab565b610b08565b61024c611231565b6101ad61028236600461180e565b611255565b61018461135f565b61018461137b565b61029f611397565b6040516101919190611d84565b6101ad6113bb565b610184611420565b61024c61143c565b610184611442565b7f000000000000000000000000000000000000000000000000000000000000000081565b61031e336000357fffffffff0000000000000000000000000000000000000000000000000000000016611466565b61038957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a250565b61042c336000357fffffffff0000000000000000000000000000000000000000000000000000000016611466565b61049757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b3360009081526003602052604081205460ff1660028111156104b557fe5b146104f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611bdd565b60405180910390fd5b600081600281111561050357fe5b141561053b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611cb9565b33600090815260036020526040902080548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600281111561057f57fe5b02179055507f0d34da4cb8cb7b390f99942c84e2a40502ce8af0740de2790ab346d69b486b8e816040516105b39190611ada565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b60036020526000908152604090205460ff1681565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000081525081565b61065e336000357fffffffff0000000000000000000000000000000000000000000000000000000016611466565b6106c957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b60055473ffffffffffffffffffffffffffffffffffffffff16331461071a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611b38565b6006547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef1415610776576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611b6f565b60023360009081526003602052604090205460ff16600281111561079657fe5b146107cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611c4b565b600480546040517f178c477500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169363178c4775936108499388938893921691339101611a66565b602060405180830381600087803b15801561086357600080fd5b505af1158015610877573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089b9190611855565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000081525090610909576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec9190611aee565b505050565b61093c336000357fffffffff0000000000000000000000000000000000000000000000000000000016611466565b6109a757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b8060026109b48282611dc5565b9050507f97fef8617a94e7b55befbe752561f54574144b26879a5b626cf1897eed20d5cf816040516105b39190611d27565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b60025467ffffffffffffffff8116906bffffffffffffffffffffffff6801000000000000000082048116917401000000000000000000000000000000000000000090041683565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000060208201529051610a8b9190602401611aee565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a0000000000000000000000000000000000000000000000000000000001781529051902081565b60005a905081421115610b47576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611c82565b610b75336000357fffffffff0000000000000000000000000000000000000000000000000000000016611466565b610bab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611ba6565b6006547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef14610c06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611b01565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415610c8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611cf0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415610d12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611cf0565b73ffffffffffffffffffffffffffffffffffffffff8716301415610d62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611cf0565b6000610da9898989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152503a92508b91506115b59050565b6006819055600480547fffffffffffffffffffffffff000000000000000000000000000000000000000090811633179091556005805473ffffffffffffffffffffffffffffffffffffffff8c169216821790559091506000908190610e75610e125a8790611699565b600254610e6f906bffffffffffffffffffffffff680100000000000000008204811691839174010000000000000000000000000000000000000000820416908290610e6890369067ffffffffffffffff16611710565b8f90611699565b90611699565b8a8a604051610e859291906119c2565b60006040518083038160008787f1925050503d8060008114610ec3576040519150601f19603f3d011682016040523d82523d6000602084013e610ec8565b606091505b50915091508180610f9e5750604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000060208201529051610f169190602401611aee565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a000000000000000000000000000000000000000000000000000000000178152915190912082519183019190912014155b80610fdd5750600273ffffffffffffffffffffffffffffffffffffffff8b1660009081526003602052604090205460ff166002811115610fda57fe5b14155b611013576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec90611c14565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef60065560006110826110475a8790611699565b60025461107c906bffffffffffffffffffffffff68010000000000000000820416908290369067ffffffffffffffff16611710565b9061178a565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633dbb202b7f0000000000000000000000000000000000000000000000000000000000000000639d21cd1560e01b878b8815876040516024016111019493929190611aa7565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009485161790525160e085901b90921682526111b492917f000000000000000000000000000000000000000000000000000000000000000090600401611a21565b600060405180830381600087803b1580156111ce57600080fd5b505af11580156111e2573d6000803e3d6000fd5b50505050837fd118217a540bf32db22ebd89e392054a9d0f5e30e6bfa753a87baa44ec0a60c63385158460405161121b939291906119f3565b60405180910390a2505050505050505050505050565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef81565b611283336000357fffffffff0000000000000000000000000000000000000000000000000000000016611466565b6112ee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178083556040519116917f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad91a250565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000602082015290517f08c379a00000000000000000000000000000000000000000000000000000000081526104ec9190600401611aee565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600073ffffffffffffffffffffffffffffffffffffffff831630141561148e575060016115af565b60015473ffffffffffffffffffffffffffffffffffffffff848116911614156114b9575060016115af565b60005473ffffffffffffffffffffffffffffffffffffffff16806114e15760009150506115af565b604080517fb700961300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301523060248301527fffffffff000000000000000000000000000000000000000000000000000000008616604483015291519183169163b700961391606480820192602092909190829003018186803b15801561157f57600080fd5b505afa158015611593573d6000803e3d6000fd5b505050506040513d60208110156115a957600080fd5b50519150505b92915050565b60008585858585604051602001808681526020018573ffffffffffffffffffffffffffffffffffffffff1660601b815260140184805190602001908083835b6020831061163157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016115f4565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905292019485525083810192909252506040805180840383018152928101905281519101209998505050505050505050565b60008282111561170a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008261171f575060006115af565b8282028284828161172c57fe5b0414611783576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611f016021913960400191505060405180910390fd5b9392505050565b60008282018381101561178357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b803561180981611eab565b919050565b60006020828403121561181f578081fd5b813561178381611eab565b6000806040838503121561183c578081fd5b823561184781611eab565b946020939093013593505050565b600060208284031215611866578081fd5b81518015158114611783578182fd5b600060208284031215611886578081fd5b813560038110611783578182fd5b6000606082840312156118a5578081fd5b50919050565b600080600080600080600060c0888a0312156118c5578283fd5b8735965060208801356118d781611eab565b9550604088013567ffffffffffffffff808211156118f3578485fd5b818a0191508a601f830112611906578485fd5b813581811115611914578586fd5b8b6020828501011115611925578586fd5b60208301975080965050505060608801359250611944608089016117fe565b915060a0880135905092959891949750929550565b60008151808452815b8181101561197e57602081850181015186830182015201611962565b8181111561198f5782602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000828483379101908152919050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff9390931683529015156020830152604082015260600190565b600073ffffffffffffffffffffffffffffffffffffffff8516825260606020830152611a506060830185611959565b905063ffffffff83166040830152949350505050565b73ffffffffffffffffffffffffffffffffffffffff948516815260208101939093529083166040830152909116606082015260800190565b90815260200190565b93845273ffffffffffffffffffffffffffffffffffffffff92909216602084015215156040830152606082015260800190565b6020810160038310611ae857fe5b91905290565b6000602082526117836020830184611959565b60208082526011908201527f414c52454144595f455845435554494e47000000000000000000000000000000604082015260600190565b60208082526014908201527f4e4f545f43555252454e545f5354524154454759000000000000000000000000604082015260600190565b60208082526013908201527f4e4f5f4143544956455f455845435554494f4e00000000000000000000000000604082015260600190565b6020808252600c908201527f554e415554484f52495a45440000000000000000000000000000000000000000604082015260600190565b60208082526012908201527f414c52454144595f524547495354455245440000000000000000000000000000604082015260600190565b6020808252600b908201527f484152445f524556455254000000000000000000000000000000000000000000604082015260600190565b60208082526016908201527f554e535550504f525445445f5249534b5f4c4556454c00000000000000000000604082015260600190565b6020808252600d908201527f504153545f444541444c494e4500000000000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f5249534b5f4c4556454c0000000000000000000000000000604082015260600190565b6020808252600f908201527f554e534146455f53545241544547590000000000000000000000000000000000604082015260600190565b606081018235611d3681611ed0565b67ffffffffffffffff1682526020830135611d5081611ee6565b6bffffffffffffffffffffffff9081166020840152604084013590611d7482611ee6565b8082166040850152505092915050565b63ffffffff91909116815260200190565b67ffffffffffffffff9390931683526bffffffffffffffffffffffff918216602084015216604082015260600190565b8135611dd081611ed0565b67ffffffffffffffff81167fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008354161790508082556020830135611e1381611ee6565b73ffffffffffffffffffffffff00000000000000008160401b167fffffffffffffffffffffffff000000000000000000000000ffffffffffffffff8316179150508082556040830135611e6581611ee6565b7fffffffffffffffffffffffff00000000000000000000000000000000000000008160a01b1673ffffffffffffffffffffffffffffffffffffffff831617835550505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611ecd57600080fd5b50565b67ffffffffffffffff81168114611ecd57600080fd5b6bffffffffffffffffffffffff81168114611ecd57600080fdfe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c6343000706000a60a06040523360601b60805234801561001757600080fd5b5060805160601c6103456100396000398060cd528061031652506103456000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063178c47751461003b5780634719c36114610098575b600080fd5b6100846004803603608081101561005157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013591604082013581169160600135166100c9565b604080519115158252519081900360200190f35b6100a0610314565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16331461016f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830188905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938b169392918291908083835b6020831061024c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161020f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146102ae576040519150601f19603f3d011682016040523d82523d6000602084013e6102b3565b606091505b5091509150816102c85760009250505061030c565b805115610305578051602014156102fa578080602001905160208110156102ee57600080fd5b5051925061030c915050565b60009250505061030c565b6001925050505b949350505050565b7f00000000000000000000000000000000000000000000000000000000000000008156fea164736f6c6343000706000a";

export class EchidnaL1NovaExecutionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EchidnaL1NovaExecutionManager> {
    return super.deploy(
      overrides || {}
    ) as Promise<EchidnaL1NovaExecutionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EchidnaL1NovaExecutionManager {
    return super.attach(address) as EchidnaL1NovaExecutionManager;
  }
  connect(signer: Signer): EchidnaL1NovaExecutionManager__factory {
    return super.connect(signer) as EchidnaL1NovaExecutionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EchidnaL1NovaExecutionManagerInterface {
    return new utils.Interface(_abi) as EchidnaL1NovaExecutionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EchidnaL1NovaExecutionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EchidnaL1NovaExecutionManager;
  }
}
