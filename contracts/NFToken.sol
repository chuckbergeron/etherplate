pragma solidity ^0.4.23;

contract NFToken is ERC721 {
  uint256 constant TITLE_MIN_LENGTH = 8;
  uint256 constant TITLE_MAX_LENGTH = 64;

  /// The token type (1 for shield, 2 for sword, etc)
  mapping(uint256 => uint256) tokenType;

  /// The title of the token
  mapping(uint256 => string) tokenTitle;

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

    // this could cause issues:
    require(_type > 0);

    // TODO: Get this after pushing a new owner using the ERC721 standard
    var index = ?;

    tokenType[index] = _type;
    tokenTitle[index] = _title;

    BoughtToken(msg.sender, index);
  }

  /**
   * @dev Returns all of the tokens that the user owns
   * @return An array of token indices
   */
  function myTokens () external view returns (uint256[]) {
    uint256[] memory tokens = new uint256[](tokenCount[msg.sender]);
    uint256 currentIndex = 0;
    for (uint256 i = 0; i < tokenOwners.length; i++) {
      if (tokenOwners[i] == msg.sender) {
        tokens[currentIndex++] = i;
      }
    }
    return tokens;
  }

  function getTokenType (uint256 _tokenId) external view returns (uint256) {
    return tokenTypes[_tokenId];
  }

  function getTokenTitle (uint256 _tokenId) external view returns (string) {
    return tokenTitle[_tokenId];
  }

}
