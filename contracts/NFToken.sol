pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';

contract NFToken is ERC721Token {
  uint256 constant TITLE_MIN_LENGTH = 8;
  uint256 constant TITLE_MAX_LENGTH = 64;

  /// The token type (1 for shield, 2 for sword, etc)
  mapping(uint256 => uint256) tokenTypes;

  /// The title of the token
  mapping(uint256 => string) tokenTitles;

  constructor() ERC721Token("Etherplate NFToken", "ENFT") public {}

  /// The event emitted (useable by web3) when a token is purchased
  event BoughtToken(address indexed buyer, uint256 tokenId);

  /**
   * @dev Creates an instance of an token and mints it to the purchaser
   * @param _title The short title of the token
   */
  function buyToken (
    uint256 _type,
    string _title
  ) external payable {
    bytes memory _titleBytes = bytes(_title);
    require(_titleBytes.length > TITLE_MIN_LENGTH);
    require(_titleBytes.length <= TITLE_MAX_LENGTH);

    // require(_type > 0);

    uint256 index = allTokens.length + 1;

    _mint(msg.sender, index);

    tokenTypes[index] = _type;
    tokenTitles[index] = _title;

    emit BoughtToken(msg.sender, index);
  }

  /**
   * @dev Returns all of the tokens that the user owns
   * @return An array of token indices
   */
  function myTokens () external view returns (uint256[]) {
    return ownedTokens[msg.sender];
  }

  function getTokenType (uint256 _tokenId) external view returns (uint256) {
    return tokenTypes[_tokenId];
  }

  function getTokenTitle (uint256 _tokenId) external view returns (string) {
    return tokenTitles[_tokenId];
  }

}
