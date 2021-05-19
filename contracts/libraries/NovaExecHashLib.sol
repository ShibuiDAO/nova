// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.7.6;

/// @notice Utility library to compute a Nova execHash from a nonce, strategy address, calldata and gas price.
library NovaExecHashLib {
    /// @notice Computes a Nova execHash from a nonce, strategy address, calldata and gas price.
    /// @return A Nova execHash.
    function compute(
        uint256 nonce,
        address strategy,
        bytes memory l1calldata,
        uint256 gasPrice
    ) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(nonce, strategy, l1calldata, gasPrice));
    }
}